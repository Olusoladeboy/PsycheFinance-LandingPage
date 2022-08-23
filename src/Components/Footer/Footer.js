import '../../Styles/Footer.css';

const Footer = () =>{
    return(
        <>
        <div className="footer-container">
            <div className="">
                <div>
                    <img src="images/psycheLogo.svg" />
                    <p>Psyche Finance, Inc. is a financial technology company and is <br/> not a bank. </p>
                </div>
            </div>
            <div className='footer-content'>
               <p className='copyright'> &copy; 2022 Psyche. All rights reserved</p>
               <div>
                   <a href='#'><img src='images/linkedin.svg' alt='linkedin' /></a>
                   <a href='#'><img src='images/twitter.svg' alt='twitter' /></a>
                   <a href='#'><img src='images/facebook.svg' alt='facebook' /></a>
               </div>
            </div>
        </div>
        </>
    )
}

export default Footer