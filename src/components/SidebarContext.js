import React, { useState, createContext } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = (props) => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [appData, setAppData] = useState({
		sidebarOpen: false,
		sideItemClicked: false,
		staticHeader: "Here's a static Header",
		staticContent:
			"... And some static content... select a sidebar item to see dynamic changes.",
	});
	return (
		<SidebarContext.Provider
			value={([showSidebar, setShowSidebar], [appData, setAppData])}>
			{props.children}
		</SidebarContext.Provider>
	);
};
