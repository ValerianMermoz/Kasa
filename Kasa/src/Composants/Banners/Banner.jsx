import "../../Composants/Banners/Banner.scss";

const Banner = ({ image, text, page }) => {
  return (
    <div className="Bannerimg">
      <img src={image} alt="" className={page === "Home" ? "Bannerimage" : "Bannerlarge"}/>
      <div className="texte">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
