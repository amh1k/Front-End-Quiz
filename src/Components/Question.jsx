import { useDispatch, useSelector } from "react-redux"
import Options from "./Options";
export default function Question() {
    const {index, questions, difficultyLevel} = useSelector(state =>state.quiz);
    const difficultyQuestions = questions[difficultyLevel] 
  
    // Accessing the current question by index with a fallback to avoid errors
    const question = difficultyQuestions[index]
  
    return (
         <div className="flex flex-col space-y-6">

        <h2 className="text-2xl text-center font-semibold font-sans md:text-left md: max-w-md md:text-4xl dark:text-white">
          {question.question}
        </h2>
        <Options question = {question}/>
        </div>
    )
}