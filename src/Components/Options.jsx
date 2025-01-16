import { useDispatch, useSelector } from "react-redux";
import { setAnswer, setScore } from "../features/quizSlice";

export default function Options({question}) {
    const dispatch = useDispatch();
     const {answer} = useSelector(state => state.quiz);
     const hasAnswered = answer != null
     function handleClick(e) {
        
        // Set answer here
       
        dispatch(setAnswer(e.target.textContent));
        if (e.target.textContent === question.correct) {
            dispatch(setScore());

        }

     }
    return (
        <div className="flex flex-col space-y-4">
            {question.options.map((option, index) => {
                return (<button className={`flex flex-col justify-center items-center p-6 text-1xl bg-black text-white font-sans transition-all duration-200 shadow-md rounded-md hover:opacity-80 md:max-w-lg md:text-2xl dark:bg-white dark:text-black ${hasAnswered ?  question.correct === option ? 'outline outline-4 outline-green-500': 'outline outline-4 outline-red-500' :''}`} onClick={(e)=>handleClick(e)}  disabled = {hasAnswered}>
                    <p>{option}</p>
                </button>)
            })}

            
        </div>
    )
}