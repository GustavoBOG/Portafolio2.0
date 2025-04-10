import React, { useState } from 'react';

const Certificates = () => {
  const [isStacked, setIsStacked] = useState(true);
  const [expandedCertificate, setExpandedCertificate] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const certificatesData = [
    {
      id: 1,
      title: 'HTML5 DESDE CERO',
      logo: '/images/certificates/u.png',
      certificate: '/images/certificates/uhtml.png',
      background: 'bg-custom-gradient'
    },
    {
      id: 2,
      title: 'FULL STACK WEB DEVELOPER',
      logo: '/images/certificates/hackaboss.png',
      certificate: '/images/certificates/habfs.png',
      background: 'bg-custom-gradient'
    },
    {
      id: 3,
      title: 'MASTER EN CSS',
      logo: '/images/certificates/u.png',
      certificate: '/images/certificates/ucss.png',
      background: 'bg-custom-gradient'
    },
    {
      id: 4,
      title: 'PRIMEROS PASOS CON UX/UI',
      logo: '/images/certificates/hackaboss.png',
      certificate: '/images/certificates/habd.png',
      background: 'bg-custom-gradient'
    }
  ];

  const cardWidth = 260;
  const gap = 24;
  const centerOffset = ((certificatesData.length - 1) * (cardWidth + gap)) / 2;

  const handleCertificateClick = (id) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (isStacked) {
      setIsStacked(false);
    } else if (expandedCertificate === id) {
      setExpandedCertificate(null);
    } else {
      setExpandedCertificate(id);
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const renderExpandedCertificate = () => {
    const certificate = certificatesData.find(cert => cert.id === expandedCertificate);

    return (
      <div className="flex justify-center w-full">
        <div 
          className="rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ease-in-out cursor-pointer"
          style={{ 
            maxWidth: '1200px',
            boxShadow: '16px 16px 4px rgba(0, 0, 0, 0.25)'
          }}
          onClick={() => handleCertificateClick(certificate.id)}
        >
          <img 
            src={certificate.certificate}
            alt={`Certificado de ${certificate.title}`}
            className="w-full h-[300px]"
          />
        </div>
      </div>
    );
  };

  const renderAnimatedCertificates = () => {
    return (
      <div className="relative w-full h-[500px]">
        <div className="absolute top-16 left-[350px] -translate-x-1/2 -translate-y-1/2">
          {certificatesData.map((certificate, index) => {
            const translateX = !isStacked
              ? index * (cardWidth + gap) - centerOffset + cardWidth / 2
              : index * 20 - 20;

            const translateY = 0;
            const rotation = isStacked ? (index * 5 - 5) : 0;
            const z = isStacked ? certificatesData.length - index : 1;

            return (
              <div
                key={certificate.id}
                className={`absolute transition-transform duration-700 ease-in-out w-[260px] h-[320px] rounded-2xl shadow-lg transform ${certificate.background} cursor-pointer`}
                style={{
                  transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`,
                  zIndex: z
                }}
                onClick={() => handleCertificateClick(certificate.id)}
              >
                <div className="absolute top-4 left-4 w-8 h-8 bg-background rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">{certificate.id}</span>
                </div>
                <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white text-lg font-roboto font-bold mb-4 mt-4">{certificate.title}</h3>
                  <div className="flex items-center justify-center h-40">
                    <img 
                      src={certificate.logo}
                      alt={`Logo de ${certificate.title}`}
                      className="h-32 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-background py-10 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-text text-h1 font-roboto">Certificados</h2>
        </div>
        {isStacked ? (
          renderAnimatedCertificates()
        ) : expandedCertificate ? (
          renderExpandedCertificate()
        ) : (
          renderAnimatedCertificates()
        )}
      </div>
    </section>
  );
};

export default Certificates;



