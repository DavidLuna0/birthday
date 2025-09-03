import { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import StartScreen from './components/StartScreen'
import Portfolio from './components/Portfolio'
import FinalScreen from './components/FinalScreen'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('start') // 'start', 'portfolio', 'final'
  const [showConfetti, setShowConfetti] = useState(false)

  const handleStart = useCallback(() => {
    setShowConfetti(true)
    
    // Show confetti for 2 seconds, then show portfolio
    setTimeout(() => {
      setCurrentScreen('portfolio')
    }, 2000)
    
    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false)
    }, 5000)
  }, [])

  const handleShowFinal = useCallback(() => {
    setCurrentScreen('final')
  }, [])

  const handleBackToPortfolio = useCallback(() => {
    setCurrentScreen('portfolio')
  }, [])

  return (
    <div className="App">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          gravity={0.1}
          recycle={false}
          run={showConfetti}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: 'none'
          }}
        />
      )}
      
      <AnimatePresence mode="wait">
        {currentScreen === 'start' && (
          <StartScreen key="start" onStart={handleStart} />
        )}
        {currentScreen === 'portfolio' && (
          <Portfolio key="portfolio" onShowFinal={handleShowFinal} />
        )}
        {currentScreen === 'final' && (
          <FinalScreen key="final" onBack={handleBackToPortfolio} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App