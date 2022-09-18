import { createStyles, Card, Text, SimpleGrid, UnstyledButton } from '@mantine/core';

const data = [
  {text: '「今日の問題」から "犬の検定" または "猫の検定" が選べます。日替わりでクイズが出題されるので、３択から正解を選んで回答してね！' }
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

export default function GridHowto() {
  const {classes, theme} = useStyles();

  const items = data.map((item) => (
    <UnstyledButton component="a" key={item.text} className={classes.item}>
      <Text size="xs" mt={0} mb={4}>
        {item.text}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Text className={classes.title}>あそびかた</Text>
      <SimpleGrid cols={1} mt="0">
        {items}
      </SimpleGrid>
    </Card>
  );
}