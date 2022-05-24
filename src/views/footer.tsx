import { Divider } from "@mui/material";
import BuySecureLogo from "../components/footer/buySecureLogo";
import InfoContainer from "../components/footer/infoContainer";
import LegalInfo from "../components/footer/LegalInfo";
import SocialNetworks from "../components/footer/socialNetworks";
import Logo from "../components/global/logo";
import "../styles/components/footer/footer.scss"
export default function Footer(){
    return(
        <footer className="footer">
            <div className="top-footer">
            <Logo color="black"/>
            <InfoContainer />
            <BuySecureLogo />
            <SocialNetworks />
            </div>
            <Divider />
            <div className="bottom-footer">
                <LegalInfo />
            </div>
        </footer>
    )
}