export default function Products({ products = [] }) {
  return (
    <div className="container py-5 px-5">
      <ul>
        {products.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
