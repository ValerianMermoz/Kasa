import Card from "./Card";
import "./Home.scss";
import Banner from "../../Composants/Banners/Banner";
import Data from "../../annonces";

function Home() {
  const Cards = Data.map((Élement) => <Card />);
  return (
    <div>
      <Banner title={"Chez vous, partout et ailleurs"} />
      <div className="Cardcontainer">{Cards}</div>
    </div>
  );
}

export default Home;
