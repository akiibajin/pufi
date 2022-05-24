import "../../styles/components/footer/info-list.scss";
export default function InfoContainer() {
  const infoList = [
    "PUFI RAIN",
    "PUFI PUFF",
    "PUFI CART",
    "PUFI NAP",
    "CONTACTO",
    "AYUDA",
    "CÓMO COMPRAR",
    "TERMINOS Y CONDICIONES",
  ];
  return (
    <div className="info-list">
      {infoList.map((info) => (
        <p key={info} className="info-list-item">
          {info}
        </p>
      ))}
    </div>
  );
}
