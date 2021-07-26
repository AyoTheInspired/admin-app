import React from "react";
import styled from "styled-components";
import { sidebarTopInfo } from "../../appData";
import "./sidebarStyles.css";
import { Badge, Accordion, Card } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { uid } from "react-uid";

function SidebarTop() {
	return (
		<Wrap className="px-3">
			<h6 className="mb-1 mt-2 text-white main__title">Pages</h6>
			<Accordion>
				<Card className="card">
					{sidebarTopInfo.map((info) => {
						const { icon, title, dropArrow, badge, badgeVariant, children } =
							info;

						return (
							<>
								<Accordion.Toggle
									as={Card.Header}
									key={uid(title)}
									eventKey={title}
									className="sidebar-toggle d-flex justify-content-between align-items-center px-0 py-1">
									<div className="sidebar__item-a">
										<span className="sidebar__title-icon mr-2">{icon}</span>
										<h6 className="mb-0 sub__title mt-2"> {title} </h6>
									</div>
									<div className="ml-auto">
										{dropArrow ? (
											<div className="text-center">
												<MdKeyboardArrowDown />
											</div>
										) : (
											<div>
												<Badge
													variant={badgeVariant}
													className="sidebar__item-span text-white">
													{badge && badge}
												</Badge>
											</div>
										)}
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey={title}>
									<Card.Body className="accordion__body py-0">
										{children?.map((child, id) => (
											<li className="sidebar__item-child my-2">
												<a>{child}</a>
											</li>
										))}
									</Card.Body>
								</Accordion.Collapse>
							</>
						);
					})}
				</Card>
			</Accordion>
		</Wrap>
	);
}

export default SidebarTop;

const Wrap = styled.div``;
