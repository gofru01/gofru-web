import React from 'react'
import Layout from '../components/layout'


export default class IndexPage extends React.Component {
    render() {
        return (
            <Layout>

{/* {<!-- ======= Hero Section ======= public/assets -->} */}
  <section id="hero">
    <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
      <h1>Plan. Launch. Grow.</h1>
      <h2>We are team of talanted designers making websites with Bootstrap</h2>
      <div className="d-flex">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i className="icofont-play-alt-2"></i></a>
      </div>
    </div>
  </section>
  {/* <!-- End Hero --> */}

  <main id="main">

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row justify-content-end">
          <div className="col-lg-11">
            <div className="row justify-content-end">

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-simple-smile"></i>
                  <span data-toggle="counter-up">65</span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-document-folder"></i>
                  <span data-toggle="counter-up">85</span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-clock-time"></i>
                  <span data-toggle="counter-up">12</span>
                  <p>Years of experience</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-award"></i>
                  <span data-toggle="counter-up">15</span>
                  <p>Awards</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6 video-box align-self-baseline" data-aos="zoom-in" data-aos-delay="100">
            <img src="public/assets/img/about.jpg" className="img-fluid" alt="" />
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div className="col-lg-6 pt-3 pt-lg-0 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bx bx-check-double"></i> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
              <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= About Boxes Section ======= --> */}
    <section id="about-boxes" className="about-boxes">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <img src="public/assets/img/about-boxes-1.jpg" className="card-img-top" alt="..." />
              <div className="card-icon">
                <i className="ri-brush-4-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Our Mission</a></h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <img src="public/assets/img/about-boxes-2.jpg" className="card-img-top" alt="..."/>
              <div className="card-icon">
                <i className="ri-calendar-check-line"></i> 
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Our Plan</a></h5>
                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <img src="public/assets/img/about-boxes-3.jpg" className="card-img-top" alt="..."/>
              <div className="card-icon">
                <i className="ri-movie-2-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Our Vision</a></h5>
                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Boxes Section --> */}

    {/* <!-- ======= Clients Section ======= --> */}
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">

        <div className="row">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="public/assets/img/clients/client-1.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="public/assets/img/clients/client-2.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="public/assets/img/clients/client-3.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="public/assets/img/clients/client-4.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="public/assets/img/clients/client-5.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="public/assets/img/clients/client-6.png" className="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Clients Section --> */}

    {/* <!-- ======= Features Section ======= --> */}
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <ul className="nav nav-tabs row d-flex">
          <li className="nav-item col-3">
            <a className="nav-link active show" data-toggle="tab" href="#tab-1">
              <i className="ri-gps-line"></i>
              <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-toggle="tab" href="#tab-2">
              <i className="ri-body-scan-line"></i>
              <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-toggle="tab" href="#tab-3">
              <i className="ri-sun-line"></i>
              <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-toggle="tab" href="#tab-4">
              <i className="ri-store-line"></i>
              <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="public/assets/img/features-1.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="public/assets/img/features-2.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                </ul>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="public/assets/img/features-3.png" alt="" className="img-fluid"  />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="public/assets/img/features-4.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Features Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-6">
            <div className="icon-box">
              <i className="icofont-computer"></i>
              <h4><a href="#">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="icofont-chart-bar-graph"></i>
              <h4><a href="#">Dolor Sitema</a></h4>
              <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="icofont-image"></i>
              <h4><a href="#">Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="icofont-settings"></i>
              <h4><a href="#">Nemo Enim</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="icofont-earth"></i>
              <h4><a href="#">Magni Dolore</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="icofont-tasks-alt"></i>
              <h4><a href="#">Eiusmod Tempor</a></h4>
              <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Testimonials Section ======= --> */}
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">

        <div className="owl-carousel testimonials-carousel">

          <div className="testimonial-item">
            <img src="public/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="public/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="public/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="public/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="public/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>
``
        </div>

      </div>
    </section>
    {/* <!-- End Testimonials Section -->

    <!-- ======= Portfolio Section ======= --> */}
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="public/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="public/assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="public/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="public/assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="public/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="public/assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="public/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="public/assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="public/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="public/assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="public/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="public/assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="public/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="public/assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="public/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="public/assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="public/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="public/assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Portfolio Section --> */}

    {/* <!-- ======= Team Section ======= --> */}
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="pic"><img src="public/assets/img/team/team-1.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <div className="pic"><img src="public/assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="pic"><img src="public/assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    
    {/* <!-- End Team Section -->

    <!-- ======= Contact Section ======= --> */}

    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>


      <div className="row">

        <div className="col-lg-6">

          <div className="row">
            <div className="col-md-12">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box mt-4">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>info@example.com<br/>contact@example.com</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box mt-4">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
              </div>
            </div>
          </div>

        </div>

        <div className="col-lg-6 mt-4 mt-lg-0">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="form-row">
              <div className="col-md-5 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="col-md-5 form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

      </div>
    </section>
 

  </main>
 


        </Layout>

        )
    }
}
