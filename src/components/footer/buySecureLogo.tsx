import buySecureLogo  from "../../assets/img/footer/buysecurelogo.png"
import "../../styles/components/footer/buySecureLogo.scss"

export default function BuySecureLogo(){
    return(
        <div className="buy-secure-section">
        <p>COMPRA 100% SEGURA</p>
        <img src={buySecureLogo} alt="no logo founded" />
        </div>
    )
}