export default function Contact1() {
  return (
    <>
      <section className="contact-section fix section-padding" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="arrow-shape">
              <img src="/assets/img/arrow-shape.png" alt="shape-img" />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="contact-image wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <img src="/assets/img/contact.png" alt="contact-img" />
                  <div className="cricle-shape">
                    <img src="/assets/img/circle-shape.png" alt="shape-img" />
                  </div>
                  <div className="small-cricle-shape">
                    <img src="/assets/img/choose/circle.png" alt="shape-img" />
                  </div>
                  <div className="frame-shape">
                    <img src="/assets/img/frame.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <h2 className="text-white wow fadeInUp">¡Contáctanos!</h2>
                    <h6
                      className="text-white wow fadeInUp normalize-font"
                      data-wow-delay=".3s"
                    >
                      Si necesitas resolver alguna duda o estás interesado en
                      obtener más detalles, ¡estamos aquí para ayudarte! Déjanos
                      tus datos y nos pondremos en contacto contigo para
                      proporcionarte la información que necesitas o para agendar
                      una demo.
                    </h6>
                  </div>
                  <form
                    action="#"
                    id="contact-form"
                    method="POST"
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <span>Nombre*</span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Robot fox"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <span>A qué te dedicas*</span>
                          <input
                            type="text"
                            name="job"
                            id="job"
                            placeholder="Robot fox"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <span>Correo electrónico*</span>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="info@example.com"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <span>Teléfono*</span>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="info@example.com"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt">
                          <span>Message*</span>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Write Message"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <button type="submit" className="theme-btn bg-white">
                          Enviar mensaje
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
