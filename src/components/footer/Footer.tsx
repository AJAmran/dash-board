import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2023 adminHub</p>
      <div>
        <a href="#">Privacy Policy</a>
        <img src="logo.svg" alt="logo" height={40} width={40} />
      </div>
    </div>
  );
};

export default Footer;
