import Single from "../../components/single/Single";
import "./singleUser.scss";
import { singleUser } from "../../utils/data/Data";

const SingleUser = () => {
  //todo: fetch data and send to Single Component:

  // const {id} = useParams()
  // console.log(id)

  return (
    <div className="usr">
      <Single {...singleUser}/>
    </div>
  );
};

export default SingleUser;
