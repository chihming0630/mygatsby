import * as React from "react";
import Header from "../components/header";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div>
      <Header title="Home Header !!"></Header>
      <div style={{ color: `purple`, fontSize: `72px` }}>Hello world! 2266</div>
      <img src="https://picsum.photos/300/200" alt="000" />
      <hr />
      <div>
        <Link to="/about/">About</Link>
      </div>
      <div>
        <Link to="/secondpage/">SecondPage</Link>
      </div>
      <div>
        <Link to="/contact/">Contact</Link>
      </div>
    </div>
  );
}
