export default function CardItem({ item }) {
  return (
    <li className="list-group-item">
      <div className="my-0 d-flex justify-content-between align-items-center">
        <span className="fw-bolder fs-6 me-auto">
          {item.name}({item.price})
        </span>
        <div className="btn-group">
          <button className=" btn btn-outline-secondary">-</button>
          <button className="btn btn-outline-secondary" disabled>
            1
          </button>
          <button className="btn btn-outline-secondary">+</button>
        </div>
      </div>
      <p className="text-muted mb-0 col-3 description w-100">
        {item.description}
      </p>
    </li>
  );
}
