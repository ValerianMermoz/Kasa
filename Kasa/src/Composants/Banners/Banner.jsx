import "../../Composants/Banners/Banner.scss";

const Banner = ({ image, text, page }) => {
  return (
    <div className={page == "Home" ? "Bannerimg" : "Bannerlarge"}>
      <img src={image} alt="" className="Bannerimage"/>
      <div className="texte">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

// { <Banner text="chez ...." image="../../Images/Banneraccueil.png" page="Home"/>;}

// function Banner({ image, text, page }) {
//   return (
//     <div className={page == "Home" ? "Bannerconteneur" : "Bannerconteneur large"} >
//       <img className={image == "../../Images/Banneraccueil.png" ? "" : ""}></img>
//       <div className={text == "chez ...." ? "text" : ""} >
//       </div>
//     </div>
//   );
// }

export default Banner;
