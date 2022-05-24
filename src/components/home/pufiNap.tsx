import ImageTextContent from "../global/ImageTextcontent";
import airPlane from "../../assets/img/home/airPlane.png"
import pufiNap from "../../assets/img/home/pufiNap.png"
export default function PufiNap(){
    return (
        <ImageTextContent 
            backgroundImg={airPlane}
            descriptionContent="Travel safe"
            orientation="row"
            productImage={pufiNap}
            titleContent="Pufi NAP"
        />
    )
}