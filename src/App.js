import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Skills from "./skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
return (
    <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        <Footer />        
    </div>
);
}
export default App;