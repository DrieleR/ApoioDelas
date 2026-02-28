import { cardsData } from "../data/card"

const Principal = () => {
  return (
    <section className='flex items-center justify-center px-6 py-16 '>
        <div className="w-full max-w-5xl">
            {/* grid de cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardsData.map((card) => (
                    <div key={card.title} className="bg-[#FF7552] rounded-2xl shadow-md p-8 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow duration-300">
                        {/* Icones */}
                        <div className="bg-[#d64825] rounded-2xl p-4 shadow-sm">
                            {card.icon}
                        </div>
                        {/* titulo */}
                        <div className="text-2xl text-white leading-relaxed flex-1">
                            {card.text}
                        </div>
                        {/* butão */}
                        <div className="mt-2 bg bg-[#FF5B32] text-white px-8 py-2 rounded-xl font-semibold text-sm hover:bg-[#e04820] transition-colors duration-200 shadow-sm">
                            {card.btn}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Principal