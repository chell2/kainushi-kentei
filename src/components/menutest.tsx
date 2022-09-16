import { useRouter } from "next/router"
import { ReactNode } from 'react'
import HeaderMenu from '@/components/menu'

type Props = { children: ReactNode }

const LayoutMenu = ({children}: Props) => {
  const router = useRouter()
  return (
    <HeaderMenu mainLinks={[
      {
        "link": "/",
        "label": "今日の問題"
      },
      {
        "link": "/backnumber",
        "label": "過去の問題"
      },
      {
        "link": "/about",
        "label": "あそびかた"
      }]}
    />
)}

export default LayoutMenu;
