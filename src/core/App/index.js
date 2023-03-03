import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles"
import { theme } from "./theme"
import { Provider } from "react-redux";
import store from "../../store";
import PersonalHomepage from "../../features/PersonalHomepage/PersonalHomepage";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PersonalHomepage />
      </ThemeProvider>
    </Provider>

  );
}

export default App;
