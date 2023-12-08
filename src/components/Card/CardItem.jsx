import { useDispatch } from "react-redux";
import { actions as cartActions } from "../../global/slices/cartSlice";

export default function CardItem({ item }) {
  const dispatch = useDispatch();

  const incrementQuantity = (amount) => {
    dispatch(cartActions.incrementItemQuantity({ item, amount }));
  };

  return (
    <li className="list-group-item">
      <div className="my-0 d-flex justify-content-between align-items-center">
        <span className="fw-bolder fs-6 me-auto">
          {item.name}({item.price})
        </span>
        <div className="btn-group">
          <button
            onClick={() => incrementQuantity(-1)}
            className=" btn btn-outline-secondary"
          >
            -
          </button>
          <button className="btn btn-outline-secondary" disabled>
            {item.quantity}
          </button>
          <button
            onClick={() => incrementQuantity(1)}
            className="btn btn-outline-secondary"
          >
            +
          </button>
        </div>
      </div>
      <p className="text-muted mb-0 col-3 description w-100">
        {item.description}
      </p>
    </li>
  );
}
