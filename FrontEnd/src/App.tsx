import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Login from "./components/Login";
import GeneratePage from "./pages/GeneratePage";
import AboutPage from "./pages/AboutPage";
import MyGeneration from "./pages/MyGeneration";
import TrialPage from "./pages/TrialPage";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser} from "./Redux/slices/authSlice";
import type { AppDispatch } from "./Redux/store";
import PrivacyPage from "./pages/PrivacyPage";
import TermsServicePage from "./pages/TermsServicePage";

export default function App() {
  const API_BASE_URL =
    import.meta.env.VITE_API_URL ||
    "https://thumbnail-generator-hdh4.onrender.com";

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/profile`, {
          withCredentials: true,
        });
        dispatch(setUser(res?.data?.user ?? null));
      } catch {
        dispatch(setUser(null));
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Generate" element={<GeneratePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/myGeneration" element={<MyGeneration />} />
        <Route path="/trial" element={<TrialPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsServicePage />} />

      </Routes>
      <Footer />
    </>
  );
}
