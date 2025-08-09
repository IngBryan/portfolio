import { useState } from "react";
import { Data } from '../Card';

interface CarouselProps {
  items: Data[];
  id: string;
}

export const Carousel = ({ items, id }: CarouselProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{ route: string; type: string } | null>(null);

  const handleDoubleClick = (item: { route: string; type: string }) => {
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
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              {item.type === "image" ? (
                <img
                  src={item.route}
                  className="d-block w-100"
                  alt={`slide-${index}`}
                  onDoubleClick={() => handleDoubleClick(item)} // SOLO en imagenes
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <video
                  className="d-block w-100"
                  controls
                  style={{ cursor: "pointer" }}
                  // No onDoubleClick aquí para video
                >
                  <source src={item.route} type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {showModal && modalContent && modalContent.type === "image" && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={handleClose}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body p-0">
                <img
                  src={modalContent.route}
                  className="img-fluid w-100"
                  alt="Ampliado"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
