import { Route, Switch } from "react-router-dom"; //このタグの配下でルーティングが有効
import { Home } from "../Home";
import { page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

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
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}

            {/* <Route exact path={url}>
              <Page1 />
            </Route>
            <➀Route path="/page1/detailA"> 
              以下に変更
            <➁Route path={`${url}/detailA`}>
              <Page1DeatailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DeatailB />
            </Route> */}
          </Switch>
        )}
      />

      {/* pathがpage2の時Page2コンポーネントへ遷移 */}
      <Page2Routes />
    </Switch>
  );
};
