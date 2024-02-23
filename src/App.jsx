import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from "./components/heroBanner";
import PropertySpecs from "./components/propertySpacs";
import jsonData from "./data.json";
function App() {
  return (
    <div className="landing-page">
      <HeroBanner data={jsonData.properties[21]} />
      <PropertySpecs data={jsonData} />
    </div>
  );
}

export default App;
