import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { StarIcon, FaceSmileIcon } from '@heroicons/react/24/solid';
import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group } from '@mantine/core';
import Link from 'next/link'
import CardDemo from '@/components/card'

const data = [
  {title: 'DOG', text: '犬の検定', quiz:'犬も鼻くそをほじる？', icon: StarIcon, color: 'grape', link: '/dogquiz'}
]

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `メイリオ, ${theme.fontFamily}`,
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

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));


export default function DogCorrect() {
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
        <Group position="apart">
          <Text className={classes.title}>不正解！</Text>
          <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          <HandThumbUpIcon className="h-5 w-5 text-purple-500" />
          </Anchor>
        </Group>
        <CardDemo />
        <SimpleGrid cols={1} mt="md">
          {items}
        </SimpleGrid>
      </Card>
      <Link href="/catquiz">
        <a>猫の検定へ</a>
      </Link>
    </>
  );
}