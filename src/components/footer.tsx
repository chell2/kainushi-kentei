import { createStyles, Container, Group, Anchor } from '@mantine/core'
import Image from 'next/image'
import logo from 'public/logo_footer.png'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 0,
    paddingBottom: 500,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.sm,
    },
  },
}));

interface FooterProps {
  links: { link: string; label: string }[];
}

export default function Footer({ links }: FooterProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      // onClick={(event) => event.preventDefault()}
      size="xs"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image alt='logo' src={logo} layout='fixed' width={114} height={22} />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}