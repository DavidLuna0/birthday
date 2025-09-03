import { motion } from 'framer-motion'
import { useMemo } from 'react'
import SafeImage from './SafeImage'
import './FinalScreen.css'

const FinalScreen = ({ onBack }) => {
  const finalImagePath = useMemo(() => `${import.meta.env.BASE_URL}images/memory16.jpg`, [])
  
  return (
    <motion.div 
      className="final-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="final-content">
        <motion.div 
          className="final-image-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <SafeImage
            src={finalImagePath}
            alt="Nossa família"
            fallbackText="Nossa Familia"
            className="final-image"
          />
          <div className="hearts-overlay">
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                className={`floating-heart heart-${i + 1}`}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              >
                💖
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="final-message"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h1>💕 Uma Nova História Começa 💕</h1>
          
          <div className="message-content">
            <p>
              E nesse aniversário esse amor está maior do que nunca, está frutificando em um novo sentido 
              que Deus dará às nossas vidas com o nascimento de nossa filha, mas com a certeza de que nossa 
              família será muito feliz, pois tenho você sempre comigo e eu estarei sempre contigo.
            </p>
            
            <p className="birthday-wish">
              <strong>Feliz aniversário meu amor</strong>, que Deus nos abençoe sempre, lhe dê muita saúde, 
              paz e lhe proteja de todo mal. 
            </p>
            
            <p className="love-declaration">
              <span className="heart-text">💖 Te amo demais 💖</span>
            </p>
          </div>
        </motion.div>

        <motion.button
          className="back-button"
          onClick={onBack}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Voltar às Memórias
        </motion.button>
      </div>
    </motion.div>
  )
}

export default FinalScreen
