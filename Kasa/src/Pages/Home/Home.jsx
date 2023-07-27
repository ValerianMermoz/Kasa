import Card from "./Card";
import "./Home.scss";
import Data from "../../annonces";
import Banner from "../../Composants/Banners/Banner";
import img from "../../Images/Banneraccueil.png";

function Home() {
  const Cards = Data.map((Element, index) => (
    <Card
      key={index}
      id={Element.id}
      picture={Element.cover}
      title={Element.title}
    />
  ));
  return (
    <div className="home">
      <Banner image={img} text="Chez vous, partout et ailleurs" page="Home" />
      <div className="Cardcontainer">{Cards}</div>
    </div>
  );
}

export default Home;
