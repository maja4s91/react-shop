export default function CardNumbers() {
  const cardNumbers = {
    subtotal: 119.0,
    shipping: 2.0,
    tax: 11.9,
    total: 132.9,
  };
  const rows = [
    { title: "Subtotal", price: cardNumbers.subtotal },
    { title: "Shipping", price: cardNumbers.shipping },
    { title: "Tax", price: cardNumbers.tax },
    { title: "Total", price: cardNumbers.total },
  ];

  return (
    <ul id="cart-numbers" className="list-group">
      {rows.map((r) => (
        <li
          key={r.title}
          className="list-group-item d-flex justify-content-between"
        >
          <span>{r.title}</span>
          <span className="text-muted">{r.price}</span>
        </li>
      ))}
    </ul>
  );
}
