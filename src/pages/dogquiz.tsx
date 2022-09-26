import { faDog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createStyles, Card, Text, SimpleGrid, Container, Center, Group } from '@mantine/core';
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import DogChoices from '@/components/radio_dog'

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

const DogQuiz: NextPageWithLayout = (props:any) => {
  const {classes, theme} = useStyles();

  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
      </Head>
      <main>
        <Card withBorder radius="md" className={classes.card}>
          <Group>
            <FontAwesomeIcon icon={faDog} size="lg" color={theme.colors["grape"][6]} />
            <Text><p className="font-title">犬の検定：今日の問題</p></Text>
          </Group>
          <SimpleGrid cols={1} mt="md">
            <Card>
              <Center>
                <Text size="md" weight="bold" mt={1}>
                  <p className="font-title">{props.data[0]["question"]}</p>
                </Text>
              </Center>
            </Card>
          </SimpleGrid>
          <Container size="sm" px="xs">
            <DogChoices choice1={props.data[0]["choice001"]} choice2={props.data[0]["choice002"]} choice3={props.data[0]["choice003"]} answer={props.data[0]["answer"]} commentary={props.data[0]["commentary"]} id={props.data[0]["id"]} />
          </Container>
        </Card>
      </main>
    </div>
  );
};

export default DogQuiz;

DogQuiz.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}