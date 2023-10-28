import AboutSection from "./components/AboutSection";
import Carousel from "./components/Carousel";
import Collaborate from "./components/Collaborate";
import Events from "./components/Events";
import HelpHand from "./components/HelpHand";
import NavMenu from "./components/NavBar/NavMenu";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";


function App() {
  return <div className="font-quicksand">
    <NavMenu/>
    <Carousel/>
    <AboutSection/>
    <HelpHand/>
    <Events/>
    <Testimonial/>
    <Team/>
    <Collaborate/>
  </div>;
}

export default App;
