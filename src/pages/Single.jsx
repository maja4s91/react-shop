import { useParams } from "react-router-dom";
import ProductButton from "../components/products/ProductButton";
import Line from "../components/extra/Line";
import Products from "../components/products/Products";
import { useDispatch, useSelector } from "react-redux";
import { actions as productsActions } from "../global/slices/productsSlice";
import { useEffect } from "react";
import Price from "../components/extra/Price";

export default function Single() {
  const { id } = useParams();

  const { single, singleSimilarProducts } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.setSingle(id));
  }, [id, dispatch]);

  return (
    <div>
      <div
        id="single"
        className="row justify-content-center align-items-center text-white mx-auto"
      >
        <div className="col-md-6">
          <img
            src={require(`../images/${single.id}.jpg`)}
            className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
            alt={single.name}
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fs-1 fw-bold">{single.name}</h2>
          <div className="fs-5 mb-2">
            <Price value={single.price} />
          </div>
          <p className="lead">{single.description.substring(0, 100)}</p>
          <ProductButton product={single} />
        </div>
      </div>
      {/* div row */}
      <Line />
      <h2 className="text-white my-4 text-center">Similar Product Like This</h2>
      <Products products={singleSimilarProducts} />
    </div>
    // div component parent
  );
}
