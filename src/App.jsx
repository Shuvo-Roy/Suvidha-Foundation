import AboutSection from "./components/AboutSection";
import Carousel from "./components/Carousel";
import HelpHand from "./components/HelpHand";
import NavMenu from "./components/NavBar/NavMenu";


function App() {
  return <div className="font-quicksand">
    <NavMenu/>
    <Carousel/>
    <AboutSection/>
    <HelpHand/>
  </div>;
}

export default App;
