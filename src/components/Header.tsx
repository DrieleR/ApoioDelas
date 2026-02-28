import { useState } from "react"
import {X, Menu} from 'lucide-react'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="bg-linear-to-r from-[#056881] to-[#a0dcc0]">
      <div className="flex justify-between items-center px-4 md:px-16 py-6">
        <div className="flex items-center gap-3">
          <h2>Apoio Delas</h2>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex gap-10 text-sm font-medium">
            <a href="" className='hover:text-[#FF5F37]'>Preciso de Ajuda</a>
            <a href="" className='hover:text-[#FF5F37]'>Vozes e Noticias</a>
            <a href="" className='hover:text-[#FF5F37]'>Ciclo de Violência</a>
          </nav>
          <button className="bg-[#f7a670] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#f1740e] transition-all duration-200 shadow-sm hover:shadow-md">
            Entrar
          </button>
        </div>

        {/* Inicio mobile */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ?  <X/> : <Menu/>}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden px-4 md:px-16 pb-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <a href="" className='hover:text-[#FF5F37]'>Preciso de Ajuda</a>
            <a href="" className='hover:text-[#FF5F37]'>Vozes e Noticias</a>
            <a href="" className='hover:text-[#FF5F37]'>Ciclo de Violência</a>
          </nav>
          <button className="bg-[#f7a670] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#f1740e] transition-all duration-200 shadow-sm hover:shadow-md">
            Entrar
          </button>
        </div>
      )}
    </header>
  )
}

export default Header