// Import React
import React from "react";
import styled, { ThemeProvider } from "styled-components";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  ComponentPlayground
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "../assets/styles.css";
const theme = createTheme({
  primary: "#1F2022"
});

const Li = styled(ListItem)`
  &&& {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: ${(props) => props.theme.distances.normal};
  }
`;

const LiActive = styled(Li)`
  &&& {
    color: ${(props) => props.theme.colors.main};
  }
`;

const CustomHeader = styled(Heading)`
  &&& {
    font-size: ${(props) => props.theme.fonts.large};
    padding-bottom: ${(props) => props.theme.distances.normal};
    color: ${(props) => props.theme.colors.main};
    font-family:  ${(props) => props.theme.fonts.family};
  }
`;

const LargeHeader = styled(CustomHeader)`
  &&& {
    font-size: ${(props) => props.theme.fonts.xlarge};
  }
`;

const Description = styled(Text)`
  &&& { 
    color: ${(props) => props.theme.colors.main};
    font-size: ${(props) => props.theme.fonts.medium};
  }
`;

export default class Presentation extends React.Component {
  render() {
    const cpProps = {
      scope: {
        styled,
        ThemeProvider
      },
      theme: "dark"
    };
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]}>
          <LargeHeader>
            Styled Components
          </LargeHeader>
          <Description>
            Short introduction
          </Description>
        </Slide>
        <Slide transition={["zoom"]}>
          <LargeHeader>
            Before
          </LargeHeader>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Inline
          </CustomHeader>
          <ComponentPlayground {...cpProps} code={
            require("raw-loader!../assets/examples/inline")
          }
          />
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Css stylesheet
          </CustomHeader>
          <ComponentPlayground {...cpProps} code={
            require("raw-loader!../assets/examples/stylesheet")
          }
          />
        </Slide>
        <Slide transition={["zoom"]}>
          <LargeHeader>
            Styled Components way
          </LargeHeader>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Basic styling
          </CustomHeader>
          <ComponentPlayground {...cpProps} code={
            require("raw-loader!../assets/examples/basic")
          }
          />
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Reuse existing component
          </CustomHeader>
          <ComponentPlayground {...cpProps} code={
            require("raw-loader!../assets/examples/grow")
          }
          />
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Use theme for global style definitions
          </CustomHeader>
          <ComponentPlayground {...cpProps}
            code={require("raw-loader!../assets/examples/theme")}
          />
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <Li>Style the components without artificial syntax</Li>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <Li>Style the components without artificial syntax</Li>
            <LiActive>Define style within the component scope</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <Li>Style the components without artificial syntax</Li>
            <Li>Define style within the component scope</Li>
            <LiActive>No additional and redundant 'style' file</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <Li>Style the components without artificial syntax</Li>
            <Li>Define style within the component scope</Li>
            <Li>No additional and redundant 'style' file</Li>
            <LiActive>No redundant and unused styles</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Pros
          </CustomHeader>
          <List>
            <Li>Style the components without artificial syntax</Li>
            <Li>Define style within the component scope</Li>
            <Li>No additional and redundant 'style' file</Li>
            <Li>No redundant and unused styles</Li>
            <LiActive>No need for 'className' and 'style' bindings</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Cons
          </CustomHeader>
          <List>
            <LiActive>Post processing aka Autoprefixer</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Cons
          </CustomHeader>
          <List>
            <Li>Post processing aka Autoprefixer</Li>
            <LiActive>Probability of conflicts with already defined styles</LiActive>
          </List>
        </Slide>
        <Slide transition={["fade"]} align="flex-start">
          <CustomHeader>
            Cons
          </CustomHeader>
          <List>
            <Li>Post processing aka Autoprefixer</Li>
            <Li>Probability of conflicts with already defined styles</Li>
            <LiActive>Perfomance problems if you have extremely large app</LiActive>
          </List>
        </Slide>
        <Slide transition={["zoom"]}>
          <LargeHeader>
            Alternatives?
          </LargeHeader>
        </Slide>
        <Slide transition={["zoom"]}>
          <LargeHeader>
            Questions?
          </LargeHeader>
        </Slide>
      </Deck>
    );
  }
}
