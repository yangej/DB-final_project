import store from '../store';
import router from '../router';

export function setInterceptor(axiosInstance) {
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = store.state.user.token;
            if (token) {
                config.headers['token'] = token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    axiosInstance.interceptors.response.use(
        async (response) => {
            const result = response.data.result;

            if (result.status === 'fail') {
                await store.dispatch('popup/updatePopup', {
                    popupText: result.err,
                    imgSrc: '/img/disturb.svg',
                });

                if (result.err === '請重新登入') {
                    await store.dispatch('user/logout');
                    await router.push('/login');
                }
            } else {
                if (store.state.user.token === null) {
                    await store.dispatch('user/login', {
                        token: result.token,
                        role: result.identity,
                    });
                    await router.push(`/${result.identity}`);
                }
            }

            return result;
        },
        async (error) => {
            return Promise.reject(error);
        }
    );
}
