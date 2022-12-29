import './App.css';
import Hero from './components/homeComponents/Hero/Hero';
import { TeamImg } from './components/TeamImg/TeamImg';
import img from "./img/heroImg.png"

const App = () => {
  //js kod
  return (
    <div className="App">
      <Hero />
      <TeamImg teamName="IT tim" teamDesc="Bas dobar tim" />
      <TeamImg teamName="PR tim" teamDesc="Dobri al ne kao it tim" img={img} />
      <TeamImg teamName="HR tim" teamDesc="Dobri al ne kao it tim" img={img} />
      <TeamImg teamName="CR tim" teamDesc="Bas dobar tim" img={img} />
    </div>
  );
}

export default App;
