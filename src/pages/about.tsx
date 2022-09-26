import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {createStyles, Card, Text, Group, Center} from '@mantine/core';
import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Challenge from '@/components/about_challenge'
import Howto from '@/components/about_howto'
import Layout from '@/components/layout'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Zen Maru Gothic, ${theme.fontFamily}`,
    fontWeight: 700,
    textAlign: 'center'
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

const About: NextPageWithLayout = () => {
  const {classes, theme} = useStyles();
  
  return (
    <div>
      <Head>
        <title>あそびかた｜飼い主検定</title>
      </Head>
      <main>
        <Card withBorder radius="md" className={classes.card}>
          <Center>
            <Text className={classes.title} mb="xs">
              &nbsp;飼い主検定 の あそびかた&nbsp;
              <FontAwesomeIcon icon={faGraduationCap} size="lg" />
            </Text>
          </Center>
          <Howto />
          <Challenge />
        </Card>
      </main>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}