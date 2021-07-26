import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FiFilter, FiRefreshCw } from "react-icons/fi";
import styled from "styled-components";
import { overviewInfo } from "../../appData";

function OverviewSection() {
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
		</Wrap>
	);
}

export default OverviewSection;

const Wrap = styled.section`
	display: block;
`;

// <img src="/static/media/avatar.d7185574.jpg" width="36" height="36" class="rounded-circle mr-2" alt="Chris Wood"></img>
