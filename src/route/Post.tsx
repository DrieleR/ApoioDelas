import {useState} from 'react'
import { ArrowLeft, Send, MessageCircle } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { posts, commentsByPost, type Comment } from '../data/card'

const Post = () => {
    const {id} = useParams<{id:string}>()
    const post = posts.find((p) => p.id === id)
    const [comments, setComments] = useState<Comment[]>(commentsByPost[id ?? ''] ?? [])
    const [newComment, setNewComment] = useState('')
    const [author, setAuthor] = useState('')

    if(!post){
        return(
            <section className='flex items-center justify-center'> 
                <p className="text-gray-500">Relato não encontrado.</p>
            </section>
        )
    }

    const handleSubmit = () => {
        if(!newComment.trim()) return
        const comment: Comment = {
            id: `c${Date.now()}`,
            author: author.trim() || 'Anônima',
            text: newComment.trim(),
            date: new Date().toLocaleDateString('pt-BR'),
        }
        setComments((prev) => [...prev, comment])
        setNewComment('')
        setAuthor('')
    }


  return (
    <section className='px-6 py-16'>
        <div className='max-w-2xl mx-auto flex flex-col gap-8'>
            {/* Voltar */}
            <Link to={`/vozes-noticias`} className="flex items-center gap-2 text-[#056881] text-sm font-medium hover:text-[#FF5F37] transition-colors w-fit">
                <ArrowLeft size={16}/>
                Voltar para Vozes e Noticias
            </Link>

            {/* Post */}
            <div className='bg-[#5fa8a8] rounded-2xl p-8 flex flex-col gap-4'>
                <h1 className='text-white font-bold text-2xl leading-snug'>{post.title}</h1>
                <p className='text-white/80 text-sm leading-relaxed'>
                    {post.relato} Lorem ipsum dolor sit amet, nam mutat dicant deseruisse ne, eum in reque aeterno, cum id fastidii repudiandae vituperatoribus. Eu vim quaestio adipiscing. Nulla facilisi. Proin euismod, libero vel fermentum facilisis, augue arcu aliquet eros, sit amet sodales lorem sapien id nunc.
                </p>

                <div className='pt-3 border-t border-white/20 text-xs text-white/70 flex items-center justify-between'>
                    <span>{post.author} · {post.date}</span>
                    <span className='flex items-center gap-1'>
                        <MessageCircle size={14} />
                        {comments.length} comentários
                    </span>
                </div>
            </div>

            {/* Comentarios */}

            <div className='flex flex-col gap-4'>
                <h2 className='text-lg font-bold text-[#09083D]'>Comentarios</h2>
                {comments.length == 0 && (
                    <p className="text-gray-400 text-sm">Nenhum comentário ainda. Seja a primeira!</p>
                )}

                {comments.map((c) => (
                    <div key={c.id} className='bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-2'>
                        <p className="text-sm text-gray-700 leading-relaxed">{c.text}</p>
                        <span className="text-xs text-gray-400">{c.author} · {c.date}</span>
                    </div>
                ))}
            </div>

             {/* Formulário novo comentário */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
          <h3 className="text-base font-bold text-[#09083D]">Deixe um comentário</h3>

          <input
            type="text"
            placeholder="Seu nome (opcional — deixe em branco para Anônima)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#056881] transition"
          />

          <textarea
            placeholder="Escreva seu comentário..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#056881] transition"
          />

          <button
            onClick={handleSubmit}
            className="self-end flex items-center gap-2 bg-[#FF5F37] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#e04820] transition-all shadow-sm hover:shadow-md"
          >
            <Send size={16} />
            Enviar
          </button>
        </div>
        </div>
    </section>
  )
}

export default Post