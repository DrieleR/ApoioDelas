import {Users, ClipboardList, Megaphone} from "lucide-react"

export type Card = {
    icon: React.ReactNode,
    title:string,
    text:string,
    btn: string
}

export const cardsData: Card[] = [
    {
    icon: <Users size={48} className="text-white" />,
    title: 'Grupos de Apoio',
    text: 'Conexão com grupos para compartilhar experiências e fortalecer a rede de suporte',
    btn: 'Visualizar',
   
  },
  {
    icon: <ClipboardList size={48} className="text-white" />,
    title: 'Testes',
    text: 'Descubra se você sabe identificar ou se está passando por algum tipo de violência',
    btn: 'Acessar',
   
  },
  {
    icon: <Megaphone size={48} className="text-white" />,
    title: 'Como Denunciar',
    text: 'Conheça e entenda o passo a passo de como prosseguir com uma denúncia',
    btn: 'Acessar',
  },
] 