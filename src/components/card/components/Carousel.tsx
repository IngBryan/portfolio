import { useState } from 'react';
import { Data } from '../Card';

interface CarouselProps {
  items: Data[];
  id: string;
}

export const Carousel = ({ items, id }: CarouselProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{ route: string; type: string } | null>(null);

  const openModal = (item: { route: string; type: string }) => {
    if (item.type !== 'image') return;
    setModalContent(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <>
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {items.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              {item.type === 'image' ? (
                <div className="carousel-media-wrapper" onClick={() => openModal(item)}>
                  <img
                    src={item.route}
                    className="d-block w-100"
                    alt={`Captura del proyecto, slide ${index + 1}`}
                    loading="lazy"
                  />
                  <button
                    type="button"
                    className="carousel-expand-btn"
                    aria-label="Ampliar imagen"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(item);
                    }}
                  >
                    Ampliar
                  </button>
                </div>
              ) : (
                <video className="d-block w-100" controls preload="metadata">
                  <source src={item.route} type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && modalContent && modalContent.type === 'image' && (
        <div
          className="image-modal"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <button type="button" className="image-modal__close" onClick={handleClose}>
            Cerrar
          </button>
          <img
            src={modalContent.route}
            className="image-modal__img"
            alt="Imagen ampliada del proyecto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
