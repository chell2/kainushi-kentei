import { Tabs } from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import PageTop from '@/components/affix'
import Footer from '@/components/footer'
import Header from '@/components/header'
import bgimage from 'public/1000_F_506342106_01.png'

type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  const router = useRouter()
  return (
    <>
      <div>
        <div className="w-screen md:w-5/12 bg-white mx-auto my-0">
          <Header />
          <div className="flex mb-2" />
          <Tabs color="cyan" defaultValue="menu1">
            <Tabs.List grow position="apart">
              <Tabs.Tab value="menu1" onClick={() => router.push("/")}><p className="font-title">今日の問題</p></Tabs.Tab>
              <Tabs.Tab value="menu2" onClick={() => router.push("/backnumber")}><p className="font-title">過去の問題</p></Tabs.Tab>
              <Tabs.Tab value="menu3" onClick={() => router.push("/about")}><p className="font-title">あそびかた</p></Tabs.Tab>
            </Tabs.List>
          </Tabs>
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