

const Footer = () => {
  return (
    <footer className='bg-linear-to-r from-[#056881] to-[#a0dcc0] mt-auto text-[#16139c]'>
        <div className='max-w-7xl mx-auto px-6 py-8'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-blue-700'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl font-bold text-[#c2cad8]'>Apoio Delas</h3>
                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-sm font-semibold text-[#130e3b]'>Desenvolvedores</h4>
                
                <div className='flex flex-wrap gap-x-3 gap-y-1 text-sm text-[#f5573b]'>
                        <span className='font-bold'>Ananda Nunes</span>
                        <span className='hidden md:inline'>•</span>
                        <span className='font-bold'>Driele Carvalho</span>
                        <span className='hidden md:inline'>•</span>
                        <span className='font-bold'>Thaylan Fonseca</span>
                        <span className='hidden md:inline'>•</span>
                        <span className='font-bold'>Iam Melo</span>
                        <span className='hidden md:inline'>•</span>
                        <span className='font-bold'>Filipe Cruz</span>
                </div>
                </div>
            </div>
        

        <div className='pt-6 text-center md:text-left'>
            <p className='text-sm text-blue-200'>
                &copy; {new Date().getFullYear()} Nebula.
                Todos os direitos reservados.
            </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer