import { useParams } from "react-router-dom";
import data from "../data";

export default function Single() {
  const { id } = useParams();

  const product = data.find((product) => product.id === +id);

  console.log(product);

  return (
    <div className="row py-5">
      <div className="col-6">
        <img src={require(`../images/${product.id}.jpg`)} className="w-50" />
      </div>
      <div className="col-6">
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
      </div>
    </div>
  );
}
