import { BrowserRouter, Link, Route, Switch } from "react-router-dom"; //このタグの配下でルーティングが有効

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DeatailA } from "./Page1DetailA";
import { Page1DeatailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* pathがpage1の時Page1コンポーネントへ遷移 */}
        {/* <Route path="/page1">
          <Page1 />
        </Route> */}
        {/* 上記3行と以下（アロー関数仕様）は同様　書き方の違い　 */}
        {/* render関数はデフォルトでpropsを受け取っている。
        その中で、page1をurlとして受けとる→page1を何度も書く必要がなくなり　ミスも減る */}
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              {/* <Route path="/page1/detailA"> 
                  以下に変更*/}
              <Route path={`${url}/detailA`}>
                <Page1DeatailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DeatailB />
              </Route>
            </Switch>
          )}
        />

        {/* pathがpage2の時Page2コンポーネントへ遷移 */}
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
