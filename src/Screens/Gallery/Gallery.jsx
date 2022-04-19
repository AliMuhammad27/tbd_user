import React, { useState } from "react";
import "./Gallery.css";
import GalleryTabs from "./GalleryTabs";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

export default function Gallery() {
  const [selected_tab, setSelected] = useState(1);

  return (
    <section class="p-55-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 class="ff-thunder fc-purple">Gallery</h1>
          </div>
          <GalleryTabs setSelected={setSelected} selected_tab={selected_tab} />
          {selected_tab === 1 && <ImageGallery />}
          {selected_tab === 2 && <VideoGallery />}
        </div>
      </div>
    </section>
  );
}
