import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content" >
                <div className="footer-col col-1">
                    <h4 className="White">A</h4>
                    <ul>
                        <li>about us</li>
                        <li>our services</li>
                        <li>privacy policy</li>
                        <li>affiliate program</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="White">B</h4>
                    <ul>
                        <li>about us</li>
                        <li>our services</li>
                        <li>privacy policy</li>
                        <li>affiliate program</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="White">C</h4>
                    <ul>
                        <li>about us</li>
                        <li>our services</li>
                        <li>privacy policy</li>
                        <li>affiliate program</li>
                    </ul>
                </div>
            
            
                <div className="footer-col">
                    <h4 className="White">Follow us </h4>
                    <div className="social__links">
                        <FacebookIcon className="social__link" />
                        <TwitterIcon className="social__link"/>
                        <InstagramIcon className="social__link"/>
                        <LinkedInIcon className="social__link"/>
                    </div>             

                </div>

            </div>          
                           
  </div>
    )
};

export default Footer;