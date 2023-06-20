import './App.css';
import travel_01 from "./assets/travel-01.jpeg"
import travel_02 from "./assets/travel-02.jpeg"
import travel_03 from "./assets/samurai.png"
import travel_04 from "./assets/travel-04.jpg"
import travel_05 from "./assets/travel-05.jpg"
import Hero from "./component/Hero"
import Slider from "./component/Slider"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Contact from "./component/Contact";

function App() {
    const navbarLinks = [
        { url: "#", title: "На главную" },
        { url: "#", title: "Города" },
        { url: "#", title: "Впечатления" },
    ];

  return <div className={"App"}>
      <Navbar navbarLinks={navbarLinks} />
    <Hero imageSrc={travel_02}/>
    <Slider
        imageSrc={travel_01}
        title={"Будь исследователем!"}
        subtitle={
          "Здесь вы сможете прочуствовать весь колорит прекрасной Японии"
        }
    />
    <Slider
      imageSrc={travel_03}
      title={"Окунись в колорит Японии!"}
      subtitle={
          "Загадочные гейши и отважные самураи"
      }
      flipped={true}
    />
    <Slider
      imageSrc={travel_05}
      title={"Обворожительная природа!"}
      subtitle={
          "Высокие горы и прекрасные сакуры"
      }
    />
    <Slider
        imageSrc={travel_04}
        title={"Воспоминания на всю жизнь!"}
        subtitle={"Отдых вашей мечты всего в паре кликов"}
        flipped={true}
    />
      <Contact />
    <Footer />
  </div>
}

export default App;
