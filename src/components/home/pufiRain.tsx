import ImageTextContent from "../global/ImageTextcontent";
import rainBackground from "../../assets/img/home/rain.jpg";
import umbrella from "../../assets/img/home/umbrella.jpg";
export default function PufiRain() {
  return (
    <>
      <ImageTextContent
        backgroundImg={rainBackground}
        orientation="row-reverse"
        descriptionContent="Buy your umbrella to this season"
        productImage={umbrella}
        titleContent="Pufi Rain"
      />
    </>
  );
}
