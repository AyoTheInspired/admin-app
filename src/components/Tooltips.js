import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";

function Tooltips() {
	return (
		<Container>
			<Row>
				<Wrap className="col-6  flexed mx-auto my-5">
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
									label: "Sea",
									data: [12, 19, 3, 5, 2, 3, 90],
									backgroundColor: [
										"green",
										"rgba(255, 99, 132, 0.2)",
										"rgba(54, 162, 235, 0.2)",
										"rgba(255, 206, 86, 0.2)",
										"rgba(75, 192, 192, 0.2)",
										"rgba(153, 102, 255, 0.2)",
										"rgba(255, 159, 64, 0.2)",
									],
									// borderColor: [
									// 	"rgba(255, 99, 132, 1)",
									// 	"rgba(54, 162, 235, 1)",
									// 	"rgba(255, 206, 86, 1)",
									// 	"rgba(75, 192, 192, 1)",
									// 	"rgba(153, 102, 255, 1)",
									// 	"rgba(255, 159, 64, 1)",
									// ],
									borderWidth: 1,
								},

								{
									label: "Triumph",
									data: [3, 5, 22, 6, 24, 9, 9, 2],
									backgroundColor: "red",
								},
							],
						}}
						options={
							{
								// maintainAspectRatio: false,
							}
						}
					/>
					{/* <h5 className="mb-0">HELLO WORLD</h5> */}
				</Wrap>
			</Row>
		</Container>
	);
}

export default Tooltips;

const Wrap = styled.div`
	/* min-height: 400px; */
`;
