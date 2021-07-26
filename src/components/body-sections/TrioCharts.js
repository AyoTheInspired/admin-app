import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Table } from "react-bootstrap";
import { GrStatusGoodSmall } from "react-icons/gr";
import { weeklySalesData, scheduleInfo } from "../../appData";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

function TrioCharts() {
	return (
		<section className="d-flex justify-content-between flex-wrap col-lg my-2 p-2">
			<WeeklySales className="weeklySales__container my-2 col-lg d-flex flex-column  align-items-center">
				<div className="chart__header text-white d-flex justify-content-between col p-2 text-dark">
					<p className="mb-0 chart__header-left">Weekly Sales</p>
					<h5 className="mb-0 chart__header-right">...</h5>
				</div>
				<div className="doughnut__wrap flexed">
					<Doughnut
						data={{
							datasets: [
								{
									label: "# of votes",
									data: [19, 12, 7, 5],
									backgroundColor: [
										// "green",
										"#3B82EC",
										"#f0ad4e",
										"#d9534f",
										"lightgray",
									],
								},
							],
						}}
					/>
				</div>
				<div className="sales__table-wrap mt-3 w-100 text-center">
					<Table striped hover>
						<thead>
							<tr>
								<th>Source</th>
								<th>Revenue</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							{weeklySalesData.map((sale) => {
								const { statusColor, source, revenue, value } = sale;
								return (
									<tr className="sale__wrap">
										<td className="sale__source ">
											<span
												className={`${statusColor} sale__status inline mr-2 ml-0 mb-2`}>
												<GrStatusGoodSmall />
											</span>
											{source}
										</td>
										<td className="sale__revenue"> {revenue} </td>
										<td className="sale__value text-success"> {value} </td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</div>
			</WeeklySales>
			<CalWrap className="calendar__container my-2 p-2 col-lg d-flex flex-column justify-content-between mx-4">
				<div className="chart__header d-flex justify-content-between align-items-center text-white p-2  text-dark">
					<p className="mb-0 chart__header-left">Calendar</p>
					<h5 className="mb-0 chart__header-right">...</h5>
				</div>
				<div className="mx-auto mb-auto mt-auto">
					<CalendarComponent />
				</div>
			</CalWrap>
			<Appointments className="appointments__container my-2 p-2 col-lg d-flex flex-column justify-content-between align-items-center col-lg">
				<div className="chart__header text-white d-flex justify-content-between col p-2 text-dark">
					<p className="mb-0 chart__header-left">Appointments</p>
					<h5 className="mb-0 chart__header-right">...</h5>
				</div>
				<div className="notification__wrap p-2 mb-2 d-flex flex-column">
					<h2 className="notification__msg">You have a meeting today!</h2>
					<p className="notification__detail">
						Your next meeting is in 2 hours. Check your
						<a href="#" className="notification__link">
							{" "}
							schedule{" "}
						</a>{" "}
						to see the details.
					</p>
				</div>

				{scheduleInfo.map((schedule) => {
					const { scheduleTitle, scheduleTime, scheduleDetail } = schedule;
					return (
						<div className="schedule__container d-flex flex-column px-3 py-1 my-2">
							<div className="schedule__top d-flex justify-content-between">
								<div className="schedule__left">
									<strong>{scheduleTitle}</strong>
								</div>
								<div className="schedule__right"> {scheduleTime} </div>
							</div>

							<div className="schedule__bottom">
								<p className="schedule__detail">{scheduleDetail}</p>
							</div>
						</div>
					);
				})}
			</Appointments>
		</section>
	);
}

export default TrioCharts;

const CalWrap = styled.div`
	background: #d9d9d9;
`;

const WeeklySales = styled.div`
	background: #fff;
`;

const Appointments = styled.div`
	background: #fff;
`;
