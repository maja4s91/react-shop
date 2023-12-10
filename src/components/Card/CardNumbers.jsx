import { useSelector } from "react-redux";
import Price from "../extra/Price";

export default function CardNumbers() {
  const { cartNumbers } = useSelector((state) => state.cart);
  const rows = [
    { title: "Subtotal", price: cartNumbers.subtotal },
    { title: "Shipping", price: cartNumbers.shipping },
    { title: "Tax", price: cartNumbers.tax },
    { title: "Total", price: cartNumbers.total },
  ];

  return (
    <ul id="cart-numbers" className="list-group">
      {rows.map((r) => (
        <li
          key={r.title}
          className="list-group-item d-flex justify-content-between"
        >
          <span>{r.title}</span>
          <span className="text-muted">
            <Price value={r.price} decimal={2} />
          </span>
        </li>
      ))}
    </ul>
  );
}
