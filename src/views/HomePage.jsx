import { PageHeader, PageStyle } from "../styles/style";
import LoveLiveLogo from "../assets/LoveLiveLogo.png";

function HomePage() {
	return (
		<PageStyle>
			<PageHeader>
				<img src={LoveLiveLogo} alt="Love Live Logo" />
			</PageHeader>
		</PageStyle>
	);
}

export default HomePage;
