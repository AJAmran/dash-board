import { topDealUsers } from "../../utils/data/Data";
import "./TopDeals.scss";

const TopDeals = () => {
  return (
    <div className="top-box">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="User Image" />
              <div className="userTexts">
                <span className="userName">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
              <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
