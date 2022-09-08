import Image from 'next/image'
import {useRouter} from "next/router"
import {ReactNode} from 'react'
import PageTop from '@/components/affix'
import Button from '@/components/button'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeaderMenu from '@/components/menu'
import bgimage from 'public/1000_F_506342106.jpeg'

type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  const router = useRouter()
  return (
    <>
      <div>
        <div className="w-96 bg-white mx-auto my-0">
          <Header />
          <div className="flex">
            <span className="flex-auto" />
            <Button onClick={() => router.push("/")}>今日の問題</Button>
            <span className="flex-auto" />
            <Button onClick={() => router.push("/backnumber")}>過去の問題</Button>
            <span className="flex-auto" />
            <Button onClick={() => router.push("/about")}>飼い主検定とは</Button>
            <span className="flex-auto" />
          </div>
          {children}
          <Footer links={[{
            "link": "https://www.vanishing-company.site/",
            "label": "運営会社"
          },
          {
            "link": "https://www.vanishing-company.site/guide/policy.html",
            "label": "プライバシーポリシー"
          }]} />
        </div>
      </div>
      <PageTop />
      <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
      <Image src={bgimage} alt='bgimage' layout='fill' objectFit='cover' />
      </div>
    </>
  );
};

export default Layout;