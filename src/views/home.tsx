import React from "react";
import GalleryImage from "../components/home/galleryImage";
import ImagesCollage from "../components/home/imagesCollage";
import InstaSection from "../components/home/instaSection";
import PufiCart from "../components/home/pufiCart";
import PufiNap from "../components/home/pufiNap";
import PufiPuff from "../components/home/pufiPuff";
import PufiRain from "../components/home/pufiRain";
import SuscribeForm from "../components/home/suscribeForm";

export default function Home() {
  return (
    <div className="home">
      <GalleryImage />
      <PufiRain />
      <PufiPuff />
      <PufiCart />
      <PufiNap />
      <InstaSection />
      <ImagesCollage />
      <SuscribeForm />
    </div>
  );
}
