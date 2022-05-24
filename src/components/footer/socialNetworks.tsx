import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../../styles/components/footer/socialNetworks.scss"
export default function SocialNetworks(){
    return(
        <div className="socialNetworksContainer">
        <span>Siguenos en: </span>
        <IconButton >
        <Facebook />
        </IconButton>
        <IconButton >
        <Twitter />
        </IconButton>
        <IconButton >
        <Instagram />
        </IconButton>
        </div>
    )
}