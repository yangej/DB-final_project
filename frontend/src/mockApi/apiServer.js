import { createServer } from 'miragejs';
import { mockCourses } from '../dummies/courses';
import { mockQuestions } from '../dummies/questions';
import { mockStudents } from '../dummies/students';
import { mockScores } from '../dummies/scores';

export function makeServer() {
    let server = createServer({
        namespace: 'api',

        seeds(server) {
            server.db.loadData({
                courses: mockCourses,
                questions: mockQuestions,
                students: mockStudents,
                scores: mockScores,
                answers: [],
            });
        },

        routes() {
            this.namespace = 'api';

            this.get('/courses', (schema) => {
                return schema.db.courses;
            });

            this.get('/questions', (schema) => {
                return schema.db.questions;
            });

            this.get('/questions/:id', (schema, request) => {
                return schema.db.questions.find(request.params.id);
            });

            this.post('/send-questions/:id', (schema, request) => {
                const quesRequest = JSON.parse(request.requestBody);
                return schema.db.questions.update(request.params.id, {
                    isSent: quesRequest,
                });
            });

            this.get('/students', (schema) => {
                return schema.db.students;
            });

            this.get('/students/:id', (schema, request) => {
                return schema.db.students.find(request.params.id);
            });

            this.get('/login', (schema) => {
                return schema.db.students.find(109462008);
            });

            this.post('/answers', (schema, request) => {
                const answerReq = JSON.parse(request.requestBody);
                return schema.db.answers.insert(answerReq);
            });

            this.get('/scores/:id', (schema, request) => {
                return schema.db.scores.findBy({
                    studentId: request.params.id,
                });
            });
        },
    });

    return server;
}
