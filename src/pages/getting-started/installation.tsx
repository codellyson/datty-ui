// import { PageHeader } from '@/components/docs';
import { NPMIcon, PNPMIcon, YarnIcon } from '@/components/icons';
import { Layout } from '@/components/layout';
import { PageHeader } from '@/components/page-header';
import { Box, Text, createStyles } from '@mantine/core';
import { Prism } from '@mantine/prism';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
  },
}));

const InstallationPage = () => {
  const { classes } = useStyles();
  return (
    <Layout withSidebar>
      <div className={classes.wrapper}>
        <PageHeader>Installation</PageHeader>
        <Box component="section" className={classes.section}>
          <Text size="lg">
            DattyUI relies on <a href="https://mantine.dev">Mantine</a> so you need to install it
            first:
          </Text>
          <Prism.Tabs defaultValue="NPM">
            <Prism.TabsList>
              <Prism.Tab value="NPM" icon={<NPMIcon width="1rem" height="1rem" />}>
                NPM
              </Prism.Tab>
              <Prism.Tab value="Yarn" icon={<YarnIcon width="1rem" height="1rem" />}>
                Yarn
              </Prism.Tab>
              <Prism.Tab value="PNPM" icon={<PNPMIcon width="1rem" height="1rem" />}>
                PNPM
              </Prism.Tab>
            </Prism.TabsList>

            <Prism.Panel language="bash" value="NPM">
              npm install @mantine/core @mantine/hooks @emotion/react
            </Prism.Panel>
            <Prism.Panel language="bash" value="Yarn">
              yarn add @mantine/core @mantine/hooks @emotion/react
            </Prism.Panel>
            <Prism.Panel language="bash" value="PNPM">
              pnpm add @mantine/core @mantine/hooks @emotion/react
            </Prism.Panel>
          </Prism.Tabs>

          <Text size="lg">
            if you come across any issues during installation, please refer to{' '}
            <a href="https://mantine.dev/getting-started/">Mantine docs</a>.
          </Text>
        </Box>
      </div>
    </Layout>
  );
};

export default InstallationPage;
