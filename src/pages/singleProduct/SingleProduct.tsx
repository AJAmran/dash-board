import Single from "../../components/single/Single";
import { singleProduct } from "../../utils/data/Data";
import "./singleProduct.scss";

const SingleProduct = () => {
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
};

export default SingleProduct;
