import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { SidebarContext } from "./SidebarContext";

function Body() {
	const [showSidebar, setShowSidebar] = useContext(SidebarContext);
	return (
		<>
			<Container fluid className="px-0">
				<Section className="d-flex justify-content-between">
					{/* {showSidebar && <Sidebar />} */}

					<Wrap showSidebar={showSidebar}>
						<Sidebar />
					</Wrap>
					<Content />
				</Section>
			</Container>
		</>
	);
}

export default Body;

const Section = styled.section`
	position: relative;
`;

const Wrap = styled.div`
	transition: var(--sht-trans);
	margin-left: ${({ showSidebar }) => (showSidebar ? "0" : "-250px")};
`;
