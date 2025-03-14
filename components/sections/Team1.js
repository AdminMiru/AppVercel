'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Team1() {
  //   const followImageCursor = (event, teamItem) => {
  //     const contentBox = teamItem.getBoundingClientRect();
  //     const dx = Math.min(
  //       Math.max(event.clientX - contentBox.x, 0),
  //       contentBox.width,
  //     );
  //     const dy = Math.min(
  //       Math.max(event.clientY - contentBox.y, 0),
  //       contentBox.height,
  //     );
  //     teamItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
  //   };

  //   useEffect(() => {
  //     const teamItems = document.querySelectorAll('.team-items');

  //     const handleMouseMove = (event) => {
  //       teamItems.forEach((item) => {
  //         followImageCursor(event, item);
  //       });
  //     };

  //     document.addEventListener('mousemove', handleMouseMove);

  //     return () => {
  //       document.removeEventListener('mousemove', handleMouseMove);
  //     };
  //   }, []);
  return (
    <>
      <section
        className="team-section section-padding pt-0 section-bg-2 bg-[#18185E]"
        id="process"
      >
        <div className="line-shape">
          <img src="/assets/img/team/line-shape.png" alt="shape-img" />
        </div>
        <div className="mask-shape">
          <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="text-white wow fadeInUp"></span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Nuestro Proceso
              </h2>
            </div>
          </div>
          <div className="team-wrapper">
            <div
              className="team-items bor-top bor-bottom wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-title">
                {/* <span>Scrum Master</span> */}
                <h4>
                  <Link href="/team-details">Briefing y propuesta</Link>
                </h4>
              </div>
              <p className="text-white">
                Entendimiento de tus necesidades y expectativas para diseñar la
                mejor estrategia y presentarte una propuesta inicial.
              </p>
            </div>
            <div
              className="team-items bor-bottom pt-0 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="team-title">
                <h4>
                  <Link href="/team-details">Análisis</Link>
                </h4>
              </div>
              <p className="text-white">
                Recopilación, procesamiento y análisis avanzado con machine
                learning. Desarrollo del presupuesto del proyecto.
              </p>
            </div>
            <div
              className="team-items bor-bottom pt-0 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="team-title">
                <h4>
                  <Link href="/team-details">Entrega de resultados</Link>
                </h4>
              </div>
              <p className="text-white">
                Presentación del reporte con al menos 3 opciones de terreno y/o
                vocación alineadas a tus requerimientos.
              </p>
            </div>
            <div
              className="team-items bor-bottom pt-0 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="team-title">
                <h4>
                  <Link href="/team-details">
                    Acompañamiento y actualización
                  </Link>
                </h4>
              </div>
              <p className="text-white">
                Durante el primer año, asesoría continua y una actualización de
                los modelos y del presupuesto del proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
