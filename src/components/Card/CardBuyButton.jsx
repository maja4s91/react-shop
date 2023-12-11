import { useNavigate } from "react-router-dom";

export default function CardBuyButton({ title = "Buy Now" }) {
  const navigate = useNavigate();

  const buy = () => {
    if (window.confirm("Would you like to place your order?")) {
      window.alert("Order placed successfully! Thank you!");
      nav("/");
      window.location.reload();
    }
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
