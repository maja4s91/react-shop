import { useLocation, useNavigate } from "react-router-dom";
import CategorySelector from "./CategorySelector.1";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import Condition from "../extra/Condition";

export default function Navbar({ title }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top border-bottom">
      <div className="container-fluid px-md-5">
        <span
          onClick={() => navigate("/")}
          id="name"
          className="navbar-brand fw-bold pointer"
        >
          {title}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <Condition
            test={pathname === "/"}
            success={
              <>
                <CategorySelector />
                <SearchBar />
              </>
            }
          />
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
