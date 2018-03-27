import styled, {ThemeProvider} from "styled-components";

const Text = styled.div`
  font-size:  ${props => props.theme.fonts.normal};
  color: ${props => props.theme.colors.main}
`;

const baseTheme = {
    fonts: {
        small: '.5rem',
        normal: '1rem',
        large: '2rem',
    },
    colors: {
        main: 'rgb(212,212,212)'
    }
};

export default () => (
    <ThemeProvider theme={baseTheme}>
        <Text>Hi, I am styled text</Text>
    </ThemeProvider>
);
