import ChartBox from "../../components/chartBox.tsx/ChartBox";
import TopDeals from "../../components/topDeals/TopDeals";
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue } from "../../utils/data/Data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDeals></TopDeals>
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct}/>
      </div>
      <div className="box box4">Box4</div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion}/>
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue}/>
      </div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </div>
  );
};

export default Home;
