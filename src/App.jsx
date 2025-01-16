import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector } from 'react-redux'
import './index.css'
import LandingPage from './Pages/LandingPage'
import InfoPage from './Pages/InfoPage'
import QuizPage from './Pages/QuizPage'
import FinishPage from './Pages/FinishPage'
import Loading from './Pages/Loading'
import Error from './Pages/Error'

function App() {
  const {darkMode, status, isLoading, error} = useSelector(state => state.quiz);
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
    {error && <Error />}
    {!error && status === 'startScreen' && !isLoading && <LandingPage />}
    {!error && status === 'startScreen' && isLoading && <Loading />}
    {!error && status === 'infoScreen' && <InfoPage />}
    {!error && status === 'quizScreen' && <QuizPage />}
    {!error && status === 'finishScreen' && <FinishPage />}
  </div>
    
  )
}

export default App
