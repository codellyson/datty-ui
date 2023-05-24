import { AppShell, Box, Center, Footer, Text } from "@mantine/core";
import React from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
type LayoutProps = {
  children: React.ReactNode;
  withSidebar: boolean;
  withFooter?: boolean;
};
export const Layout = ({ withSidebar, withFooter, children }: LayoutProps) => {
  const links = [
    {
      label: "Home",
      link: "/",
    },
  ];
  return (
    <AppShell
      header={<Header links={links} />}
      navbar={withSidebar ? <Sidebar /> : (null as any)}
    >
   <Box sx={{
      minHeight: "calc(100vh - 100px)",
   }}>
   {children}
   </Box>
      <Center>
        <Text py="lg">
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          from Nigeria{" "}
          <span role="img" aria-label="nigeria">
            🇳🇬
          </span> {" "}
          by <a href="https://github.com/dellysn">Lukman Isiaka</a>
        </Text>
      </Center>
    </AppShell>
  );
};
