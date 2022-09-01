import { Page1 } from "../Page1";
import { Page1DeatailA } from "../Page1DetailA";
import { Page1DeatailB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DeatailA />
  },
  {
    path: "/detailB",
    exact: true,
    children: <Page1DeatailB />
  }
];
