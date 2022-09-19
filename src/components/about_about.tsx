import { createStyles, Card, Text, SimpleGrid } from '@mantine/core';

const data = [
  { text: '飼い主さんに知っておいてほしい事柄をクイズにしました。ケガや病気になった後で、「もっと早く気付けていたら… 」そんな後悔をする飼い主さんを１人でも減らせたら嬉しいです。ぜひTwitterでシェアしてください！' }
]

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    margin: 10,
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
    textAlign: 'left',
    borderRadius: theme.radius.md,
    height: 110,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
  },
}));


export default function About() {
  const {classes, theme} = useStyles();

  const items = data.map((item) => (
    <Card key={item.text} className={classes.item}>
      <Text size="xs" mt={0} mb={4}>
        {item.text}
      </Text>
    </Card>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Text className={classes.title}>飼い主検定とは</Text>
      <SimpleGrid cols={1} mt="0">
        {items}
      </SimpleGrid>
    </Card>
  );
}