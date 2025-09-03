import { motion } from 'framer-motion'
import { useMemo } from 'react'
import SafeImage from './SafeImage'
import './Portfolio.css'

const Portfolio = ({ onShowFinal }) => {
  // Base URL para as imagens - otimizado com useMemo
  const baseImageUrl = useMemo(() => `${import.meta.env.BASE_URL}images/`, [])
  
  // Memórias personalizadas com suas imagens e legendas - otimizado com useMemo
  const memories = useMemo(() => [
    {
      id: 1,
      image: `${baseImageUrl}memory1.jpg`,
      title: 'Nossos Primeiros Momentos',
      description: 'Já faz um bom tempo que nos conhecemos e vivenciamos muitos momentos...'
    },
    {
      id: 2,
      image: `${baseImageUrl}memory2.jpg`,
      title: 'Crescendo em Fé',
      description: 'Nos aproximamos um do outro e juntos nos aproximamos mais de Deus...'
    },
    {
      id: 3,
      image: `${baseImageUrl}memory3.jpg`,
      title: 'Viagens em Família',
      description: 'Viajamos em família, rimos e nos divertimos bastante...'
    },
    {
      id: 4,
      image: `${baseImageUrl}memory4.jpg`,
      title: 'Momentos Cotidianos',
      description: 'Fomos várias vezes juntos ao shopping como de costume...'
    },
    {
      id: 5,
      image: `${baseImageUrl}memory5.jpg`,
      title: 'Nosso Sim',
      description: 'E então resolvemos dar o nosso sim um para o outro, com um amor que crescia cada dia mais pela pessoa maravilhosa que você é...'
    },
    {
      id: 6,
      image: `${baseImageUrl}memory6.jpg`,
      title: 'Primeiro Passo',
      description: 'Esse sim foi o primeiro passo de uma vida ainda mais feliz com você...'
    },
    {
      id: 7,
      image: `${baseImageUrl}memory7.jpg`,
      title: 'Nossas Viagens',
      description: 'Com nossas diversas viagens que fizemos juntos...'
    },
    {
      id: 8,
      image: `${baseImageUrl}memory8.jpg`,
      title: 'Aniversários Especiais',
      description: 'E com os vários aniversários que já vivemos e comemoramos...'
    },
    {
      id: 9,
      image: `${baseImageUrl}memory9.jpg`,
      title: 'Amor Crescente',
      description: 'Cada um mais feliz que o outro, confirmando também esse amor que crescia mais a cada dia...'
    },
    {
      id: 10,
      image: `${baseImageUrl}memory10.jpg`,
      title: 'Comemorações Juntos',
      description: 'Vivemos também aniversários meus onde comemoramos juntos...'
    },
    {
      id: 11,
      image: `${baseImageUrl}memory11.jpg`,
      title: 'Lugares Maravilhosos',
      description: 'E fizemos viagens para lugares maravilhosos que nem pensávamos que íamos fazer...'
    },
    {
      id: 12,
      image: `${baseImageUrl}memory12.jpg`,
      title: 'Momentos Especiais',
      description: 'Participamos de momentos especiais nossos e também das pessoas ao nosso redor...'
    },
    {
      id: 13,
      image: `${baseImageUrl}memory13.jpg`,
      title: 'Sempre Felizes',
      description: 'Sempre felizes, comemorando, e se doando um ao outro...'
    },
    {
      id: 14,
      image: `${baseImageUrl}memory14.jpg`,
      title: 'Servindo a Deus',
      description: 'Junto a isso também crescia o nosso serviço a Deus, fazendo frutificar esse amor nosso e Dele...'
    }
  ], [baseImageUrl])

  return (
    <motion.div 
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.header 
        className="portfolio-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1>💝 Uma Jornada de Amor 💝</h1>
        <p>Momentos especiais da nossa história juntos</p>
      </motion.header>

      <div className="memories-grid">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className="memory-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6 + index * 0.2, 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.03, 
              transition: { duration: 0.2 } 
            }}
          >
            <div className="memory-image">
              <SafeImage
                src={memory.image}
                alt={memory.title}
                fallbackText={memory.title}
                className="memory-img"
              />
              <div className="image-overlay">
                <span className="heart">💖</span>
              </div>
            </div>
            
            <div className="memory-content">
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.footer 
        className="portfolio-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p>
          🎉 Nossa jornada de amor continua... 🎉
          <br />
          <span>Mas ainda há uma surpresa especial esperando por você!</span>
        </p>
        
        <motion.button
          className="final-surprise-button"
          onClick={onShowFinal}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ Ver Surpresa Final ✨
        </motion.button>
      </motion.footer>
    </motion.div>
  )
}

export default Portfolio
