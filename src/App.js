import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SidebarProvider } from "./components/SidebarContext";

import Home from "./Home";

function App() {
	return (
		<SidebarProvider>
			<div className="App">
				<Home />
			</div>
		</SidebarProvider>
	);
}

export default App;
