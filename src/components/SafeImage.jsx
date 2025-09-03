import { useState, useCallback, useMemo } from 'react'

const SafeImage = ({ src, alt, className, fallbackText, onLoad, onError, ...props }) => {
  const [failed, setFailed] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleError = useCallback(() => {
    if (!failed) {
      setFailed(true)
      setLoading(false)
      if (onError) onError()
    }
  }, [failed, onError])

  const handleLoad = useCallback(() => {
    setLoading(false)
    if (onLoad) onLoad()
  }, [onLoad])

  // Criar uma imagem fallback local usando SVG - otimizado com useMemo
  const fallbackImageSrc = useMemo(() => {
    // Limpar o texto removendo emojis e caracteres especiais para evitar erro no btoa
    const originalText = fallbackText || alt || 'Imagem não disponível'
    const cleanText = originalText.replace(/[^\x00-\x7F]/g, '') || 'Imagem nao disponivel'
    
    const svg = `
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#f0f0f0"/>
        <text x="200" y="150" text-anchor="middle" dominant-baseline="middle" 
              fill="#999999" font-family="Arial, sans-serif" font-size="18" font-weight="bold">
          ${cleanText}
        </text>
      </svg>
    `
    
    try {
      return `data:image/svg+xml;base64,${btoa(svg)}`
    } catch (error) {
      // Fallback usando encodeURIComponent se btoa falhar
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
    }
  }, [fallbackText, alt])

  if (failed) {
    return (
      <img
        src={fallbackImageSrc}
        alt={alt}
        className={className}
        {...props}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
      {...props}
    />
  )
}

export default SafeImage
