import React from "react";
import { uid } from "react-uid";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { Badge } from "react-bootstrap";
import { dailyFeedInfo } from "../../appData";
import "../content.css";

function ChartFeed() {
	return (
		<section className="d-flex justify-content-between align-items-center flex-wrap col-lg my-2 p-2">
			<Graph className="flexed app col-lg-7 col-md col-sm-10 mr-4">
				<Bar
					height={400}
					width={600}
					data={{
						labels: [
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"June",
							"July",
							"Aug",
							"Sept",
							"Oct",
							"Nov",
							"Dec",
						],

						datasets: [
							{
								label: "Sales in 2020",
								data: [40, 19, 43, 57, 29, 80, 90, 44, 67, 32, 75, 89],
								backgroundColor: "#3B82EC",
								borderWidth: 1,
							},

							{
								label: "Sales in 2021",
								data: [55, 30, 29, 105, 66, 48, 39, 89, 34, 67, 43, 75],
								backgroundColor: "#f0ad4e",
							},
						],
					}}
				/>
			</Graph>
			<DailyFeed className="feed__wrapper col-lg col-md col-sm-10 d-flex flex-column p-3">
				<div className="d-flex justify-content-between align-items-center my-3 py-2">
					<h5 className="feed__title mb-0">Daily Feed</h5>
					<Badge className="bg-primary text-white p-1">Today</Badge>
				</div>
				{dailyFeedInfo.map((feed) => {
					const { imgSrc, msg, timeBelow, detail, timeBadge } = feed;
					return (
						<div className="feed__container d-flex justify-content-center my-2 py-2 px-2">
							<div className="feed__image-container">
								<img
									src={imgSrc}
									alt=""
									width="36"
									height="36"
									className="feed__image mr-2"
									key={uid(msg)}
								/>
							</div>
							<div>
								<p className="feed__msg mb-1">
									{msg}
									<small className="feed__time-below">{timeBelow}</small>
								</p>
								{detail && <p className="feed__detail p-2">{detail}</p>}
							</div>
							<div className="badge__container ml-auto">
								<Badge className="feed__time-badge">{timeBadge}</Badge>
							</div>
						</div>
					);
				})}
				<btn className="mb-0 btn w-100 btn-primary text-center text-white">
					Load More
				</btn>
			</DailyFeed>
		</section>
	);
}

export default ChartFeed;

const Graph = styled.div`
	background: #fff;
	min-height: 500px;
	max-height: 500px;
`;

const DailyFeed = styled.div`
	background: #fff;
`;
