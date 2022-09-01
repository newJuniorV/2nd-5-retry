import { BrowserRouter, Link } from "react-router-dom"; //このタグの配下でルーティングが有効

import "./styles.css";
import { Router } from "./roter/Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* 画面でHomeを押すとパスが/になる。 */}
        <Link to="/">Home</Link>
        <br />
        {/* 画面でPage1Page1を押すとパスが/page1になる。 */}
        <Link to="/page1">Page1</Link>
        {/* 画面でPage1Page2を押すとパスが/page2になる。 */}
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
