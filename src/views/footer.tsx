import { Divider } from "@mui/material";
import BuySecureLogo from "../components/footer/BuySecureLogo";
import InfoContainer from "../components/footer/InfoContainer";
import LegalInfo from "../components/footer/LegalInfo";
import SocialNetworks from "../components/footer/SocialNetworks";
import Logo from "../components/global/Logo";
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