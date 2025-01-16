import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeDarkMode, changeType } from "../features/quizSlice";


export default function LandingPage() {
    const dispatch = useDispatch();

    const {darkMode} = useSelector(store => store.quiz);
    function handleDarkMode() {
        dispatch(changeDarkMode());
    }
    function handleClick(e) {
      
      dispatch(changeType(e.target.textContent.toLowerCase()));
       
      
    }
    
    
    return (
    <section id = "landing-page" className="transition-all duration-200 dark:bg-black min-h-screen">
        <div className="container p-6 mx-auto">
            <div className="flex flex-col space-y-14 items-center">
            <div>
            <button
          id="theme-toggle"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 5"
          onClick={handleDarkMode}
        >
          
          <svg
            id="theme-toggle-dark-icon"
            className = {`h-5 w-5 ${darkMode== true ? 'hidden' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
    


          <svg
            id="theme-toggle-light-icon"
            className= {`w-5 h-5 ${darkMode== false ? 'hidden' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        </div>
        <h1 className="text-3xl max-w-xs text-center font-semibold opacity-80 dark:text-white md:text-5xl md:max-w-sm md:leading-normal md:text-left">Welcome to the <span className="font-bold">Front End Quiz</span></h1>
        <div className="flex flex-col space-y-3">
            <h4 className="italic dark:text-white">Pick a subject to get started</h4>
            <div className="flex flex-col space-y-4">
                {/* First box */}
              <button className="group p-4  bg-white flex flex-col justify-start items-center rounded-md shadow-md md:max-w-sm hover:opacity-80" onClick={(e)=>handleClick(e)}>
                <div className="flex space-x-6">
                <h4 className= "font-semibold text-2xl md:text-3xl group-hover:opacity-80">HTML</h4>
                </div>
               
              </button>
               {/* second box */}
              <button className="group p-4 bg-white flex flex-col justify-start items-center rounded-md shadow-md md:max-w-sm hover:opacity-80"  onClick={(e)=>handleClick(e)}>
                <div className="flex space-x-6">
                <h4 className= "font-semibold text-2xl md:text-3xl group-hover:opacity-80">CSS</h4>
                </div>
                
              </button>
              {/* third box box */}
              <button className="group p-4 bg-white flex flex-col justify-start items-center rounded-md shadow-md md:max-w-sm hover:opacity-80"  onClick={(e)=>handleClick(e)}>
                <div className="flex space-x-6">
                <h4 className= " text-2xl font-semibold md:text-3xl group-hover:opacity-80">Javascript</h4>
                </div>
              </button>


                
            </div>
        </div>
            </div>
           


        </div>
    </section>
    )
}