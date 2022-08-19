import React from "react";
import "./Layout.css";

interface LayoutProps {
  children: any;
}
const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
// console.log({children});

  return (
      <section className="products-container">{children}</section>
  );
};

export default Layout;
