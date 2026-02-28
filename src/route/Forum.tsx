import { Link } from "react-router-dom"
import {MessageCircle, Plus} from "lucide-react"
import { posts } from "../data/card"

const Forum = () => {
  return (
    <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <span className="text-xs font-semibold tracking-widest uppercase">Comunidade</span>
                    <h2 className="text-3xl font-bold text-[#09083d] mt-1">Vozes e Noticias</h2>
                     <p className="text-gray-500 text-sm mt-1">Relatos e experiências compartilhadas pela comunidade</p>
                </div>
                <button className="flex items-center gap-2 bg-[#FF5F37] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#e04820] transition-all shadow-sm hover:shadow-md">
                    <Plus size={16} />
                    Compartilhar Relato
                </button>
            </div>

            {/* Grid de Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link to={`/vozes-noticias/${post.id}`} key={post.id}  className="bg-[#5fa8a8] rounded-2xl p-6 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <h3 className="text-white font-bold text-lg leading-snug group-hover:underline underline-offset-2">{post.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed flex-1">{post.relato}</p>
                        <div className="flex items-center justify-between pt-3 border-white/20 border-t text-xs text-white/70 mt-auto">
                            <span>{post.author} · {post.date}</span>
                            <span className="flex items-center gap-1">
                                <MessageCircle size={14}/>
                                {post.comments}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Forum