import React from "react";
import GalleryImage from "../components/home/GalleryImage";
import ImagesCollage from "../components/home/ImagesCollage";
import InstaSection from "../components/home/InstaSection";
import PufiCart from "../components/home/PufiCart";
import PufiNap from "../components/home/PufiNap";
import PufiPuff from "../components/home/PufiPuff";
import PufiRain from "../components/home/PufiRain";
import SuscribeForm from "../components/home/SuscribeForm";

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
