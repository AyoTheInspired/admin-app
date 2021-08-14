import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useStateValue } from "./global-state/StateProvider";
import { FaUserLock } from "react-icons/fa";
import { actionTypes } from "./global-state/reducer";
import { auth, provider } from "../components/firebase";

function Login() {
	const [{ user }, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					payload: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<StyledContainer fluid>
			<Row>
				<div className="col mx-auto">
					<div className="login__container">
						<FaUserLock className="login__icon" />

						<div className="login__text mb-3">
							<h1 className="mb-2 login__main">Hello Admin,</h1>

							{/* <h5 className="login__add mb-0">Please Sign In below</h5> */}
						</div>

						<Button className="btn-success" onClick={signIn}>
							Sign In with Google
						</Button>
					</div>
				</div>
			</Row>
		</StyledContainer>
	);
}

export default Login;

const StyledContainer = styled(Container)`
	background-color: #f8f8f8;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;

	.login__container {
		padding: 100px;
		text-align: center;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.12), 0 1px;
	}

	.login__main {
		letter-spacing: 0.5px;
	}

	.login__icon {
		font-size: 50px;
		color: #0a8d48;
	}

	.login__container > img {
		object-fit: contain;
		height: 100px;
		margin-bottom: 40px;
	}

	.login__container > button {
		color: #fff;
	}
`;
