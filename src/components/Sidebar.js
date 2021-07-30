import React, { useContext } from "react";
import styled from "styled-components";
import SidebarBottom from "./sidebar/SidebarBottom";
import SidebarMid from "./sidebar/SidebarMid";
import SidebarTop from "./sidebar/SidebarTop";
import { SidebarContext } from "./SidebarContext";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FiBox } from "react-icons/fi";
import { useStateValue } from "./global-state/StateProvider";

import "./sidebar/sidebarStyles.css";

function Sidebar() {
	const [showSidebar, setShowSidebar] = useContext(SidebarContext);
	const [{ user }] = useStateValue();

	return (
		<>
			<Wrap className="px-0 pb-0 col-md-4 col-sm d-flex flex-column justify-content-start">
				<div className="sidebar__header my-4 pt-1 pb-2 px-4 mx-auto flexed">
					<span className="sidebar__header-icon mr-2 text-primary">
						<FiBox />
					</span>
					<h5 className="mb-0 mt-1 sidebar__header-text">AppStack</h5>
				</div>
				<SidebarTop />
				<SidebarMid />
				<SidebarBottom />
				<StatusContainer
					showSidebar={showSidebar}
					fluid
					className="user__wrap px-0 pt-2 d-lg-block">
					<div className="user__container flexed">
						<div className="user__img-div  pl-2 pr-1 flexed">
							<img
								src={user?.photoURL}
								alt=""
								className="ml-auto mx-2 user__img"
								height="40"
								width="40"
							/>
						</div>
						<div className="user__details py-2 px-0  text-white mr-auto">
							<h5 className="user__name mb-1">{user?.displayName}</h5>
							<h6 className="mb-0 user__status">
								<span className="status__circle mr-2">
									<GrStatusGoodSmall />
								</span>
								Online
							</h6>
						</div>
					</div>
				</StatusContainer>
			</Wrap>
		</>
	);
}

export default Sidebar;

const Wrap = styled.div`
	transition: all 0.5s linear;
	background: var(--sidebar-bg);
	color: var(--pale-2);
	min-width: 250px !important;
	max-width: 250px !important;
	min-height: 100%;
	@media (max-width: 425px) {
		max-width: 60% !important;
	}
`;

const StatusContainer = styled.div`
	position: fixed;
	min-width: 250px;
	max-width: 250px;
	transition: var(--sht-trans);
	margin-left: ${({ showSidebar }) => (showSidebar ? "0" : "-250px")};

	.user__img {
		object-fit: contain;
	}
`;

// https://appstack-react.bootlab.io/dashboard/default
