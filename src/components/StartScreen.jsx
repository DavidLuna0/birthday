import { motion } from 'framer-motion'
import './StartScreen.css'

const StartScreen = ({ onStart }) => {
  return (
    <motion.div 
      className="start-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      <div className="start-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="birthday-title"
        >
          🎉 Feliz Aniversário! 🎉
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="birthday-subtitle"
        >
          Uma surpresa especial está te esperando...
        </motion.p>
        
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="start-button"
        >
          ✨ Começar ✨
        </motion.button>
      </div>
      
      {/* Floating balloons */}
      <div className="balloons">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`balloon balloon-${i + 1}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎈
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default StartScreen
