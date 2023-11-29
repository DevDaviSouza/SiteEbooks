import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' justify-center items-center flex  bg-gray-600'>
      <main className='w-4/5 border bg-gray-800 m-7'>
        <nav className='flex row text-center items-center justify-center p-4 pl-14'>  

              <div className='flex gap-32 text-2xl'>
                <div className='mt-6 cursor-pointer'>Home</div>
                <div className='mt-6 cursor-pointer'>WEB</div>
            
                <img src='https://icons.iconarchive.com/icons/martz90/circle/32/books-icon.png' alt='teste' width={80}/>

                <div className='mt-6 cursor-pointer'>Mobile</div>
                <div className='mt-6 cursor-pointer'>Desktop</div>
              </div>
          
        </nav>
      
        <h1 className='text-3xl pt-7 pb-7 text-center bg-gray-500 border'>
            Baixe os Ebooks que quiser de forma totalmente gratuita!
          </h1>
        <section className=' items-center justify-center flex  flex-col'>
          

          <div className='pt-10 cards columns-3 gap-y-7 gap-x-36 bg-gray-800'>   
           
            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />
            
            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />
            
            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />

            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />

            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />

            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />
            
            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />
            
            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />
            
            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />

            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />

            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />

            <Card
              Imagem="https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg"
              Titulo="TESTE"
            />

          </div>
        </section>

      </main>
    </div>
  )
}
