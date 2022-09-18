import {StarIcon, FaceSmileIcon} from '@heroicons/react/24/solid';
import {createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group} from '@mantine/core';
import Link from 'next/link'

const data = [
  {title: 'CAT', text: '猫の検定', quiz:'猫の長寿ギネス記録は何歳？', icon: FaceSmileIcon, color: 'indigo', link: '/catquiz'}
]

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

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));


export default function GridNewCat() {
  const {classes, theme} = useStyles();

  const items = data.map((item) => (
    <Link key={item.link} href={item.link} passHref>
      <UnstyledButton component="a" key={item.title} className={classes.item}>
        <Text size="sm" weight="bold" mt={1}>
          {item.quiz}
        </Text>
      </UnstyledButton>
    </Link>
  ));

  return (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Text className={classes.title}>猫の検定</Text>
        <SimpleGrid cols={1} mt="md">
          {items}
        </SimpleGrid>
      </Card>
      <Link href="/dogquiz">
        <a> ▷ 犬の検定へ</a>
      </Link>
    </>
  );
}