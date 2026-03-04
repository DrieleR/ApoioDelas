import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Shield, Heart, BookOpen, MapPin, Users, AlertCircle } from "lucide-react"

const Hero = () => {
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('')
  const [displayHighLight, setDisplayHighLight] = useState('')
  const [isTyping, setIstyping] = useState(true)

  const fullText = 'Apoio Delas'
  const typeingSpeed = 150

  useEffect(() => {
    let currentIndex = 0
    let highlightIndex = 0
    let stage = 'typing-full'
    let timeOutId: ReturnType<typeof setTimeout>

    const animate = () => {
      if (stage === 'typing-full') {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1))
          currentIndex++
          timeOutId = setTimeout(animate, typeingSpeed)
        } else {
          stage = 'typing-highlight'
          highlightIndex = 0
          timeOutId = setTimeout(animate, typeingSpeed)
        }
      } else {
        setIstyping(false)
      }
    }

    animate()
    
    return () => clearTimeout(timeOutId)
  }, [])

  const handleNavigate = (path: string) => {
    navigate(path)
  }
  
  return (
    <main 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://img.freepik.com/vetores-gratis/senhoras-de-diferentes-nacionalidades-abracando-o-apartamento_1284-58728.jpg?t=st=1772658482~exp=1772662082~hmac=2790a5e3911c68b4debade69c28837f2d1325905c6ca89f9cdfd436e262a2a93&w=1480')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
      
      {/* Conteúdo centralizado com efeito vidro mais transparente */}
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-sm rounded-3xl p-8 lg:p-16 shadow-2xl mx-4">
        <div className='space-y-8'>
          {/* Título principal com animação */}
          <div className='space-y-4'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight drop-shadow-lg'>
              {displayText}
              <span className='text-[#a0dcc0]'>{displayHighLight}</span>
              {isTyping && <span className="animate-pulse text-[#a0dcc0]">|</span>}
            </h1>
            <p className='text-lg md:text-xl text-blue-800 font-medium drop-shadow-md'>
              Plataforma de Apoio Integral a Mulheres Vítimas de Violência
            </p>
          </div>

          {/* Botões de destaque principais */}
          <div className='space-y-4'>
            <button 
              onClick={() => handleNavigate('/preciso-ajuda')}
              className='w-full bg-gradient-to-r from-[#FF5B32] to-[#FF7552] text-white px-6 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#FF5B32]'>
              <AlertCircle size={28} />
              Preciso Denunciar - Ajuda Urgente
            </button>

            <button 
              onClick={() => handleNavigate('/testes')}
              className='w-full bg-gradient-to-r from-[#7b0692] to-[#9c28b1] text-white px-6 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300'>
              <Shield size={26} />
              Fazer Testes de Identificação
            </button>
          </div>

          {/* Grid de funcionalidades secundárias */}
          <div className='grid grid-cols-2 gap-4 pt-4'>
            <button 
              onClick={() => handleNavigate('/q-somos')}
              className='bg-white/90 text-[#056881] px-4 py-4 rounded-xl font-semibold flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 group'>
              <BookOpen size={24} className='group-hover:scale-110 transition-transform' />
              <span className='text-sm'>Conhecer Desenvolvedores</span>
            </button>

            <button 
              onClick={() => handleNavigate('/mapa')}
              className='bg-white/90 text-[#056881] px-4 py-4 rounded-xl font-semibold flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 group'>
              <MapPin size={24} className='group-hover:scale-110 transition-transform' />
              <span className='text-sm'>Mapa de Serviços Públicos</span>
            </button>

            <button 
              onClick={() => handleNavigate('/g-apoio')}
              className='bg-white/90 text-[#056881] px-4 py-4 rounded-xl font-semibold flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 group'>
              <Users size={24} className='group-hover:scale-110 transition-transform' />
              <span className='text-sm'>Grupos</span>
            </button>

            <button 
              onClick={() => handleNavigate('/seus-direitos')}
              className='bg-white/90 text-[#056881] px-4 py-4 rounded-xl font-semibold flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 group'>
              <Heart size={24} className='group-hover:scale-110 transition-transform' />
              <span className='text-sm'>Direitos</span>
            </button>
          </div>

          {/* Informação de emergência */}
          <div className='bg-[#FF5B32] text-white p-4 rounded-xl text-center shadow-lg'>
            <p className='text-sm font-semibold'>Em caso de emergência, ligue: 180 ou 190</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero