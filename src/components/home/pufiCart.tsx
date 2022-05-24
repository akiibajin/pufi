import ImageTextContent from "../global/ImageTextcontent";
import cartBackground from "../../assets/img/home/cart.jpg";
import shoppingBag from "../../assets/img/home/shoppingBag.png";

export default function PufiCart() {
  return (
    <>
      <ImageTextContent 
        backgroundImg={cartBackground}
        descriptionContent="Buy your bags for buy in any place"
        orientation="row-reverse"
        productImage={shoppingBag}
        titleContent="Pufi CART"
      />
    </>
  );
}
