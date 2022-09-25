import { faTwitter, faInstagram, faTiktok, faLine } from '@fortawesome/free-brands-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createStyles, Card, ActionIcon, Group, Text, Badge, Grid, Center, Button } from '@mantine/core'
import Image from 'next/image'
import {TwitterShareButton, TwitterIcon} from "react-share"

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
  category,
  title,
  footer,
  commentary,
}: ArticleCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt={title} layout="responsive" width={1600} height={900} />
      </Card.Section>

      {/* <Badge>{category}</Badge> */}
      {/* <Text weight={700} className={classes.title} mt="xs">
        {title}
      </Text> */}
      
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
        {/* <Group position="apart"> */}
          {/* <Text size="xs" color="dimmed">
            {footer}
          </Text> */}
          <Center>
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="http://twitter.com/intent/tweet?text=やったね！！おめでとう！！&url=https://kainushi-kentei.vercel.app/judgment&via=chell2282&related=chell2282&hashtags=今日の飼い主検定"
            // leftIcon={}
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
              // leftIcon: {
              //   marginRight: 15,
              // },
            })}
          ><FontAwesomeIcon icon={faTwitter} />　結果をツイートする
            {/* <TwitterShareButton url={'https://kainushi-kentei.lolipop.io'} title={'飼い主検定'} via="Kill_In_Sun"
              related={["Kill_In_Sun", "GatsbyJS"]} hashtags={['飼い主検定']}>
              <Group><TwitterIcon size={24} />ツイートする</Group>
            </TwitterShareButton> */}
            </Button>
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
        {/* </Group> */}
      </Card.Section>
    </Card>
  );
}