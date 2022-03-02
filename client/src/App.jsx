import "./App.css";
import Home from "./Pages/HomePage/Home";
import Announcement from "./Components/Announcement";
import NavBar from "./Components/NavBar";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className=" h-full">
      <Announcement />
      <NavBar />
      <Home />
      <ScrollToTop smooth viewBox="-50 0 256 256" />
    </div>
  );
}

export default App;
