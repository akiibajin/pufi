import { Button } from "@mui/material";
import Slider from "react-slick";
import homeImage from "../../assets/img/home/home.jpg"
import pufiCart from "../../assets/img/home/pufi-cart.jpg"
import pufiRain from "../../assets/img/home/pufi-rain.jpg"
import "../../styles/components/home/carrousel.scss"
export default function GalleryImage() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }; 
  return ( 
    <Slider {...settings} className="carrousel">
      <div >
        <img src={homeImage} alt="where is the home child?" className="first image-child"/>
        <Button variant="outlined" sx={{color:"white", border:"2px solid white",position:"absolute", bottom:"20%"}}>SHOP</Button>
      </div>
      <div>
        <img src={pufiRain} alt="where is the rain child?" className="second image-child"/>
        <Button variant="outlined" sx={{color:"white", border:"2px solid white",position:"absolute", bottom:"20%"}}>SHOP</Button>
      </div>
      <div>
      <img src={pufiCart} alt="where is the home child?" className="third image-child"/>
      <Button variant="outlined" sx={{color:"white", border:"2px solid white",position:"absolute", bottom:"20%"}}>SHOP</Button>
      </div>
    </Slider>
  );
}
