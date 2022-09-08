import {StarIcon, FaceSmileIcon } from '@heroicons/react/24/solid';
import {createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group} from '@mantine/core';

const seconddata = [
  { title: '6位', text:'正解率19%', quiz:'犬も鼻くそをほじる？', icon: StarIcon, color: 'grape' },
  { title: '7位', text:'正解率21%', quiz:'猫の長寿履歴は何歳？', icon: FaceSmileIcon, color: 'indigo'},
  { title: '8位', text:'正解率22%', quiz:'犬も鼻くそをほじる？', icon: StarIcon, color: 'grape' },
  { title: '9位', text:'正解率26%', quiz:'猫の長寿履歴は何歳？', icon: FaceSmileIcon, color: 'indigo'},
  { title: '10位', text:'正解率30%', quiz:'犬も鼻くそをほじる？', icon: StarIcon, color: 'grape' }
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

export default function GridPrevSecond() {
  const { classes, theme } = useStyles();

  const seconditems = seconddata.map((item) => (
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
      <SimpleGrid cols={1} mt="md">
        {seconditems}
      </SimpleGrid>
    </Card>
  );
}