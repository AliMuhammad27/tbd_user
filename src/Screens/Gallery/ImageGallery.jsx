import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    backgroundColor: "rgba(140, 94, 88, 0.8)",
    iconColor: "rgba(241, 191, 152, 0.7)",
  },
  settings: {
    overlayColor: "rgba(255, 237, 225, 1)",
    transitionSpeed: 1000,
    transitionTimingFunction: "linear",
  },
  thumbnails: {
    thumbnailsSize: ["120px", "100px"],
    thumbnailsOpacity: 0.4,
  },
  caption: {
    captionColor: "rgba(241, 191, 152, 1)",
  },
  progressBar: {
    size: "4px",
    backgroundColor: "rgba(255, 237, 225, 1)",
    fillColor: "#AF9AB2",
  },
};

const images = [
  "https://www.simple-react-lightbox.dev/docs/gallery/unsplash17.jpg",
  "https://www.simple-react-lightbox.dev/docs/gallery/unsplash04.jpg",
  "https://www.simple-react-lightbox.dev/docs/gallery/unsplash20.jpg",
  "https://www.simple-react-lightbox.dev/docs/gallery/unsplash22.jpg",
];

export default function ImageGallery() {
  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <div id="gallery-with-links" className="content-image">
          <div className="row">
            {images.map((img, index) => (
              <div className="col-md-4 col-12 col-image-with-link">
                <a href={img}>
                  <img
                    src={img}
                    alt={index}
                    style={{ width: 324, height: 231, borderRadius: 15 }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}
