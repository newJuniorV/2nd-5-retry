import { useLocation, useHistory } from "react-router-dom";
//画面遷移前のデータを受け取る場所

export const Page1DeatailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  // const returnToPage1 = () => history.push("/page1");
  const returnToPage1 = () => history.goBack();

  return (
    <div>
      <h1>This is Page1DeatailA</h1>
      <button onClick={returnToPage1}>return</button>
    </div>
  );
};
