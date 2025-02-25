export const metadata = {
  title: "App Router",
 };
 import Counter from "app/counter";
import Calculator from "./utils/Calculator";
 export default function Page() {
  return (
  <>
  <h1>App Router</h1>
  <Calculator />
  </> );
}
