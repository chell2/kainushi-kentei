import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import PrevFirst from '@/components/prev_first'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://animal-police.sub.jp/kainusikentei_backend/archive.php')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

const Backnumber: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>過去のクイズ｜飼い主検定</title>
      </Head>
      <main>
        <PrevFirst props={props} />
      </main>
    </div>
  );
};

export default Backnumber;