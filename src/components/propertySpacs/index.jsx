import "./property-card.css";
import Slider from "react-slick";
const PropertySpecs = ({ data }) => {
  const propertyCard = data.properties
    .filter((d) => d.pictures.length)
    .map((d) => ({
      cardImg: d.pictures[0]?.url,
      cardTitle: d.region.name,
      cardSubTitle: "Property Specs",
      dateContent: `${d.user?.firstname} ${d.user?.lastname} (${d.user?.mobile})`,
      desc:
        d.comments?.[0]?.comment?.length > 200
          ? `${d.comments?.[0]?.comment?.substr(0, 200)}...`
          : d.comments?.[0]?.comment,
      ...(d.price.currency && d.price.value
        ? { price: `${d.price?.currency} ${d.price?.value}` }
        : null),
    }));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="property-cards-wrapper">
      <div className="container">
        <div className="heading">
          <h2>You May Also Like</h2>
        </div>
        <div className="property-slide-wrapper">
          <Slider {...settings}>
            {propertyCard.map((card, index) => {
              return (
                <div className="property-card" key={index}>
                  <div className="property-img">
                    <img src={card.cardImg} alt="property-img" />
                  </div>
                  <div className="heading">
                    <h3>{card.cardTitle}</h3>
                    <h4>{card.cardSubTitle}</h4>
                    <h5>{card.price}</h5>
                    <div className="date-content">{card.dateContent}</div>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PropertySpecs;
