import { Route, Switch } from "react-router-dom"; //このタグの配下でルーティングが有効
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DeatailA } from "../Page1DetailA";
import { Page1DeatailB } from "../Page1DetailB";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
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
  );
};
