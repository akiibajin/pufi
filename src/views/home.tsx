import React from "react";
import GalleryImage from "../components/home/galleryImage";
import PufiCart from "../components/home/pufiCart";
import PufiNap from "../components/home/pufiNap";
import PufiPuff from "../components/home/pufiPuff";
import PufiRain from "../components/home/pufiRain";

export default function Home() {
  return (
    <div>
      <GalleryImage />
      <PufiRain />
      <PufiPuff />
      <PufiCart />
      <PufiNap />
    </div>
  );
}
