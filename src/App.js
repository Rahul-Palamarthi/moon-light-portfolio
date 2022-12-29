import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Passion from "./Pages/Passion";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <main>
                <Home />
                <AboutMe />
                <Passion />
                <Skills />
                <Works />
                <ContactUs />
            </main>
            <Footer />
        </>
    );
}

export default App;
