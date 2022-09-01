import { Page2 } from "../Page2";
import { Page1DeatailA } from "../Page1DetailA";
import { Page1DeatailB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <UrlParameter />
  },
  {
    path: "/detailB",
    exact: true,
    children: <Page1DeatailB />
  }
];
