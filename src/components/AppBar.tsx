import { Android_Download, H5_URL } from '@/constants/constant'
import { Globe, Router } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const AppBar = (props: Props) => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  const login = () => {
    const from = localStorage.getItem("from")
    const forId = localStorage.getItem("for")
    router.push(H5_URL + "?from=" + from + "&for=" + forId)
  }

  return (
    <div className='fixed flex flex-1 w-full h-[80px] flex-row justify-between items-center p-2 z-50 text-white bg-[#2B2E39]'
    >
      <div className='z-50 flex flex-1 w-full flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-4 ml-0 sm:ml-2 cursor-pointer'
          onClick={() => router.push('/')}>
          <Image src={"/logo.png"} width={48} height={48} alt="logo" />
          <div className='font-noto_serif font-bold cursor-pointer text-[16px]'
          >1ON1 CHAT</div>
        </div>
        <div className='sm:flex flex-1 flex-row justify-between items-center  hidden max-w-[400px] mx-4'>
          <div className='tracking-wide text-[16px] cursor-pointer flex flex-1 justify-center'
            onClick={() => router.push('/why-aime')}>WHY AI ME</div>
          <div className='tracking-wide text-[16px] cursor-pointer flex flex-1 mx-4 justify-center'
            onClick={() => router.push('/pricing')}>PRICING</div>
          <div className='relative'>
            <div className='tracking-wide text-[16px] cursor-pointer flex flex-1 justify-center'
              onClick={() => { setOpen(!open) }}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >DOWNLOAD APP</div>

            {open && <div className='absolute top-4 right-[-100px] shadow rounded-lg flex flex-1 bg-black w-[300px] p-4'
              style={{
                backgroundImage: "url('/bg-1.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
              }}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <div className='flex flex-1 justify-center'>
                <div className='flex flex-col justify-center items-center gap-4'>
                  <Image src="/qrcode.png" width={150} height={150} alt="logo" className='object-contain' />
                  <div className='flex flex-col  gap-4 '>
                    <Image src="/andriod.png" width={170} height={60} alt="logo" className='object-contain cursor-pointer'
                      onClick={() => {
                        router.push(Android_Download)
                        setOpen(false)
                      }
                      } />
                    <Image src="/apple.png" width={170} height={60} alt="logo" className='object-contain cursor-pointer'
                      onClick={() => {
                        setOpen(false)
                        router.push('/addIcon')
                      }} />
                  </div>
                </div>
              </div>
            </div>}

          </div>
        </div>
        <div className='flex flex-row justify-end items-center gap-2 sm:gap-8 pr-2 sm:pr-4'>
          {/* <div className='flex flex-row items-center gap-2'>
            <Globe />
            <p>EN</div>
          </div> */}
          <div onClick={() => {
            login()
          }} className="cursor-pointer text-center">
            LOG IN</div>
          <div className='px-4 py-1 rounded cursor-pointer text-center'
            onClick={() => {
              login()
            }}
            style={{
              backgroundImage: "linear-gradient(to right, #FF1CF7, #00F0FF)",
            }}>Sign up</div>
        </div>
      </div>
    </div>
  )
}

export default AppBar