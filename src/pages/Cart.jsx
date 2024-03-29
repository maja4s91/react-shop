import CardBuyButton from "../components/Card/CardBuyButton";
import CardItem from "../components/Card/CardItem";
import CardNumbers from "../components/Card/CardNumbers";
import NoContent from "../components/extra/NoContent";
import { useSelector } from "react-redux";
import Condition from "../components/extra/Condition";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);

  return (
    <Condition
      test={items.length === 0}
      success={
        <NoContent text={"Nothing in Your Cart"} btnText={"Browse Product"} />
      }
      fail={
        <div className="row py-3">
          <div className="col-12 col-md-10 col-xl-8 mx-auto">
            <div
              id="cart"
              className="border p-3 bg-white text-dark my-3 my-md-0 rounded"
            >
              <h4 className="mb-3 px-1">Cart</h4>
              <ul className="list-group mb-3 cart-list">
                {items.map((i) => (
                  <CardItem key={i.id} item={i} />
                ))}
              </ul>
              <CardNumbers />
              <CardBuyButton />
            </div>
          </div>
        </div>
      }
    />
  );
}
