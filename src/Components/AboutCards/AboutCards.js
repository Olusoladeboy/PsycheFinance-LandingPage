import '../../Styles/AboutCards.css'
const AboutCards = ({img, stroke, header, about}) =>{
    return(
        <>
        <div className="card-container">
            <div className="card-content">
                <img src={img} alt={img} />
                <h3>{header}</h3>
                <p>{about}</p>
            </div>
            <div className="stroke">
                {stroke}
            </div>
        </div>
        </>
    )
}

export default AboutCards;