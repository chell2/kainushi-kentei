import { faCat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createStyles, Card, Text, SimpleGrid, Container, Center, Group } from '@mantine/core';
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'
import Choices from '@/components/radio_cat'

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

const CatPrevQuiz: NextPageWithLayout = () => {
  const {classes, theme} = useStyles();
  const router = useRouter();
  const query = router.query

  return (
    <div>
      <Head>
        <title>難問に挑戦｜飼い主検定</title>
      </Head>
      <main>
        <Card withBorder radius="md" className={classes.card}>
          <Group>
            <FontAwesomeIcon icon={faCat} size="lg" color={theme.colors["indigo"][6]} />
            <Text><p className="font-title">猫の検定：難問に挑戦</p></Text>
          </Group>
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
            <Choices choice1={query["choice001"]} choice2={query["choice002"]} choice3={query["choice003"]} answer={query["answer"]} commentary={query["commentary"]} category={query["TableName"]} id={query["id"]} />
          </Container>
        </Card>
      </main>
    </div>
  );
};

export default CatPrevQuiz;

CatPrevQuiz.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}