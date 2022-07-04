import "./App.css";
import {
  Image,
  Group,
  Container,
  Button,
  MantineProvider,
} from "@mantine/core";
import { BrandLinkedin, BrandGithub } from "tabler-icons-react";
import { useState } from "react";
import underconstruct from "./Photo/underconstruct.jpg";

export default function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Container>
        <Image radius="md" src={underconstruct} alt="under construction" />
      </Container>
      <Group grow>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Shyned?tab=repositories"
          leftIcon={<BrandGithub size={30} />}
          styles={(theme) => ({
            root: {
              backgroundColor: "",
              border: 0,
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,

              "&:hover": {
                backgroundColor: theme.fn.darken("#ffa500", 0.05),
              },
            },

            leftIcon: {
              marginRight: 15,
            },
          })}
        >
          Github
        </Button>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/dyshine/"
          leftIcon={<BrandLinkedin size={30} />}
          styles={(theme) => ({
            root: {
              backgroundColor: "",
              border: 0,
              height: 60,
              paddingLeft: 20,
              paddingRight: 20,

              "&:hover": {
                backgroundColor: theme.fn.darken("#33a8ff", 0.05),
              },
            },

            leftIcon: {
              marginRight: 15,
            },
          })}
        >
          Linkedin
        </Button>
      </Group>
    </MantineProvider>
  );
}
