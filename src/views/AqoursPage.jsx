import {
	AqoursPageContent,
	ContentCenter,
	PageHeader,
	PageStyle,
} from "../styles/style";

import AqoursLogo from "../assets/aqours/AqoursLogo.png";
import AqoursBand from "../assets/aqours/AqoursBand.png";
import TakamiChika from "../assets/aqours/TakamiChika.png";
function AqoursPage() {
	return (
		<PageStyle>
			<PageHeader>
				<img src={AqoursLogo} alt="" />
			</PageHeader>
			<AqoursPageContent>
				<h1>The Band</h1>
				<ContentCenter>
					<img src={AqoursBand} alt="Aqours Band" />
				</ContentCenter>
				<h1>Band Members</h1>
				<h2># Chika</h2>
				<ContentCenter>
					<img src={TakamiChika} alt="Takami Chika" />
				</ContentCenter>
			</AqoursPageContent>
		</PageStyle>
	);
}

export default AqoursPage;
