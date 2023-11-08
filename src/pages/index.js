import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body className=' justify-center items-center flex '>
      <main className='w-4/5 border bg-gray-800 m-7'>
        <nav className=' flex row justify-between items-center'>  
              <Image
                      src="/fotinha.jpg"
                      alt="Vercel Logo"
                      className="logo "
                      width={100}
                      height={24}
              />
              
              <div className='menu flex gap-32'>
                <div>Home</div>
                <div>WEB</div>
                <div>Mobile</div>
                <div>Languages</div>
              </div>

              <div className='user pl-20'>
              {/* <Image
                    src="/fotinha.jpg"
                    alt="user"
                    className='rounded-full'
                    width={100}
                    height={100}
                />
                */}
              </div>
        </nav>
      
        <section className='bg-gray-500 items-center justify-center flex '>
          <h1 className='text-3xl pt-12 pb-12'>
            Baixe os Ebooks que quiser de forma totalmente gratuita!
          </h1>

          
        </section>

      </main>
    </body>
  )
}
