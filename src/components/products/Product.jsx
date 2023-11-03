import { useNavigate } from "react-router-dom";
import ProductButton from "./ProductButton";

export default function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div className="col">
      <div className="card h-100" id="product">
        <img
          onClick={() => navigate(`/single/${product.id}`)}
          className="card-img-top pointer"
          src={require(`../../images/${product.id}.jpg`)}
        />
        <div className="card-body p4 text-center">
          <h6 className="fw-bolder">{product.name}</h6>
          <span className="">{product.price}</span>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent ">
          <ProductButton />
        </div>
      </div>
    </div>
  );
}
