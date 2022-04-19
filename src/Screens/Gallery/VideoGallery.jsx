import React, { useState } from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

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

const videos = [
  "http://techslides.com/demos/sample-videos/small.mp4",
  "http://techslides.com/demos/sample-videos/small.mp4",
  "http://techslides.com/demos/sample-videos/small.mp4",
  "http://techslides.com/demos/sample-videos/small.mp4",
  "http://techslides.com/demos/sample-videos/small.mp4",
];

export default function VideoGallery() {
  const [isOpen, setOpen] = useState(false);

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <div id="gallery-with-links" className="content-image">
          <div className="row">
            {videos.map((vid) => (
              <>
                <div
                  className="col-md-4 col-6 col-image-with-link"
                  style={{ borderRadius: 15 }}
                >
                  <a className="video-outer" onClick={() => setOpen(true)}>
                    <video
                      width="324"
                      height="231"
                      controls
                      className="video-inner"
                      style={{ backgroundColor: "black" }}
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                </div>
                <ModalVideo
                  channel="custom"
                  autoplay
                  isOpen={isOpen}
                  url={vid}
                  onClose={() => setOpen(false)}
                />
              </>
            ))}
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}
