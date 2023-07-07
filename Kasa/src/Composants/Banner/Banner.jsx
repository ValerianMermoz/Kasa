import Img from '../../Images/Banneraccueil.png';

function Banner({}) {
    return (
    <div className='Bannerconteneur'>
    <img src={Img} className='Banner' alt="Banner"/>
    <div className='texte'>
        <h3>Chez vous, partout et ailleurs</h3>
    </div>
    </div>
)
}

export default Banner ;