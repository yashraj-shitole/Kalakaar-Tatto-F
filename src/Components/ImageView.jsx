import { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
const ImageView = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/assets/gal/t6.jpg",
    "/assets/gal/t15.jpg",
    "/assets/gal/t28.jpg",
    "/assets/gal/t31.jpg",
    "/assets/gal/t5.jpg",
    "/assets/gal/t1.jpg",
    "/assets/gal/t7.jpg",
    "/assets/gal/t8.jpg",
    "/assets/gal/t10.jpg",
    "/assets/gal/t11.jpg",
    "/assets/gal/t14.jpg",
    "/assets/gal/t2.jpg",
    "/assets/gal/t16.jpg",
    "/assets/gal/t18.jpg",
    "/assets/gal/t19.jpg",
    "/assets/gal/t20.jpg",
    "/assets/gal/t21.jpg",
    "/assets/gal/t22.jpg",
    "/assets/gal/t23.jpg",
    "/assets/gal/t25.jpg",
    "/assets/gal/t26.jpg",
    "/assets/gal/t3.jpg",
    "/assets/gal/t27.jpg",
    "/assets/gal/t29.jpg",
    "/assets/gal/t30.jpg",
    "/assets/gal/t4.jpg",
    "/assets/gal/t32.jpg",
    "/assets/gal/t33.jpg",
    "/assets/gal/t34.jpg",
    "/assets/gal/t35.jpg",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="h-fit flex pt-28 bg-black flex-wrap gap-5 items-center justify-center p-10">
      {images.map((src, index) => (
        <img
          className="rounded-xl"
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default ImageView;
