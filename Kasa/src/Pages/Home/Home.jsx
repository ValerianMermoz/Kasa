import "./Home.scss";


function Home() {
  return (
  <div className="Cardcontainer">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>)
}

function Card() {
  return (
    <div className="Card">
      <h2>Titre de la location</h2>
    </div>
  )
}
  
  export default Home