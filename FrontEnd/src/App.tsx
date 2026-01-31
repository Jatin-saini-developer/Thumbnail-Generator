import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Login from "./components/Login"
import GeneratePage from "./pages/GeneratePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Generate" element={<GeneratePage />} />
                <Route path="/About" element={<AboutPage />} />


            </Routes>
            <Footer />
        </>
    );
}