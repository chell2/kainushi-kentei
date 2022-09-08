import {StarIcon, FaceSmileIcon } from '@heroicons/react/24/solid';
import {createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group} from '@mantine/core';
import Acc from '@/components/accordion'

const firstdata = [
  { title: '1位', text:'正解率5%', quiz:'犬も鼻くそをほじる？', icon: StarIcon, color: 'grape' },
  { title: '2位', text:'正解率8%', quiz:'猫の長寿履歴は何歳？', icon: FaceSmileIcon, color: 'indigo'},
  { title: '3位', text:'正解率10%', quiz:'犬も鼻くそをほじる？', icon: StarIcon, color: 'grape' },
  { title: '4位', text:'正解率15%', quiz:'猫の長寿履歴は何歳？', icon: FaceSmileIcon, color: 'indigo'},
  { title: '5位', text:'正解率16%', quiz:'犬も鼻くそをほじる？', icon: StarIcon, color: 'grape' }
]

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
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

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

export default function GridPrev() {
  const { classes, theme } = useStyles();

  const firstitems = firstdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <Group position="apart">
        <Text size="md" weight="bold" mt={1}>
          {item.title}
        </Text>
        <Anchor size="sm" color="dimmed" sx={{ lineHeight: 1 }}>
          {item.text}
        </Anchor>
      </Group>
      <item.icon color={theme.colors[item.color][4]}  />
      <Text size="sm" mt={0} mb={4}>
        {item.quiz}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Text className={classes.title}>難問にチャレンジ🔥</Text>
      <SimpleGrid cols={1} mt="md">
        {firstitems}
      </SimpleGrid>
      <Acc />
    </Card>
  );
}