import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeetbackStats from './components/FeetbackStats'
import FeedbackForm from './components/FeedbackForm'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App(){

    return (
        <FeedbackProvider>

        <Router>
        <Header text ='Feedback UI' bgColor ='rgba(0,0,0,0.4)' textColor ='rgb(255,0,0)' />
        <div className='container'>
            <Routes>
                <Route path='/' element={
                    <>
                       <FeedbackForm/>
                       <FeetbackStats/>
                       <FeedbackList/>
                       <AboutIconLink/>
                   </>
                }/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>  
        </div>
        </Router>
        </FeedbackProvider>
        
    )
}
export default App