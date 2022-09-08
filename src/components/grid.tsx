import {StarIcon, FaceSmileIcon } from '@heroicons/react/24/solid';
import {createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group} from '@mantine/core';
import Link from 'next/link'

const mockdata = [
  { title: 'DOG', text: '犬の検定', icon: StarIcon, color: 'grape', link: '/dogquiz' },
  { title: 'CAT', text:'猫の検定', icon: FaceSmileIcon, color: 'indigo', link: '/catquiz' }
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


export default function Grid() {
  const {classes, theme} = useStyles();

  const items = mockdata.map((item) => (
    <Link key={item.link} href={item.link} passHref>
    <UnstyledButton component="a" key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]}  />
      <Text size="sm" weight="bold" mt={1}>
        {item.title}
      </Text>
      <Text size="xs" mt={0} mb={4}>
        {item.text}
      </Text>
      </UnstyledButton>
      </Link>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>今日の問題にチャレンジ!!!!!</Text>
        {/* <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          + 21 other services
        </Anchor> */}
      </Group>
      <SimpleGrid cols={2} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}