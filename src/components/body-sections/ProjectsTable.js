import React from "react";
import styled from "styled-components";
import { Table, Badge } from "react-bootstrap";
import { projectsInfo } from "../../appData";

function ProjectsTable() {
	return (
		// <div>
		<section className="flexed col my-2 p-2">
			<ProjectsWrap className="col mx-auto">
				<div className="chart__header text-white d-flex justify-content-between col p-2 text-dark">
					<p className="mb-0 chart__header-left">Latest Projects</p>
					<h5 className="mb-0 chart__header-right">...</h5>
				</div>
				<Table striped hover className="mt-4">
					<thead>
						<tr>
							<th className="projects__table-title">Name</th>
							<th className="projects__table-title">Start Date</th>
							<th className="projects__table-title">End Date</th>
							<th className="projects__table-title">Status</th>
							<th className="projects__table-title">Assignee</th>
						</tr>
					</thead>
					<tbody>
						{projectsInfo.map((info) => {
							const {
								title,
								startDate,
								endDate,
								status,
								statusColor,
								assignee,
							} = info;
							return (
								<tr>
									<td className="project__title"> {title} </td>
									<td className="project__startDate"> {startDate} </td>
									<td className="project__endDate"> {endDate} </td>
									<td className="project__status text-white">
										<Badge variant={statusColor}>{status}</Badge>
									</td>
									<td className="project__assignee"> {assignee} </td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</ProjectsWrap>
		</section>
		// </div>
	);
}

export default ProjectsTable;

const ProjectsWrap = styled.div`
	background: #fff;
`;
