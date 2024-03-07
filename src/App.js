import "./App.css";
import AboutSection from "./components/AboutSection";
import AppNavBar from "./components/AppNavBar";
import ContactForm from "./components/ContactForm";
import { HeroSection } from "./components/HeroSection";
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <>
            <AppNavBar />
            <HeroSection />
            <AboutSection />
            <Portfolio />
            <ContactForm />
        </>
    );
}

export default App;
