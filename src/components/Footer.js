import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
	return (
		<Container fluid className="mt-4">
			<Row>
				<Wrap className="py-4 col mx-auto d-flex justify-content-between align-items-center flex-wrap">
					<div className="footer__left-wrap mx-auto flexed col-lg-7 col-md-6 col-sm-10">
						{" "}
						<h6 className="mb-0 footer__left-item mr-3">Support</h6>
						<h6 className="mb-0 footer__left-item mr-3">Help Center</h6>
						<h6 className="mb-0 footer__left-item mr-3">Privacy</h6>
						<h6 className="mb-0 footer__left-item">Terms of Service</h6>
					</div>
					<div className="footer__right-wrap mx-auto flexed col-lg-3 col-md-5 col-sm-10">
						<span className="copyright-container mr-2 ">
							<FaRegCopyright />
						</span>
						<h5 className="mb-0 footer__right-text">
							{" "}
							{new Date().getFullYear()} - Ayo TheInspired{" "}
						</h5>
					</div>
				</Wrap>
			</Row>
		</Container>
	);
}

export default Footer;

const Wrap = styled.div`
	background: #fff;
	& .footer__right-wrap,
	.footer__left-item,
	.footer__right-text {
		font-size: 14px;
		color: #495057;
		font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
			"Helvetica Neue", Arial, sans-serif;
		white-space: nowrap;
	}

	.footer__left-wrap {
		@media (max-width: 768px) {
			margin-bottom: 15px;
		}
	}

	.footer__left-item {
		cursor: pointer;
		transition: var(--sht-trans);
		&:hover {
			transform: scale(1.03);
			color: #000;
		}
	}
`;
