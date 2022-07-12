import { Component } from "react";
import hero_img from './../assets/images/hero-img.png';
import './../assets/style/header.css';

class HeroSection extends Component {
  render() {
    return (
      
        <section id="hero" class="hero d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up" class="aos-init aos-animate">We offer modern solutions for growing your business</h1>
          <h2 data-aos="fade-up" data-aos-delay="400" class="aos-init aos-animate">We are team of talented designers making websites with Bootstrap</h2>
          <div data-aos="fade-up" data-aos-delay="600" class="aos-init aos-animate">
            <div class="text-center text-lg-start">
              <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Get Started</span>
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 hero-img aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
          <img src={hero_img} class="img-fluid" alt=""></img>
        </div>
      </div>
    </div>

  </section>
    );
  
    }
    }
export default HeroSection;