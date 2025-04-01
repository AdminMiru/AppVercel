"use client";
import { useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact1() {
  const [formData, setFormData] = useState({
    name: '',
    job: '',
    email: '',
    phone: '',
    state: '',
    newsletter: false,
    information: false,
    reports: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Validate form
      if (!formData.name || !formData.job || !formData.email || !formData.phone || !formData.state) {
        throw new Error('Por favor completa todos los campos requeridos.');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Por favor ingresa un correo electrónico válido.');
      }

      // Save to Firestore
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp()
      });

      // Reset form
      setFormData({
        name: '',
        job: '',
        email: '',
        phone: '',
        state: '',
        newsletter: false,
        information: false,
        reports: false
      });

      setSubmitStatus({
        type: 'success',
        message: '¡Gracias! Tu mensaje ha sido enviado correctamente.'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Ha ocurrido un error. Por favor intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-section fix section-padding" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            {/* <div className="arrow-shape">
              <img src="/assets/img/arrow.png" alt="shape-img" />
            </div> */}
            <div className="row">
              {/* <div className="col-lg-">
                <div className="contact-image wow fadeInUp" data-wow-delay=".4s">
                  <img src="/assets/img/contact-us.jpg" alt="contact-img" /> 
                  <div className="cricle-shape">
                    <img src="/assets/img/circle-shape.png" alt="shape-img" />
                  </div> 
                  <div className="small-cricle-shape">
                    <img src="/assets/img/choose/circle.png" alt="shape-img" />
                  </div> 
                   <div className="frame-shape">
                    <img src="/assets/img/contact-us.jpg" alt="img" />
                  </div>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="contact-content">
                  <div className="section-title">
                    <h2 className="text-white wow fadeInUp">¡Contáctanos!</h2>
                    <h6 className="text-white wow fadeInUp normalize-font" data-wow-delay=".3s">
                      Si necesitas resolver alguna duda o estás interesado en obtener más detalles, ¡estamos aquí para ayudarte!
                      Déjanos tus datos y nos pondremos en contacto contigo para proporcionarte la información que necesitas o para agendar una demo.
                    </h6>
                  </div>
                  <form id="contact-form" className="contact-form-items" onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <span>Nombre*</span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Ej. Ricardo Rodriguez"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <span>A qué te dedicas*</span>
                          <input
                            type="text"
                            name="job"
                            id="job"
                            placeholder="Ej. Arquitecto"
                            value={formData.job}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <span>Correo electrónico*</span>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="info@example.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <span>Teléfono*</span>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Ej. 55 1234 5678"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="form-clt">
                          <span>Estado de la republica*</span>
                          <input
                            type="text"
                            name="state"
                            id="state"
                            placeholder="Ej. Sonora"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/* CHECKBOXES IN A HORIZONTAL ROW */}
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                        <div className="form-clt">
                          <span>Selecciona una o más opciones</span>
                          <div style={{ display: "flex",flexDirection: "column", gap: "1rem", marginTop: "0.5rem" }}>
                            <label style={{ display: "flex", alignItems: "center", gap: "0.3rem", flex: 1, color: "#FFF" }}>
                              <input
                                type="checkbox"
                                name="newsletter"
                                value="newsletter"
                                checked={formData.newsletter}
                                onChange={handleChange}
                                style={{ width: "28px"}}
                              />
                              Suscribirme al newsletter
                            </label>
                            <label style={{ display: "flex", alignItems: "center", gap: "0.3rem", flex: 1, color: "#FFF" }}>
                              <input
                                type="checkbox"
                                name="information"
                                value="information"
                                checked={formData.information}
                                onChange={handleChange}
                                style={{ width: "28px"}}
                              />
                              Obtener información o solicitar un documento de recomendaciones de desarrollo
                            </label>
                            <label style={{ display: "flex", alignItems: "center", gap: "0.3rem", flex: 1, color: "#FFF" }}>
                              <input
                                type="checkbox"
                                name="reports"
                                value="reports"
                                checked={formData.reports}
                                onChange={handleChange}
                                style={{ width: "28px"}}
                              />
                              Acceder a reportes inmediatos sobre un predio con solo las coordenadas
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                        <button type="submit" className="theme-btn bg-white" disabled={isSubmitting}>
                          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                        </button>
                      </div>
                    </div>
                  </form>
                  {submitStatus.message && (
                    <p className={`submit-status ${submitStatus.type}`}>
                      {submitStatus.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
