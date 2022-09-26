import { createStyles, Card, Text, SimpleGrid } from '@mantine/core';

const data = [
  { text: '犬や猫に関するクイズが毎日１問出題されるよ！「今日の問題」から “犬の検定” または “猫の検定” を選んでね。みんなで飼い主レベルをアップしよう！' }
]

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    margin: 10,
  },

  title: {
    fontFamily: `Zen Maru Gothic, ${theme.fontFamily}`,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 10
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
  },
}));

export default function Howto() {
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
      <Text className={classes.title}>『 今日の問題 』</Text>
      <SimpleGrid cols={1} mt="0">
        {items}
      </SimpleGrid>
    </Card>
  );
}