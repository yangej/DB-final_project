import router from './index';
import store from '../store';
// import { teacherRoutes, studentRoutes } from "../../router";

const routerHook = async (to, from, next) => {
    const role = store.state.user.role;
    const hasToken = store.state.user.token;

    if (hasToken) {
        if (role) {
            const pathRole = to.path.split('/')[1];

            if (to.path === '/login') {
                next(`/${role}`);
            } else if (to.path === '/') {
                next(`/${role}`);
            } else if (pathRole && role !== pathRole) {
                next(`/${role}`);
            } else {
                next();
            }
        } else {
            next();
        }
    } else {
        next();
    }
};

router.beforeEach(routerHook);
