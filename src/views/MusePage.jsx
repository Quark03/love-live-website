import {
	ContentCenter,
	MusePageContent,
	PageHeader,
	PageStyle,
} from "../styles/style";

import MuseLogo from "../assets/muse/MuseLogo.png";
import MuseBand from "../assets/muse/MuseBand.png";
import HonokaImg from "../assets/muse/Honoka.png";
function MusePage() {
	return (
		<PageStyle>
			<PageHeader>
				<img src={MuseLogo} alt="Muse Logo" />
			</PageHeader>
			<MusePageContent>
				<h1>The Band</h1>
				<ContentCenter>
					<img src={MuseBand} alt="Muse Band" />
				</ContentCenter>
				<h1>The Band Members</h1>
				<h2># Honoka</h2>
				<ContentCenter>
					<img src={HonokaImg} alt="Honoka" />
				</ContentCenter>
				<p>The band center! A cheerful shiny girl</p>
			</MusePageContent>
		</PageStyle>
	);
}

export default MusePage;
