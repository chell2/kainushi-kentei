import { createStyles, Card, Text, SimpleGrid } from '@mantine/core';

const data = [
  { text: '過去に出題されたクイズの中から超難問を集めてみたよ。あなたは何問正解できるかな？' }
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
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
  },
}));


export default function Challenge() {
  const {classes, theme} = useStyles();

  const items = data.map((item) => (
    <Card key={item.text} className={classes.item}>
      <Text size="sm" mt={0} mb={4}>
        {item.text}
      </Text>
    </Card>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Text className={classes.title}>難問に挑戦</Text>
      <SimpleGrid cols={1} mt="0">
        {items}
      </SimpleGrid>
    </Card>
  );
}