import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons'
import { createStyles, Card, Text, SimpleGrid, Container } from '@mantine/core';
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import RadioButton from '@/components/radio_dog'
library.add(faCat, faDog)

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Zen Maru Gothic, ${theme.fontFamily}`,
    fontWeight: 700
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    boxShadow: `${theme.shadows.xs} !important`
  },
}))

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://animal-police.sub.jp/kainusikentei_backend/today.php?type=dog')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

const DogQuiz: NextPage = (props:any) => {
  const {classes} = useStyles();

  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
      </Head>
      <main>
      <Card withBorder radius="md" className={classes.card}>
        <Text>犬の検定</Text>
        <SimpleGrid cols={1} mt="md">
        <Card>
        <Text size="md" weight="bold" mt={1}>
          <p className="font-title">
            {props.data[0]["question"]}
          </p>
        </Text>
      </Card>
        </SimpleGrid>
      <Container size="sm" px="xs">
          <RadioButton choice1={props.data[0]["choice001"]} choice2={props.data[0]["choice002"]} choice3={props.data[0]["choice003"]} answer={props.data[0]["answer"]} />
      </Container>
      </Card>
      </main>
    </div>
  );
};

export default DogQuiz;