import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	const [darkMode, setDarkMode] = useState(false)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
		
	}

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<div className={`${darkMode && "dark"} font-quicksand`}>
			<Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar}/>
			<Sidebar isSidebarOpen={isSidebarOpen}/>
		</div>
	);
}

export default App;
