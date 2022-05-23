import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconTextButton from "./iconTextButton";
import "../../styles/components/global/imagetextcontent.scss"
interface ImageTextContentProps {
  productImage: string;
  titleContent: string;
  descriptionContent: string;
  backgroundImg: string;
  orientation: "row" | "row-reverse";
}
export default function ImageTextContent({
  productImage,
  titleContent,
  descriptionContent,
  backgroundImg,
  orientation,
}: ImageTextContentProps) {
  return (
    <section style={{display:"flex", flexDirection:`${orientation}`, justifyContent:"space-between"}} className="card-info">
      <div className="description-container">
        <img src={productImage} alt="no pufi founded" />
        <h2>{titleContent}</h2>
        <p>{descriptionContent}</p>
        <IconTextButton
          key={titleContent}
          Icon={ArrowForwardIosIcon}
          content="VER MAS"
          buttonClass="show-more-button"
        />
      </div>
      <div className="image-background-container">
        <img src={backgroundImg} alt="the background isn't found" />
      </div>
    </section>
  );
}
