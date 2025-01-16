import { useDispatch, useSelector } from "react-redux";
import { nextAnswer, setFinish } from "../features/quizSlice";
export default function Next() {
    const dispatch = useDispatch();
    const {numQuestions, index, answer} = useSelector(state => state.quiz)
    const hasAnswerd = answer !== null;
    function handleClick() {
        if (index !== numQuestions - 1)dispatch(nextAnswer());
        else {
            dispatch(setFinish());
        }
    }


    return(
        <button className="absolute -bottom-[12%]  flex space-x-2 justify-start items-center  p-3 rounded-md shadow-lg bg-black dark:bg-white md:p-4 px-6 lg:right-[20%] hover:opacity-80" onClick = {handleClick} disabled = {!hasAnswerd}>
            <p className= "font-sans text-1xl text-white md:text-1xl dark:text-black md:text-2xl">{index == numQuestions -1 ? "Finish": "Next"}</p>
            <svg className = "w-6 h-6 text-white dark:text-black"data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLineCap="round" strokeLineJoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
</svg>


        </button>
    )

}