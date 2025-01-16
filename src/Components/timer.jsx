import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { tick } from "../features/quizSlice";
export default function Timer() {
    const dispatch = useDispatch();
    const {secondsRemaining} = useSelector(state =>state.quiz);
    const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch(tick());
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
    
    return(
        <h4 className="text-2xl font-bold dark:text-white md:text-2xl">
            {mins < 10 && '0'}{mins}:{seconds < 10 && '0'}{seconds}

        </h4>
    )
}
