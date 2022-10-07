import { faTwitter, faInstagram, faTiktok, faLine } from '@fortawesome/free-brands-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createStyles, Card, ActionIcon, Group, Text, Badge, Grid, Center, Button } from '@mantine/core'
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Zen Maru Gothic, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

interface ArticleCardProps {
  image: any;
  category: any;
  title: any;
  footer: string;
  commentary: {
    answer: any;
    description: any;
    image: any;
    icon: any;
    commentator: any;
  };
}

export default function CommentaryCard({
  image,
  title,
  footer,
  commentary,
}: ArticleCardProps) {
  const {classes, theme} = useStyles()
  const TweetButton = () => {
    if (image == '/dog_correct.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=やったね！！おめでとう！！&url=https://kainushi-kentei.vercel.app/top_dc&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/dog_correct2.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=やったね！！おめでとう！！&url=https://kainushi-kentei.vercel.app/top_dc2&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/dog_correct4.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=やったね！！おめでとう！！&url=https://kainushi-kentei.vercel.app/top_dc4&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/dog_incorrect.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=おしい！！また明日がんばろう！！&url=https://kainushi-kentei.vercel.app/top_di&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/dog_incorrect2.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=おしい！！また明日がんばろう！！&url=https://kainushi-kentei.vercel.app/top_di2&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/dog_incorrect3.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=おしい！！また明日がんばろう！！&url=https://kainushi-kentei.vercel.app/top_di3&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/cat_correct.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=やったね！！おめでとう！！&url=https://kainushi-kentei.vercel.app/top_cc&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/cat_correct2.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=やったね！！おめでとう！！&url=https://kainushi-kentei.vercel.app/top_cc2&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/cat_correct3.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=やったね！！おめでとう！！&url=https://kainushi-kentei.vercel.app/top_cc3&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/cat_incorrect.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=おしい！！また明日がんばろう！！&url=https://kainushi-kentei.vercel.app/top_ci&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/cat_incorrect2.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=おしい！！また明日がんばろう！！&url=https://kainushi-kentei.vercel.app/top_ci2&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else if (image == '/cat_incorrect3.png') {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=おしい！！また明日がんばろう！！&url=https://kainushi-kentei.vercel.app/top_ci3&via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    } else {
      return <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/intent/tweet?text=飼い主検定であそぼう！&url=https://kainushi-kentei.vercel.app&via=via=Sayaka_Kamizono&related=Sayaka_Kamizono&hashtags=今日の飼い主検定"
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 30,
            paddingLeft: 12,
            paddingRight: 12,
            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },
        })}>
        <FontAwesomeIcon icon={faTwitter} />　結果をツイートする
      </Button>
    }
  }

  return (
    <Card withBorder p="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt={title} layout="responsive" width={1600} height={900} />
      </Card.Section>

      <Text weight={500} className={classes.title} mt="lg">
        答え：　{commentary.answer}
      </Text>

      <Group mt="lg" mb="lg">
        <div>
          <Grid>
            <Grid.Col span={3}>
              <Center mt="xs">
                <Image src={commentary.image} alt={'commentator'} width={64} height={64} />
              </Center>
              <Center mt="xs">
                <Text size="xs" color="dimmed">解説者：<br/>{commentary.commentator}</Text>
              </Center>
            </Grid.Col>
            <Grid.Col span={9} pl="0" pr="xs">
              <Badge color="cyan"><FontAwesomeIcon icon={faPaperclip} /> 解説</Badge>
              <Text size="sm" color="dark.4">
                {commentary.description}
              </Text>
            </Grid.Col>
          </Grid>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Center>
          <TweetButton />
        </Center>
        {/* <Group spacing={0}>
          <ActionIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </ActionIcon>
          <ActionIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </ActionIcon>
          <ActionIcon>
            <FontAwesomeIcon icon={faTiktok} />
          </ActionIcon>
          <ActionIcon>
            <FontAwesomeIcon icon={faLine} />
          </ActionIcon>
        </Group>  */}
      </Card.Section>
    </Card>
  );
}