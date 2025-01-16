import {createSlice} from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";

const url = 'http://localhost:9000/'
const initialState = {
    highScore: 0,
    score: 0,
    numQuestions:0,
    difficultyLevel: "",
    isLoading: false,
    status: 'startScreen',
    darkMode: false,
    questions:[],
    secondsRemaining: 0,
    answer: null,
    index: 0,
    type: ""

    


}

const questionSlice = createSlice({name: 'quiz', initialState, reducers: {
    changeDarkMode(state) {
        state.darkMode = !state.darkMode;
    },
    setIsLoading(state, action) {
        state.isLoading = true;
        state.type = action.payload;


    },
    setData(state, action) {
        state.questions = action.payload;
        state.isLoading = false;
        state.status = 'infoScreen';
    },
    setDifficulty(state, action) {
        state.difficultyLevel = action.payload;
        state.status = 'quizScreen'
        
        state.numQuestions = state.questions[action.payload].length;
        state.secondsRemaining = (state.questions[action.payload].length * 60) / 2
        
        if (action.payload == 'hard') {
            state.secondsRemaining = (state.questions[action.payload].length * 60) / 3
        }

    },
    tick(state) {
        state.secondsRemaining = state.secondsRemaining - 1;
        if(state.secondsRemaining <= 0) {
            state.status = 'finishScreen'
        }
    },
    setAnswer(state, action) {
        state.answer = action.payload;
    },
    nextAnswer(state) {
        state.answer = null;
        state.index = state.index + 1
    },
    setScore(state) {
        state.score = state.score + 1;
       
    },
    setFinish(state) {
        state.status = "finishScreen"


    },
    reset(state) {
        return initialState

    }






} })

export function changeType(type) {
    if (type == "") return;
    return async function(dispatch, getState) {
        
        dispatch({type:'quiz/setIsLoading', payload:type});
        const res = await fetch(`${url}${type}`);
        const data = await res.json();
       
        dispatch({type:'quiz/setData', payload: data})
        



    }


}
export const {changeDarkMode, setIsLoading, setData, setDifficulty, tick, setAnswer, setScore, nextAnswer, setFinish, reset} = questionSlice.actions;

export default questionSlice.reducer