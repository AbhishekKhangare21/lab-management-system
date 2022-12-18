import { Menu, SportsBasketball } from "@mui/icons-material";

const Navbar = () => {
  return (
    <h1 className="navbar">
      <div className="logo">
        <SportsBasketball />
        <p>Logo</p>
      </div>
      <Menu />
    </h1>
  );
};

export default Navbar;
