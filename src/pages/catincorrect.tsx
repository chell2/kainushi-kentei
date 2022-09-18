import type { NextPage } from 'next'
import Head from 'next/head'
import ArticleCardFooter from '@/components/card_dogcorrect'

const DogQuiz: NextPage = () => {
  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
      </Head>
      <main>
        <ArticleCardFooter
          image={'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'}
          category={'decorations'}
          title={'不正解！！！'}
          footer={''}
          author={{
            name: 'Elsa Gardenowl',
            description: 'posted 34 minutes ago',
            image: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
          }}
        />
      </main>
    </div>
  );
};

export default DogQuiz;