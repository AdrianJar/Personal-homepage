import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles"
import { useSelector } from "react-redux";
import { themeDark, themeLight } from "./theme";
import { selectIsDarkTheme } from "../../common/ThemeSwitch/themeSlice";
import PersonalHomepage from "../../features/PersonalHomepage/PersonalHomepage";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  console.log(isDarkTheme)
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
