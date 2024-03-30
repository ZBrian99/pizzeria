import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./routes/HomePage";
import { MenuPage } from "./routes/MenuPage";
import { NewsPage } from "./routes/NewsPage";
import { ServicesPage } from "./routes/ServicesPage";
import { AboutUsPage } from "./routes/AboutUsPage";
import { ContactPage } from "./routes/ContactPage";
import { Footer } from "./components/Footer";

export const App = () => {

  return (
    <Router>
      <NavBar/>
      <div className="MainContainer">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </div>
    <Footer />

    </Router>
  );
};
