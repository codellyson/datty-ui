import { Layout } from '@/components/layout';
import { PageHeader } from '@/components/page-header';
import { Alert, Box, Code, Stack, Text, createStyles } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { IconAlertCircle } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
  },
}));

const ConfigurationPage = () => {
  const { classes } = useStyles();
  return (
    <Layout withSidebar withFooter>
      <div className={classes.wrapper}>
        <PageHeader>Configuration</PageHeader>
        <Box component="section" className={classes.section}>
          <Text size="md">
            For Mantine UI to work correctly, you need to setup the
            ChakraProvider at the root of your application. Go to the root of
            your application and do this:
          </Text>
          <Prism language="tsx">
            {`
      import * as React from "react";
      // 1. import MantineProvider
      import { MantineProvider } from "@mantine/core";
      function App() {
        // 2. Use at the root of your app
        return (
          <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                /** Put your mantine theme override here */
                colorScheme: "dark",
              }}
            >
              <Component {...pageProps} />
            </MantineProvider>
        );
      } 

`}
          </Prism>

          <Text size="md">
            if you come across any issues during installation, please refer to{' '}
            <a href="https://mantine.dev/getting-started/">Mantine docs</a>.
          </Text>

          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title="Note!"
            variant="filled"
          >
            <Stack>
              <Text size="md">
                For Next.js, you need to set this up in pages/_app.js or
                pages/_app.tsx
              </Text>
              <Text size="md">
                For Gatsby, install the <Code>gatsby-plugin-mantine</Code> . Add
                gatsby-plugin-mantine in your <Code>gatsby.config.js</Code>{' '}
                file:
                <Prism language="bash">
                  {`
       module.exports = {
         plugins: ['gatsby-plugin-mantine' /* ...other plugins */],
    };
        `}
                </Prism>
              </Text>
            </Stack>{' '}
          </Alert>
        </Box>
        <Text size="md" weight="bolder">
          Add Custom Theme (Optional)
        </Text>
        <Text size="md">
          If you need to customize the default mantine theme to match your
          design requirements, you can extend the theme from{' '}
          <Code> @mantine/core</Code>. Mantine UI provides us with different
          function that deep merges the default theme with your customizations.
        </Text>
        <Prism language="tsx">
          {`
          import { MantineProvider } from '@mantine/core';

          function Demo() {
            return (
              <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                  // for example, if you want to change the default color scheme to light
                  colorScheme: 'light',
                // add your custom colors, shadows, headings, etc.
                  colors: {
                    // Add your color
                    deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
                    // or replace default theme color
                    blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
                  },
          
                  shadows: {
                    md: '1px 1px 3px rgba(0, 0, 0, .25)',
                    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
                  },
          
                  headings: {
                    fontFamily: 'Roboto, sans-serif',
                    sizes: {
                      h1: { fontSize: '2rem' },
                    },
                  },
                }}
              >
                <App />
              </MantineProvider>
            );
          }
          `}
        </Prism>
      </div>
    </Layout>
  );
};

export default ConfigurationPage;
