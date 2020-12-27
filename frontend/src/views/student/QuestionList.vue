<template>
    <back-card
        class="mx-auto"
        action-text="返回課堂回答"
        @button-click="goTo('/student/course-list')"
    >
        <div class="pa-14">
            <unit-title :unit="unit" :title="title"></unit-title>
            <div>
                <question-row
                    v-for="(question, index) in questions"
                    :answer="question.studentAnswer"
                    :key="`question-${index}`"
                    :question="question.question"
                    :options="question.options"
                    @update-value="updateValue($event, index)"
                >
                    <div
                        v-if="question.showAnalysis"
                        class="primary lighten-1 pa-5"
                    >
                        <span
                            :class="[
                                question.studentAnswer !== question.answer
                                    ? 'warning--text'
                                    : 'primary--text',
                            ]"
                            class="font-weight-medium"
                        >
                            {{ question.analysis }}
                        </span>
                    </div>
                </question-row>
            </div>
            <custom-button
                v-if="!isSent"
                text="送出回答"
                width="130"
                @click="send"
            ></custom-button>
        </div>
    </back-card>
</template>

<script>
import BackCard from '@/components/common/BackCard';
import UnitTitle from '@/components/common/UnitTitle';
import QuestionRow from '@/components/common/QuestionRow';
import CustomButton from '@/components/common/CustomButton';
import { apiExecutor } from '@/api';
import { mapActions } from 'vuex';

export default {
    name: 'QuestionList',
    components: { BackCard, UnitTitle, QuestionRow, CustomButton },
    data() {
        return {
            id: 0,
            unit: '',
            title: '',
            questions: [],
            isSent: false,
            score: 0,
            questionIds: [],
            falseAnswerCount: 0,
        };
    },
    computed: {
        answerRequest() {
            return {
                uid: this.id,
                score: this.score,
                qid: this.questionIds,
                ans: this.questions.map((question) => question.studentAnswer),
            };
        },
        popupOptions() {
            return this.falseAnswerCount === 0
                ? {
                      popupText: '恭喜全對',
                      imgSrc: '/img/cool.svg',
                  }
                : {
                      popupText: `答錯了 ${this.falseAnswerCount} 題`,
                      imgSrc: '/img/disturb.svg',
                  };
        },
    },
    methods: {
        ...mapActions({
            showPopup: 'popup/updatePopup',
        }),
        goTo(path) {
            this.$router.push(path);
        },
        updateValue(value, index) {
            this.questions[index].studentAnswer = value;
        },
        countScore(questions) {
            const total = 100;
            const scorePerQues = total / this.questions.length;
            let falseAnswerCount = 0,
                tempScore = 0;

            questions.forEach((question) => {
                if (question.answer === question.studentAnswer) {
                    tempScore += scorePerQues;
                } else {
                    falseAnswerCount += 1;
                }
            });

            this.score = Math.floor(tempScore);
            this.falseAnswerCount = falseAnswerCount;
        },
        hideButton() {
            this.isSent = true;
        },
        showAllAnalysis() {
            this.questions.map((question) => (question.showAnalysis = true));
        },
        async send() {
            this.countScore(this.questions);
            await apiExecutor.submitAnswers(this.answerRequest);
            this.showPopup(this.popupOptions);
            this.hideButton();
            this.showAllAnalysis();
        },
        resetQuestions(questions) {
            return questions.map((question) => {
                const options = [
                    `A ${question.optionA}`,
                    `B ${question.optionB}`,
                    `C ${question.optionC}`,
                    `D ${question.optionD}`,
                ];
                return {
                    id: question.id,
                    analysis: question.analyze,
                    question: question.question,
                    answer: question.questionAnswer,
                    studentAnswer: question.studentAnswer,
                    showAnalysis: question.studentAnswer ? true : false,
                    options,
                };
            });
        },
        getQuestionIds(questions) {
            return questions.map((question) => question.id);
        },
        getIsSent(questions) {
            return questions[0].studentAnswer ? true : false;
        },
    },
    async mounted() {
        this.id = this.$route.params.id;

        const response = await apiExecutor.getQuestions(this.id);
        this.questions = this.resetQuestions(response.questions);
        this.questionIds = this.getQuestionIds(this.questions);
        this.isSent = this.getIsSent(this.questions);
        this.unit = `Unit ${this.$route.params.id}`;
        this.title = response.name;
    },
};
</script>
