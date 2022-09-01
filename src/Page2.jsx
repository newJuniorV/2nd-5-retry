import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>This is Page2</h1>
      <br />
      <Link to="/page2/999">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
