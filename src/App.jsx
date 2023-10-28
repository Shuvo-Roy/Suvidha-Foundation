import AboutSection from "./components/AboutSection";
import Carousel from "./components/Carousel";
import Events from "./components/Events";
import HelpHand from "./components/HelpHand";
import NavMenu from "./components/NavBar/NavMenu";


function App() {
  return <div className="font-quicksand">
    <NavMenu/>
    <Carousel/>
    <AboutSection/>
    <HelpHand/>
    <Events/>
  </div>;
}

export default App;
