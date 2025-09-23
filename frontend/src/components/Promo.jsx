import "./Promo.css";
export default function Promo() {
  const data = [
    { img: "/images/hpl_icon_1.jpg", content: "Free Shipping" },
    { img: "/images/hpl_icon_2.jpg", content: "Diverse genres and authors" },
    {
      img: "/images/hpl_icon_3.jpg",
      content: "Great deals",
    },
    {
      img: "/images/hpl_icon_4.jpg",
      content: "Hotline: 99999",
    },
  ];

  return (
    <div className="container">
      {data.map((obj, i) => (
        <div className="box" key={i}>
          <div className="img-promo">
            <img src={obj.img} />
          </div>
          <div className="promo">{obj.content}</div>
        </div>
      ))}
    </div>
  );
}
