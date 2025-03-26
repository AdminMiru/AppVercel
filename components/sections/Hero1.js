import Link from 'next/link';
import VideoPopup from '../elements/VideoPopup';

export default function Hero1() {
  return (
    <>
      <section
        className="hero-section fix hero-1 bg-cover"
        style={{ backgroundImage: 'url("assets/img/hero/hero-bg-3.jpg")' }}
      >
        {/* <div className="text-transparent">
                    <h2>Technology</h2>
                </div> */}
        {/* <div className="line-shape">
          <img src="/assets/img/hero/line-shape.png" alt="shape-img" />
        </div>
        <div className="dot-shape">
          <img src="/assets/img/hero/dot-shape.png" alt="shape-img" />
        </div>
        <div className="frame-shape">
          <img src="/assets/img/hero/frame.png" alt="shape-img" />
        </div>
        <div className="mask-shape wow fadeInRight" data-wow-delay=".7s">
          <img src="/assets/img/hero/mask-shape.png" alt="shape-img" />
        </div> */}
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8">
              <div className="hero-content">
                <h6 className="wow fadeInUp" data-wow-delay=".2s">
                  Oportunidades de desarrollo inmobiliario
                </h6>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  Optimiza tu inversión con IA: el mejor proyecto en la
                  ubicación ideal
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Toma decisiones más rápidas, informadas, rentables y
                  confiables sobre tu proyecto inmobiliario. Utilizamos
                  información precisa y actualizada para analizarla mediante
                  machine learning y ofrecerte opciones de predio y/o vocación,
                  disminuye la incertidumbre a través de un análisis comparativo
                  detallado y un presupuesto inteligente.
                </p>
                <div className="hero-button">
                  <Link
                    href="/about"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Descubre como funciona
                    <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                  <VideoPopup style={3} />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-image wow fadeInUp" data-wow-delay=".4s">
                {/* <img src="/assets/img/hero-small.jpeg" alt="hero-img" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
