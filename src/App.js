import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SidebarProvider } from "./components/SidebarContext";
import { useStateValue } from "./components/global-state/StateProvider";
import Login from "./components/Login";

import Home from "./Home";
// import { useEffect } from "react";
// import { auth } from "./components/firebase";
// import { actionTypes } from "./components/global-state/reducer";

function App() {
	const [{ user }] = useStateValue();

	// useEffect(() => {
	// 	auth.onAuthStateChanged((userAuth) => {
	// 		// if (userAuth) {
	// 		// 	dispatch({
	// 		// 		type: actionTypes.SET_USER,
	// 		// 		payload: userAuth,
	// 		// 	});
	// 		// } else {
	// 		// 	return;
	// 		// }
	// 	});
	// });

	return (
		<div className="App">
			{!user ? (
				<Login />
			) : (
				<SidebarProvider>
					<Home />
				</SidebarProvider>
			)}
		</div>
	);
}

export default App;
