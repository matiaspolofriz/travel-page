import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import travel_04 from "./assets/travel-04.jpg";
import travel_05 from "./assets/travel-05.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Inicio" },
    { url: "#", title: "Viajes" },
    { url: "#", title: "Imagenes" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"COLISEO ROMANO"}
        subtitle={
          "Historia pura, en el estadio mas antiguo del mundo. Controversias por lo que sucedia, recuerdos vivientes a traves de esta estructura"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"CUIDAD DEL VATICANO"}
        subtitle={
          "Un estado independiente, con mucha historia situado en el corazon de Roma. La representacion del catolisismo en la tierra"
        }
        flipped={true}
      />
      <Slider
        imageSrc={travel_04}
        title={"PANTEON"}
        subtitle={
          "Arquitectura antigua que sigue deslumbrando, historia como cada rincon de Roma"
        }
      />
      <Slider
        imageSrc={travel_05}
        title={"FONTANA DI TREVI"}
        subtitle={
          "Impactante primera impresion, y siendo la segunda vez en verla volvio a impactarme, hermosa por donde se la mire."
        }
        flipped={true}
      />
    </div>
  );
}

export default App;
