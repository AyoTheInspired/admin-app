import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Navigation from "./Navigation";
import "./content.css";
import OverviewSection from "./body-sections/OverviewSection";
import ChartFeed from "./body-sections/ChartFeed";
import TrioCharts from "./body-sections/TrioCharts";
import ProjectsTable from "./body-sections/ProjectsTable";
import Footer from "./Footer";

function Content() {
	return (
		<>
			<Wrapper className="col-lg px-0">
				<Navigation />
				<Container fluid>
					<OverviewSection />
					<ChartFeed />
					<TrioCharts />
					<ProjectsTable />
					<Footer />
				</Container>
			</Wrapper>
		</>
	);
}

// --primary: #3B82EC;
//     --secondary: #495057;
//     --success: #4BBF73;
//     --info: #1F9BCF;
//     --warning: #f0ad4e;
//     --danger: #d9534f;
//     --light: #f8f9fa;

export default Content;

const Wrapper = styled.section``;
