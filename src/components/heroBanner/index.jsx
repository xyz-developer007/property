import Slider from "react-slick";
import "./hero-banner.css";
import bannerImg from "../../assets/heroImg.png";

const HeroBanner = ({ data }) => {
  const bannerImages = [bannerImg, bannerImg, bannerImg, bannerImg, bannerImg];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(data);
  return (
    <div className="hero-banner">
      <div className="container">
        <div className="hero-image-container">
          <Slider {...settings}>
            {data.pictures.map((pic, index) => {
              return (
                <div className="slide-content" key={index}>
                  <img src={pic.url} alt={`heroImg${index}`} />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="hero-banner-content">
          <div className="heading">
            {/* <h1>{data.city.name}, {data.country}</h1> */}
            <p>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. */}
            </p>
          </div>
          <div className="property-price">
            <h1>
              {data.price.currency} {data.price.value}
            </h1>
          </div>
        </div>
        <div className="hero-banner-detail">
          <div className="hero-banner-detail-content location">
            <div className="heading">
              <h2>{data.city.name} </h2>
              <h3>{data.region.name}</h3>
            </div>
          </div>
          <div className="hero-banner-detail-content">
            <ul>
              <li className="bed">{data.bedrooms} BEDS</li>
              {/* <li className="bath">5 BATHS</li> */}
              <li className="square">{data.area.value} SQ. M.</li>
            </ul>
          </div>
          <div className="hero-banner-detail-content btn-wrapper">
            <button>REQUESTDETAILS</button>
            <button>BOOKAVIEWING</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
