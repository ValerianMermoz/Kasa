import "./Banner.scss";

{ <Banner text="chez ...." image="../../Images/Banneraccueil.png" page="Home"/>;}

function Banner({ image, text, page }) {
  return (
    <div className={page == "Home" ? "Bannerconteneur" : "Bannerconteneur large"} >
      <img className={image == "../../Images/Banneraccueil.png" ? "" : ""}></img>
      <div className={text == "chez ...." ? "texte" : ""} >
      </div>
    </div>
  );
}

export default Banner;
