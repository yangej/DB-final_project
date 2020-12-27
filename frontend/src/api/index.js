import axios from 'axios';
import { setInterceptor } from './interceptor';

const apiFactory = function (axios) {
    return {
        getAllUnits() {
            return axios.get('/units');
        },
        getQuestions(id) {
            return axios.get(`/questions/${id}`);
        },
        setQuestionSent(unitId) {
            return axios.post('/send-questions', { uid: unitId });
        },
        getAllStudents() {
            return axios.get('/student-list');
        },
        getStudentDetail(id) {
            return axios.get(`/student/detail/${id}`);
        },
        login(loginInfos) {
            return axios.post('/login', loginInfos);
        },
        register(registerInfos) {
            return axios.post('/register', registerInfos);
        },
        submitAnswers(answerInfos) {
            return axios.post('/answer', answerInfos);
        },
        getAllStudentScores(unitId) {
            return axios.get(`/all-students-scores/${unitId}`);
        },
        getQuestionResults(unitId) {
            return axios.get(`/question-result/${unitId}`);
        },
        getUnitOverview() {
            return axios.get('/question-overview');
        },
    };
};

const config = {
    baseURL: 'http://localhost:5000',
    'Content-Type': 'application/json',
};

const axiosInstance = axios.create(config);
setInterceptor(axiosInstance);

export const apiExecutor = apiFactory(axiosInstance);
