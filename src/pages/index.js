import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' justify-center items-center flex w-screen bg-gray-600'>
      <main className='w-4/5 border bg-gray-800 m-7'>
        <nav className=' flex row justify-between items-center p-4'>  
         
          
          <img src='https://icons.iconarchive.com/icons/martz90/circle/32/books-icon.png' alt='teste' width={80}/>
              
              <div className='menu flex gap-32 text-2xl'>
                <div className='cursor-pointer'>Home</div>
                <div className='cursor-pointer'>WEB</div>
                <div className='cursor-pointer'>Mobile</div>
                <div className='cursor-pointer'>Desktop</div>
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
      
        <h1 className='text-3xl pt-7 pb-7 text-center bg-gray-500'>
            Baixe os Ebooks que quiser de forma totalmente gratuita!
          </h1>
        <section className=' items-center justify-center flex  flex-col'>
          

          <div className='pt-10 cards columns-3 gap-y-7 gap-x-64 bg-gray-800 '>
                 <Image
                    src="/capa.jpg"
                    alt="user"
                    className='mb-10'
                    width={250}
                    height={500}
                  />
                  
                  <Image
                          src="/capa.jpg"
                          alt="user"
                          className='mb-10'
                          width={250}
                          height={500}
                  />
                  
                  <Image
                          src="/capa.jpg"
                          alt="user"
                          className='mb-10'
                          width={250}
                          height={500}
                  />
                  
                  <Image
                          src="/capa.jpg"
                          alt="user"
                          className='mb-10'
                          width={250}
                          height={500}
                  />
                  
                  <Image
                          src="/capa.jpg"
                          alt="user"
                          className='mb-10'
                          width={250}
                          height={500}
                  />
                  
                  <Image
                          src="/capa.jpg"
                          alt="user"
                          className='mb-10'
                          width={250}
                          height={500}
                  />
                  
                  <Image
                          src="/capa.jpg"
                          alt="user"
                          className='mb-10'
                          width={250}
                          height={500}
                  />
                  
                  <Image
                          src="/capa.jpg"
                          alt="user"
                          className='mb-10'
                          width={250}
                          height={500}
                  />
                  
                  <Image
                          src="/capa.jpg"
                          alt="user"
                          className='mb-10'
                          width={250}
                          height={500}
                  />
            
                

          </div>
        </section>

      </main>
    </div>
  )
}
