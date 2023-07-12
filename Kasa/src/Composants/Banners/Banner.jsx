

const Banner = ({image, text}) => {
  return (
  <div className="Bannerconteneur">
  <img src={image} alt=""/>
  <h2>{text}</h2>
  </div>
)}



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
