// Import React
import React from "react";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Typeface,
  CodePane,
  ComponentPlayground
} from "spectacle";

import Header from "../src/Header";

// Import theme
import createTheme from "spectacle/lib/themes/default";


const theme = createTheme({
  primary: "#1F2022",
  secondary: "rgba(212, 212, 212, 1)",
  tertiary: "rgba(212, 212, 212, 1)",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const CustomCodePane = styled(CodePane)`
  font-size: 1.2rem !important;
  font-family: 'Fira Code';
`;

const Li = styled(ListItem)`
  font-size: 2rem !important;
  color: rgba(212, 212, 212, .6);
  margin-bottom: 1rem;
`;

const LiActive = styled(Li)`
  color: rgba(212, 212, 212, 1);
`;

const CustomHeader = styled(Heading)`
  font-size: 3rem !important;
  padding-bottom: 1rem;
  color: rgba(212, 212, 212, 1);
  font-family: 'Fira Code';
`;

const CustomText = styled(Text)`
  color: rgb(212, 212, 212) !important;
`;

// hello
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} align="flex-start">
          <CustomHeader>
            Styled Components
          </CustomHeader>
          <CustomText>
            short introduction
          </CustomText>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Basic styling
          </CustomHeader>
          <CustomCodePane
            lang="javascript"
            className="jscode"
            source={require("raw-loader!../src/basic.example")}
          />
          <ComponentPlayground theme="dark" code={require("raw-loader!../src/basic.example")}>
            <Header/>
          </ComponentPlayground>
          
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Style existing component
          </CustomHeader>
          <CustomCodePane
            lang="javascript"
            className="jscode"
            source={require("raw-loader!../assets/grow.example")}
          />
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Use theme for global style definitions
          </CustomHeader>
          <CustomCodePane
            lang="javascript"
            className="jscode"
            source={require("raw-loader!../assets/theme.example")}
          />
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <LiActive>Styling components without artificial syntax</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <Li>Styling components without artificial syntax</Li>
            <LiActive>Bind style definition with defined component</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <Li>Styling components without artificial syntax</Li>
            <Li>Bind style definition with defined component</Li>
            <LiActive>There is no additional and redundant 'style' file</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <Li>Styling components without artificial syntax</Li>
            <Li>Bind style definition with defined component</Li>
            <Li>There is no additional and redundant 'style' file</Li>
            <LiActive>There is no redundant and unused styles</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <Li>Styling components without artificial syntax</Li>
            <Li>Bind style definition with defined component</Li>
            <Li>There is no additional and redundant 'style' file</Li>
            <Li>There is no redundant and unused styles</Li>
            <LiActive>No need for 'className' and 'style' bindings</LiActive>
          </List>
        </Slide>
      </Deck>
    );
  }
}
