
import { Routes, Route } from "react-router-dom"; // ✅ correct package
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Services from './pages/Services';

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/booking" element={<Booking />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<Services />} />
			</Routes>
		</div>
	);
}
