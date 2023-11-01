import data from "../data";
import Products from "../components/products/Products";

export default function Home() {
  return (
    <div>
      <Products products={data} />
    </div>
  );
}
