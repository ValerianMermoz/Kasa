import Card from "./Card";
import "./Home.scss";
import Data from "../../annonces";
import Banner from "../../Composants/Banners/Banner";
import "../../Composants/Banners/Banner.scss";

function Home() {
  const Cards = Data.map((Élement) => <Card />);
  return (
    <div>
      <Banner image="../../Images/Banneraccueil.png" text="Chez vous, partout et ailleurs"/>
      <div className="Cardcontainer">{Cards}</div>
    </div>
  );
}

export default Home;
