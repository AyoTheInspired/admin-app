import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SidebarProvider } from "./components/SidebarContext";
import { useStateValue } from "./components/global-state/StateProvider";
import Login from "./components/Login";

import Home from "./Home";

function App() {
	const [{ user }, dispatch] = useStateValue();

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
