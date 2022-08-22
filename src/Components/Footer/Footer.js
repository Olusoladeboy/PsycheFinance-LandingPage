import '../../Styles/Footer.css';

const Footer = () =>{
    return(
        <>
        <div className="footer-container">
            <div className="footer-content">
                <div>
                    <img src="images/psycheLogo.svg" />
                    <p>Psyche Finance, Inc. is a financial technology company and is <br/> not a bank. </p>
                </div>
                <div>
                    <h3>Company</h3>
                    <div>
                        <p>8502 Preston Rd. Inglewood, Maine 98380</p>
                        <p>+234 903 742 4764</p>
                    </div>
                </div>  
            </div>
            <p className='center'> &copy; 2022 Psyche. All rights reserved</p>
        </div>
        </>
    )
}

export default Footer