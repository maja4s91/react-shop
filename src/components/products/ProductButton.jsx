import { useDispatch } from "react-redux";
import { actions as cartAction } from "../../global/slices/cartSlice";

export default function ProductButton({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(cartAction.addToCart(product))}
      className="btn btn-outline-success d-block w-100 "
    >
      Add to card
    </button>
  );
}
