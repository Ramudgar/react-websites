import "aos/dist/aos.css";
import { Component } from "react";
import employee from './../assets/images/employee.webp';
import hero_img from './../assets/images/hero-img.png';
import investor from './../assets/images/investor.jpg';
import startup from './../assets/images/startup.jpg';
import team1 from './../assets/images/team-1.jpg';
import team2 from './../assets/images/team-2.jpg';
import team3 from './../assets/images/team-3.jpg';
import team4 from './../assets/images/team-4.jpg';
import './../assets/style/header.css';



class HeroSection extends Component {

  render() {
    return (
      <>
      
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

   {/* about section */}

  <section id="about" class="about">

      <div class="container ">
        <div class="row gx-0">

          <div class="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="content">
              <h3>Who We Are</h3>
              <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
              <p>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
              </p>
              <div class="text-center text-lg-start">
                <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div id="carouselExampleDark" class="carousel carousel-dark slide col-md-6" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={startup} class="d-block " alt="..."></img>
     
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={employee} class="d-block" alt="..."></img>

    </div>
    <div class="carousel-item">
      <img src={investor} class="d-block" alt="..."></img>
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>

    </section>

    <section id="team" class="team text-center">

<div class="container aos-init aos-animate" data-aos="fade-up">

  <header class="section-header">
    <h2>Team</h2>
    <p>Our hard working team</p>
  </header>

  <div class="row gy-4">

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate " data-aos="fade-up" data-aos-delay="100">
      <div class="member">
        <div class="member-img">
          <img src={team1} class="img-fluid" alt=""></img>
         
        </div>
        <div class="member-info ">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
          <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate " data-aos="fade-up" data-aos-delay="200">
      <div class="member">
        <div class="member-img">
          <img src={team2} class="img-fluid" alt=""></img>
          
        </div>
        <div class="member-info ">
          <h4>Sarah Jhonson</h4>
          <span>Product Manager</span>
          <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
      <div class="member">
        <div class="member-img">
          <img src={team3} class="img-fluid" alt=""></img>
         
        </div>
        <div class="member-info ">
          <h4>William Anderson</h4>
          <span>CTO</span>
          <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate " data-aos="fade-up" data-aos-delay="400">
      <div class="member">
        <div class="member-img">
          <img src={team4}class="img-fluid" alt=""></img>
         
        </div>
        <div class="member-info ">
          <h4>Amanda Jepson</h4>
          <span>Accountant</span>
          <p>Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.</p>
        </div>
      </div>
    </div>

  </div>

</div>

</section>







</>


    );
  
    }
    }
export default HeroSection;