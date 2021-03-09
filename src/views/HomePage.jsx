import {
	ContentCenter,
	HomePageContent,
	PageHeader,
	PageStyle,
} from "../styles/style";
import LoveLiveLogo from "../assets/LoveLiveLogo.png";

function HomePage() {
	return (
		<PageStyle>
			<PageHeader>
				<img src={LoveLiveLogo} alt="Love Live Logo" />
			</PageHeader>
			<HomePageContent>
				<h1>1st Love Live</h1>
				<ContentCenter>
					<table>
						<tr>
							<th> PARTICIPANTS </th>
							<th> ORIGIN </th>
						</tr>
						<tr>
							<td>A-RISE*</td>
							<td>Tokyo</td>
						</tr>
						<tr>
							<td>Little Tokyo</td>
							<td>Tokyo</td>
						</tr>
						<tr>
							<td>Girlsh Season</td>
							<td>Hokkaido</td>
						</tr>
						<tr>
							<td>Lucky</td>
							<td>Okinawa</td>
						</tr>
						<tr>
							<td>Hello! Hello!</td>
							<td>Shizuoka</td>
						</tr>
						<tr>
							<td>Madonna</td>
							<td>Kyoto</td>
						</tr>
						<tr>
							<td>UC_G</td>
							<td>Tokyo</td>
						</tr>
						<tr>
							<td>OTEMO-YAN</td>
							<td>Kumamoto</td>
						</tr>
						<tr>
							<td>Dream</td>
							<td>Fukuoka</td>
						</tr>
						<tr>
							<td>μ's</td>
							<td>Tokyo</td>
						</tr>
					</table>
					<p>* Contest Winners</p>
				</ContentCenter>
				<h1>2nd Love Live</h1>
				<ContentCenter>
					<table>
						<tr>
							<th>PARTICIPANTS</th>
							<th>ORIGIN</th>
						</tr>
						<tr>
							<td>μ's *</td>
							<td>Tokyo</td>
						</tr>
						<tr>
							<td>A-RISE</td>
							<td>Tokyo</td>
						</tr>
						<tr>
							<td>Midnight Cats</td>
							<td>Tokyo</td>
						</tr>
						<tr>
							<td>East Heart</td>
							<td>Tokyo</td>
						</tr>
						<tr>
							<td>Ever Never Girl</td>
							<td>----</td>
						</tr>
						<tr>
							<td>Lemon Milk</td>
							<td>----</td>
						</tr>
						<tr>
							<td>9RANE</td>
							<td>----</td>
						</tr>
					</table>
					<p>* Contest Winners</p>
				</ContentCenter>
			</HomePageContent>
		</PageStyle>
	);
}

export default HomePage;
