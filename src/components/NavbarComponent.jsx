import { useHistory } from "react-router";
import { Navbar, NavbarSection, NavItem } from "../styles/style";

function NavbarComponent() {
	const history = useHistory();

	const travel = (link) => {
		history.push(link);
	};

	return (
		<Navbar>
			<NavbarSection>
				<NavItem onClick={() => travel("/")}>Love Live</NavItem>
				<NavItem onClick={() => travel("/muse")}>Muse</NavItem>
				<NavItem onClick={() => travel("/aqours")}>Aqours</NavItem>
			</NavbarSection>
		</Navbar>
	);
}

export default NavbarComponent;
