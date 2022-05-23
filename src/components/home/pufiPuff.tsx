import ImageTextContent from "../global/imageTextcontent";
import beach from "../../assets/img/home/beach.jpg"
import beachPuff from "../../assets/img/home/beachPuff.png"

export default function PufiPuff(){
    return(
        <>
        <ImageTextContent 
        backgroundImg={beach}
        descriptionContent="Carry out your Puff where ever you want!"
        orientation="row"
        productImage={beachPuff}
        titleContent="Pufi PUFF"
        />
        </>
    )
}