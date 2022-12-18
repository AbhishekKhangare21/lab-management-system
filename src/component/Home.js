import Img from "../img/lab.png";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <img src={Img} alt="" />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
