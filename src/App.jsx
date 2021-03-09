import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import NavbarComponent from "./components/NavbarComponent";
import { WebWrapper } from "./styles/style";
import Theme from "./utils/theme";
import AqoursPage from "./views/AqoursPage";
import HomePage from "./views/HomePage";
import MusePage from "./views/MusePage";

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<WebWrapper>
				<NavbarComponent />
				<Switch>
					<Route exact={true} path="/" component={HomePage} />
					<Route exact={true} path="/muse" component={MusePage} />
					<Route exact={true} path="/aqours" component={AqoursPage} />
				</Switch>
				<div></div>
			</WebWrapper>
		</ThemeProvider>
	);
}

export default App;
