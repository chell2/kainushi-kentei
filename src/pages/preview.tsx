import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons'
import { createStyles, Card, Text, SimpleGrid, Container, Center } from '@mantine/core';
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from "next/router";
import Choices from '@/components/radio_dog'
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

const PrevQuiz: NextPage = () => {
  const {classes} = useStyles();
  const router = useRouter();
  const query = router.query

  return (
    <div>
      <Head>
        <title>犬の検定｜飼い主検定</title>
      </Head>
      <main>
        <Card withBorder radius="md" className={classes.card}>
          <Text><p className="font-title">犬の検定（過去問）</p></Text>
          <SimpleGrid cols={1} mt="md">
            <Card>
              <Center>
                <Text size="md" weight="bold" mt={1}>
                  <p className="font-title">{query["question"]}</p>
                </Text>
              </Center>
            </Card>
          </SimpleGrid>
          <Container size="sm" px="xs">
            <Choices choice1={query["choice001"]} choice2={query["choice002"]} choice3={query["choice003"]} answer={query["answer"]} commentary={query["commentary"]} />
          </Container>
        </Card>
      </main>
    </div>
  );
};

export default PrevQuiz;