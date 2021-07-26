import React, { useState, useContext } from "react";
import { Navbar, Nav, Badge, Form, FormControl } from "react-bootstrap";
import { FaBars, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { navInfo } from "../appData";
import { uid } from "react-uid";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { SidebarContext } from "./SidebarContext";

function Navigation() {
	const [mobileView, setMobileView] = useState(false);
	const [showSidebar, setShowSidebar] = useContext(SidebarContext);

	window.addEventListener("resize", function () {
		if (window.innerWidth <= 768) {
			setMobileView(true);
		} else setMobileView(false);
	});

	return (
		<>
			<Wrap>
				<Navbar expand="lg" className="navbar">
					<div className="nav__logo">
						<Navbar.Brand>
							<div className="flexed">
								{showSidebar ? (
									<FaTimes
										onClick={() => setShowSidebar(!showSidebar)}
										className="sidebar__toggle mr-2"
									/>
								) : (
									<FaBars
										onClick={() => setShowSidebar(!showSidebar)}
										className="sidebar__toggle mr-2"
									/>
								)}

								<Form inline className="nav__form">
									<FormControl
										type="text"
										placeholder="Search Projects..."
										className="mr-sm-2 nav__form-input"
									/>
								</Form>
							</div>
						</Navbar.Brand>
						<div className="mr-auto"></div>
					</div>

					<Navbar.Collapse id="the-nav" className="justify-content-end">
						<Nav className="">
							{navInfo.map((info, id) => {
								const { icon, tip, tag } = info;
								return (
									<Nav.Link
										data-tip={tip}
										className="nav__link-icon"
										key={uid(info)}>
										<div
											className={
												mobileView ? "flexed py-1 px-2 my-1 icon-wrap" : "mx-3"
											}>
											<span className="">{icon}</span>
											<StyledReactTooltip
												arrowColor="var(--sidebar-bg)"
												place="left"
												type="dark"
												effect="float"></StyledReactTooltip>
											{mobileView && <h6 className="mb-0"> {tag} </h6>}
											<Badge className="icon-badge">10</Badge>
										</div>
									</Nav.Link>
								);
							})}
						</Nav>
						<div
							className={
								mobileView
									? "logout-div p-2 col-6 mx-auto"
									: "logout-div  flexed p-2 pl-3 text-white"
							}>
							<h6 className="mb-0 text-center">
								<span className="mr-2">
									<FaSignOutAlt />
								</span>
								Sign Out
							</h6>
						</div>
					</Navbar.Collapse>
				</Navbar>
			</Wrap>
		</>
	);
}

export default Navigation;

const Wrap = styled.div`
	& .sidebar__toggle {
		font-size: 25px;
		cursor: pointer;
		color: #3b82ec;
	}

	width: 100% !important;
	& .nav-toggler {
		font-size: 23px;
		color: #fff;
	}
	& .nav__link-icon {
		position: relative;
		color: #888 !important;
	}

	& h3.logo-text {
		color: #fff;
		font-size: 25px;
		opacity: 0.5;
		cursor: pointer;
		transition: var(--sht-trans);

		&:hover {
			opacity: 1;
		}
	}

	& .nav__link-icon,
	& .logout-div h6 {
		transition: var(--sht-trans);
		color: #aaa;

		&:hover,
		&:hover .icon-badge {
			color: var(--sidebar-bg);
			opacity: 1;
		}
	}

	& .icon-badge {
		@media (max-width: 768px) {
			display: none;
		}
	}
	& .nav__link-icon span {
		font-size: 20px;
		transition: var(--sht-trans);
		&:hover,
		&:hover.icon-badge {
			color: var(--sidebar-bg);
		}
	}

	& .icon-badge {
		font-size: 10px !important;
		position: absolute;
		top: 8px;
		right: 0;
		left: 25px;
		color: red;
	}

	& .logout-div {
		cursor: pointer;
		border-left: 1px solid var(--bby-blue);
	}

	& .nav__form,
	.nav__form-input {
		border: none !important;
		box-shadow: none;
	}

	@media (max-width: 768px) {
		.nav__link-icon span {
			margin-right: 10px !important;
			color: #fff;
			color: var(--bby-blue);
			opacity: 1;
		}

		.icon-wrap {
			color: #fff;
			transition: var(--sht-trans);
			border: 1px solid var(--bby-blue);
			&:hover {
				background: var(--pale-gray);
				margin-right: 10px;

				& span,
				& h6 {
					color: var(--dark-ppl);
				}
			}

			&:hover .nav__link-icon span {
				color: var(--dark-ppl);
				color: red !important;
			}
		}

		& .icon-badge {
			margin-left: 20px !important;
		}
		.logout-div {
			border-left: none;
			border: 1px solid var(--bby-blue);
			margin-top: 5px;
			transition: var(--sht-trans);
			& h6 {
				color: #fff;
				opacity: 1;
			}
			&:hover {
				background: var(--pale-gray);
			}

			&:hover h6 {
				color: var(--dark-ppl);
			}
		}
	}
`;

const StyledReactTooltip = styled(ReactTooltip)`
	background: var(--sidebar-bg) !important;
`;
