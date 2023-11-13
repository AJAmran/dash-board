import BchartBox from "../../components/bChartBox/BchartBox";
import BarChat from "../../components/barChat/BarChat";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChart/PieChart";
import TopDeals from "../../components/topDeals/TopDeals";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
} from "../../utils/data/Data";
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
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox></PieChartBox>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7"><BchartBox></BchartBox></div>
      <div className="box box8">
        <BarChat {...barChartBoxVisit}></BarChat>
      </div>
      <div className="box box9">
        <BarChat {...barChartBoxRevenue}></BarChat>
      </div>
    </div>
  );
};

export default Home;
