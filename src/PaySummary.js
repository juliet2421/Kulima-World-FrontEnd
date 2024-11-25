import React, { useState } from "react";
import "./App.css";

const PaymentSummary = () => {
  const [productName] = useState("Fertilizer");
  const [purchaseDate] = useState("2024-11-24");
  const [estimatedDelivery] = useState("2024-12-01");
  const [paymentStatus] = useState("Paid");
  const [amount] = useState(89.99);

  return (
    <div className="full-screen-container">
      <div className="payment-summary-card">
        <h2 className="payment-summary-header">Payment Summary</h2>

        {/* Product Details */}
        <div className="payment-summary-row">
          <span>Product:</span>
          <span>{productName}</span>
        </div>
        <div className="payment-summary-row">
          <span>Date of Purchase:</span>
          <span>{new Date(purchaseDate).toLocaleDateString()}</span>
        </div>
        <div className="payment-summary-row">
          <span>Estimated Delivery:</span>
          <span>{new Date(estimatedDelivery).toLocaleDateString()}</span>
        </div>
        <div className="payment-summary-row">
          <span>Payment Status:</span>
          <span className={`payment-status ${paymentStatus.toLowerCase()}`}>
            {paymentStatus}
          </span>
        </div>

        {/* Amount */}
        <div className="payment-summary-amount">
          <span>Amount:</span>
          <span>${amount.toFixed(2)}</span>
        </div>

        {/* Action Button */}
        <button className="payment-summary-button" onClick={() => alert("Thank you for your payment!")}>
          View Order Details
        </button>
      </div>
    </div>
  );
};

export default PaymentSummary;
