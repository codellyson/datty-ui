import { Anchor, Box, Center, Title, UnstyledButton } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { Category } from '../../data';
import useStyles from './CategoryHeader.styles';

interface CategoryHeaderProps {
  category: Category;
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  const { classes, theme } = useStyles();
  const router = useRouter();
  return (
    <>
      <UnstyledButton onClick={() => router.back()}>
        <Anchor>
          <Center inline>
            {theme.dir === 'rtl' ? (
              <IconArrowRight size="0.9rem" />
            ) : (
              <IconArrowLeft size="0.9rem" />
            )}
            <Box component="span" ml={5}>
              Back to all categories
            </Box>
          </Center>
        </Anchor>
      </UnstyledButton>

      <Title className={classes.title}>{category.name}</Title>
    </>
  );
}
