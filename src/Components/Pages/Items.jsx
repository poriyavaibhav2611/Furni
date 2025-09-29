import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import SuccessPopup from "./SuccessPopup"; // Make sure you have this component

const Items = ({ path, name, price, path2 }) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false); // ✅ Step 1: popup state

  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      <div className="product-item">
        <img src={path} className="img-fluid product-thumbnail" alt={name} />
        <h3 className="product-title">{name}</h3>
        <strong className="product-price">{price}</strong>

        {/* + icon (hover pe dikhta hai) */}
        <span
          className="icon-cross"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            addToCart({
              path,
              name,
              price: parseFloat(price.replace("$", "")), // convert to number for calculation
            });

            // ✅ Step 2: show popup
            setShowPopup(true);

            // ✅ Step 3: auto hide after 3 seconds
            setTimeout(() => setShowPopup(false), 3000);
          }}
        >
          <img src={path2} className="img-fluid" alt="add" />
        </span>

        {/* Success Popup */}
        <SuccessPopup
          show={showPopup}
          onClose={() => setShowPopup(false)}
          message={`${name} added to cart!`}
        />
      </div>
    </div>
  );
};

export default Items;
