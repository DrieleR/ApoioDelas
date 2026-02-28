import {Users, ClipboardList, Megaphone, BookOpen, Scale, Shield, ShieldCheck, HeartHandshake} from "lucide-react"
import { Link } from "react-router-dom"

 type Card = {
    icon: React.ReactNode,
    title:string,
    text:string,
    btn: React.ReactNode,
}
type LinkItem =
  | { label: string; href: string; external: true }
  | { label: string; to: string; external: false }

 type CardLink = {
    icon: React.ReactNode,
    title: string,
    text: string,
    links: LinkItem[]
 }

export const cardsData: Card[] = [
    {
    icon: <Users size={48} className="text-white" />,
    title: 'Grupos de Apoio',
    text: 'Conexão com grupos para compartilhar experiências e fortalecer a rede de suporte',
    btn: <Link to={`/testes`}>Acessar</Link>,
   
  },
  {
    icon: <ClipboardList size={48} className="text-white" />,
    title: 'Testes',
    text: 'Descubra se você sabe identificar ou se está passando por algum tipo de violência',
    btn: <Link to={`/testes`}>Acessar</Link>,
   
  },
  {
    icon: <Megaphone size={48} className="text-white" />,
    title: 'Como Denunciar',
    text: 'Conheça e entenda o passo a passo de como prosseguir com uma denúncia',
    btn: <Link to={`/testes`}>Acessar</Link>,
  },
] 

export const cardsTypes: Card[] = [
  {
    icon: <BookOpen size={28}/>,
    title: "Tipos de Violencia",
    text: "Entenda as diferentes formas de violência — física, psicológica, sexual, patrimonial e moral — e como identificá-las no dia a dia.",
    btn: <Link to={`/testes`}>Acessar</Link>,
  },
    {
    icon: <Scale size={28}/>,
    title: "Lei",
    text: "Conheça as leis que que protegem você, como a Lei Maria da Penha, e saiba quais são seus direitos garantidos pela legislação brasileira",
    btn:<Link to={`/testes`}>Acessar</Link>,
  },
    {
    icon: <Shield size={28}/>,
    title: "Seus Direitos",
    text: "Você tem direito à proteção, assistência e justiça. Descubra como acessar os serviços públicos e medidas protetivas disponíveis.",
    btn: <Link to={`/testes`}>Acessar</Link>,
  }
]

export const cardsLink: CardLink[] = [
  {
    icon: <ShieldCheck  size={40} className="text-[#09083D]" />,
    title: "Quero Denunciar",
    text: "Você será redirecionada para a delegacia digital. Caso tenha dúvidas sobre como denunciar.",
    links: [
      {label: 'Acessar Delegacia Digital', href: 'https://www.delegaciadigital.sp.gov.br', external: true},
      {label: 'Ver nosso tutorial', to: '/tutorial-denuncia', external: false }
    ]
  },
  {
    icon: <HeartHandshake size={40} className="text-[#09083D]" />,
    title: 'Quero Apoio Psicológico',
    text: 'Você será redirecionada para plataformas que disponibilizam ajuda psicológica.',
    links: [
      { label: 'Acesse pelo link', href: 'https://www.justiceiras.org.br/', external: true },
    ],
  },
  {
    icon: <Scale size={40} className="text-[#09083D]" />,
    title: 'Quero Apoio Jurídico',
    text: 'Você será redirecionada para plataformas que disponibilizam orientação jurídica.',
    links: [
      { label: 'Acesse pelo link', href: 'https://www.mapadoacolhimento.org/atendimento/', external: true },
    ],
  }
]