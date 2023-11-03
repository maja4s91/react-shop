import data from "../data";
import Products from "../components/products/Products";

export default function Home() {
  return <Products products={data} />;
}
