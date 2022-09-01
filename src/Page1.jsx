import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();
  const detailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>This is Page1</h1>
      {/* stateを使うことによって、画面遷移先にデータを受け渡すことが出来る。 */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      {/* ボタンでの画面遷移 usehistoryを利用する*/}
      <button onClick={detailA}>DetailA</button>
    </div>
  );
};
