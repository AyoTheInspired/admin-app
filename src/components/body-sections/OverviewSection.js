import React, { useContext } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FiFilter, FiRefreshCw } from "react-icons/fi";
import styled from "styled-components";
import { overviewInfo } from "../../appData";
import { SidebarContext } from "../SidebarContext";

function OverviewSection() {
	const [appData, setAppData, staticHeader, staticContent, sideItemClicked] =
		useContext(SidebarContext);
	const [showSidebar, setShowSidebar] = useContext(SidebarContext);

	return (
		<Wrap className="col-lg my-2 px-0">
			<div className="section__header col d-flex flex-wrap justify-content-between align-items-center pt-4 my-3">
				<div className="section__header-left mx-auto mt-2">
					<h4 className=" mb-0 header__left-text">Welcome back, Ayo!</h4>
				</div>
				<div className="flexed mx-auto mt-2">
					<h5 className="header__mid-text mb-0 mr-2">
						Project was inspired by
					</h5>
					<a
						href="https://appstack-react.bootlab.io/dashboard/default"
						className="inspiration__link text-slant bg-dark text-white p-2">
						This Template
					</a>
				</div>
				<div className="section__header-right flexed mx-auto mt-2">
					<DropdownButton
						id="dropdown-basic-button"
						title="Today"
						className="dropdown__header">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item href="#/action-3">Seperated Link</Dropdown.Item>
					</DropdownButton>
					<div className="flexed">
						<span className="header__right-icon p-2 text-white bg-dark mx-1 ">
							<FiFilter />
						</span>
						<span className="header__right-icon p-2 text-white bg-dark">
							<FiRefreshCw />
						</span>
					</div>
				</div>
			</div>
			<div className="overview__wrap my-2 flexed flex-wrap mx-auto">
				{overviewInfo.map((info) => {
					const { icon, iconColor, figure, text } = info;
					return (
						<div className="overview__container mx-2 py-4 my-2 col-sm-5 col-md-5 col-lg flexed">
							<span className={`${iconColor} overview__icon`}> {icon} </span>
							<div className="overview__detail d-flex flex-column justify-content-between mr-auto">
								<h5 className="overview__figure mb-2">{figure}</h5>
								<p className="overview__text mb-0">{text}</p>
							</div>
						</div>
					);
				})}
			</div>

			{showSidebar && (
				<div className="bg-dark col mx-auto static__wrapper py-4 px-5">
					<h3 className="text-white text-center static__header">
						{appData.staticHeader || "Select a Sidebar item"}
					</h3>
					<h5 className="text-warning text-center static__content">
						{appData.staticContent || "... and then a sub-item"}
					</h5>

					{appData.sideItemClicked && (
						<p className="mb-0 text-success text-center">
							Lorem ipsum{" "}
							<span className="text-warning">{appData.staticContent}</span>, sit
							amet consectetur adipisicing elit. Blanditiis numquam eos odio
							saepe accusamus, sed nemo quae sequi unde consequatur sint, quam
							magnam perspiciatis voluptatem exercitationem cum eius asperiores
							itaque aliquid inventore, nihil animi incidunt! Inventore alias
							nobis quas. Vel corrupti nulla minima, eligendi veniam suscipit.
							Obcaecati ipsum delectus corporis.
						</p>
					)}
				</div>
			)}
		</Wrap>
	);
}

export default OverviewSection;

const Wrap = styled.section`
	display: block;
`;
