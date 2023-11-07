export default function CardBuyButton({ title = "Buy Now" }) {
  const buy = () => {
    console.log("buy");
  };

  return (
    <button
      onClick={buy}
      className="btn btn-success d-block w-100 mt-3 fw-bold"
    >
      {title}
    </button>
  );
}
