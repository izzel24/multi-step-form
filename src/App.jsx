import { useState } from 'react'
import './App.css'
import PersonalInfo from './component/PersonalInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-app'>
      <div className='container-card'>
        <div className='side-bar'>
          <div className='number-container'>
            <div className='step'>
              <div className='number regular'>1</div>
              <div className='information'>
                <span className='regular step-number'>STEP 1</span>
                <span className='medium white'>YOUR INFO</span>
              </div>
            </div>
            <div className='step'>
              <div className='number regular'>2</div>
              <div className='information'>
                <span className='regular step-number'>STEP 2</span>
                <span className='medium white'>SELECT PLAN</span>
              </div>
            </div>
            <div className='step'>
              <div className='number regular'>3</div>
              <div className='information'>
                <span className='regular step-number'>STEP 3</span>
                <span className='medium white'>ADD ONS</span>
              </div>  
            </div>
            <div className='step'>
              <div className='number regular'>4</div>
              <div className='information'>
                <span className='regular step-number'>STEP 4</span>
                <span className='medium white'>SUMMARY</span>
              </div>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className='main-content'>
          <PersonalInfo />
        </div>
      </div>
    </div>
    
  )
}

export default App
