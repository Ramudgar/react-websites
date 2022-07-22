import { Component } from "react";
import '../../assets/style/footer.css';
class Footer extends Component {
  render() {
    return (
        <footer className="container bottom mt-5">
        <div className="row ">
            <div className="col-sm-6 col-md-4 footer-navigation justify-content-center">
                <h3><a href="#">BBB<span>ootstrap</span></a></h3>
                <p className="links"><a href="#">Home</a><strong> &middot; </strong><a href="#">Blog</a><strong> &middot; </strong><a href="#">Pricing</a><strong> &middot; </strong><a href="#">About</a><strong> &middot; </strong><a href="#">Faq</a><strong> &middot; </strong><a href="#">Contact</a></p>
                <p className="company-name">BBBOOTSTRAP.COM &copy; 2020</p>
            </div>
            <div className="col-sm-6 col-md-4 footer-contacts">
                <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
                    <p><span className="new-line-span text-dark fw-bold">21 Revolution Street</span>NY, USA</p>
                </div>
                <div><i className="fa fa-phone footer-contacts-icon"></i>
                    <p className="footer-center-info email "> +1 9485045958</p>
                </div>
                <div><i className="fa fa-envelope footer-contacts-icon"></i>
                    <p> <a href="#" target="_blank">support@bbbootstrap.com</a></p>
                </div>
            </div>
            <div className=" col-md-4 footer-about">
                <h4>About the company</h4>
                <p>startx is one of the leading website for bootstrap snippets.</p>
                <div class="social-links social-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
            </div>
        </div>
    </footer>
    );
  }
}
export default Footer;
                