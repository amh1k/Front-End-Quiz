import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector } from 'react-redux'
import './index.css'
import LandingPage from './Pages/LandingPage'
import InfoPage from './Pages/InfoPage'
import QuizPage from './Pages/QuizPage'
import FinishPage from './Pages/FinishPage'

function App() {
  const {darkMode, status} = useSelector(state => state.quiz);
  useEffect(() => {
    const bodyElement = document.documentElement;
    if (darkMode) {
      if (!bodyElement.classList.contains('dark') ) {
        bodyElement.classList.add('dark');
      }
    }
    else {
      bodyElement.classList?.remove('dark');
    }
  }, [darkMode])


  return (
    <div>
      {status == 'startScreen' &&  <LandingPage/>}
      {status == 'infoScreen' && <InfoPage/>}
      {status == 'quizScreen' && <QuizPage/>}
      {status == 'finishScreen' && <FinishPage/>}
    </div>
    
  )
}

export default App
