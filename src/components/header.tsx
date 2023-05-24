import { useState } from 'react';
import {
  createStyles,
  Header as MantineHeader,
  Group,
  ActionIcon,
  Container,
  Burger,
  rem,
  Title,
  Text,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandGithub,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  social: {
    // width: rem(260),
    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderProps {
  links: { link: string; label: string }[];
}

export function Header({ links }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx, theme } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <MantineHeader height={56} mb={120} fixed>
      <Container className={classes.inner} size="xl" fluid>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />

        <Title>
          Datty{' '}
          <Text span variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
            UI
          </Text>{' '}
        </Title>
        <TextInput placeholder="Search" />
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            size="lg"
            color={theme.colorScheme === 'dark' ? theme.colors.yellow[6] : theme.colors.gray[4]}
          >
            <IconBrandTwitter stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color={theme.colorScheme === 'dark' ? theme.colors.yellow[6] : theme.colors.gray[4]}
          >
            <IconBrandGithub stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color={theme.colorScheme === 'dark' ? theme.colors.yellow[6] : theme.colors.gray[4]}
          >
            <IconBrandInstagram stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </MantineHeader>
  );
}
