import React from 'react'
import Layout from '../../components/layout'




export default class AboutPage extends React.Component {
    render() {
        return (
<Layout>

    
  <main id="main">

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title" style={{paddingTop:"35px"}}>
          <h2>About Us</h2>
          <p>Who We Are</p>
        </div>

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
            <img src="static/assets/template/dewi/assets/assets/img/about.jpg" className="img-fluid" alt=""/>
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
              <img src="assets/img/about-boxes-1.jpg" className="card-img-top" alt="..."/>
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
              <img src="assets/img/about-boxes-2.jpg" className="card-img-top" alt="..."/>
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
              <img src="assets/img/about-boxes-3.jpg" className="card-img-top" alt="..."/>
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
            <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
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
                <img src="assets/img/features-1.png" alt="" className="img-fluid"/>
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
                <img src="assets/img/features-2.png" alt="" className="img-fluid"/>
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
                <img src="assets/img/features-3.png" alt="" className="img-fluid"/>
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
                <img src="assets/img/features-4.png" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Features Section --> */}

  </main>
  {/* <!-- End #main --> */}


</Layout>

        )
    }
}
