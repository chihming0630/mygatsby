import React from "react";
import Header from "../components/header";
import { Link } from "gatsby";

const Page = () => (
  <div style={{ color: `purple` }}>
    <Link to="/">Home</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://picsum.photos/300/300" alt="" />
  </div>
);

export default Page;
