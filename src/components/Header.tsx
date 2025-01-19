import React from "react";

const Header = () => {
  const name = "Nat";
  if (name) return <h1>Welcome to DOPA, {name}</h1>;
  return <h1>Welcome to DOPA</h1>;
};
export default Header;
