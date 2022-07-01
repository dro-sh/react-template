import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header>
      <Link to="/">Landing</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/organization/new">New organization</Link> 
    </header>
  );
};

export default Header;
