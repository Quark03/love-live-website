import styled from "styled-components";

/*
    WRAPPER
*/

export const WebWrapper = styled.div`
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 70px 100% 20px;
	background-color: transparent;
	padding-bottom: 20px;
`;

/*
    NAVBAR STYLES
*/

export const Navbar = styled.nav`
	box-sizing: border-box;
	border-radius: 20px;
	padding: 20px 30px;
	width: 70%;
	margin: auto;
	background-color: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(8px) saturate(100%) contrast(100%) brightness(100%);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavbarSection = styled.ul`
	list-style: none;
`;

export const NavItem = styled.li`
	display: inline;
	font-size: 20px;
	padding: 10px 20px;
	margin: 0px 10px;
	cursor: pointer;
	font-weight: 600;
	border-radius: 20px;
	border: 2px solid rgba(255, 255, 255, 0.4);
	color: ${({ theme }) => theme.themes.LoveLive};

	&:hover {
		background-color: rgba(255, 255, 255, 0.4);
	}

	&:nth-child(2) {
		color: ${({ theme }) => theme.themes.Muse};
	}

	&:nth-child(3) {
		color: ${({ theme }) => theme.themes.Aqours};
	}
`;

/*
    PAGE STYLES
*/

export const PageStyle = styled.main`
	box-sizing: border-box;
	border-radius: 20px;
	width: 70%;
	margin: auto;
	background-color: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(2px) saturate(100%) contrast(100%) brightness(100%);
`;

export const PageHeader = styled.div`
	width: 100%;
	text-align: center;
	padding: 30px;
	img {
		width: 300px;
	}
`;

export const MusePageContent = styled.div`
	padding: 30px;
	backdrop-filter: blur(2px) saturate(100%) contrast(100%) brightness(100%);

	h1 {
		color: ${({ theme }) => theme.themes.Muse};
		font-family: "Lobster Two";
		font-size: 50px;
		padding-bottom: 5px;
		border-bottom: 2px solid ${({ theme }) => theme.themes.Muse};
	}

	h2 {
		color: ${({ theme }) => theme.themes.Muse};
		font-family: "Lobster Two";
		font-size: 40px;
	}

	img {
		max-height: 300px;
	}

	p {
		font-size: 18px;
		font-weight: 600;
		color: ${({ theme }) => theme.themes.Muse};
	}
`;

export const AqoursPageContent = styled(MusePageContent)`
	h1 {
		color: ${({ theme }) => theme.themes.Aqours};
		border-bottom: 2px solid ${({ theme }) => theme.themes.Aqours};
	}

	h2 {
		color: ${({ theme }) => theme.themes.Aqours};
	}

	p {
		color: ${({ theme }) => theme.themes.Aqours};
	}
`;

export const ContentCenter = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
