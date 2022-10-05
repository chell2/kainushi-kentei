import {Card} from '@mantine/core'
import Head from 'next/head'
import Image from 'next/image'

const Ans = () => {

  return (
    <div>
      <Head>
        <title>飼い主検定</title>
      </Head>
      <main>
      <Card.Section mb="sm">
        <Image src="/card_default.png" alt="title" layout="responsive" width={1600} height={900} />
      </Card.Section>
      </main>
    </div>
  );
};

export default Ans;
