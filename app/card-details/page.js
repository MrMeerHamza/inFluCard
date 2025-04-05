"use client";

import React, { useState } from "react";
import "./card-details.css";

const CardDetails = () => {
  const [cvvHidden, setCvvHidden] = useState(true);

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="card-details-container">
      {/* Card Number */}
      <div className="card-detail">
        <div>
          <div className="label">Card Number</div>
          <div className="value">**** **** **** 3456</div>
        </div>
        <ion-icon
          name="copy-outline"
          className="copy-btn"
          onClick={() => copyToClipboard("1234 5678 9012 3456")}
        ></ion-icon>
      </div>

      {/* Name on Card */}
      <div className="card-detail">
        <div>
          <div className="label">Name on Card</div>
          <div className="value">M. Furqan</div>
        </div>
        <ion-icon
          name="copy-outline"
          className="copy-btn"
          onClick={() => copyToClipboard("John Doe")}
        ></ion-icon>
      </div>

      {/* Expiry Date & CVV in One Row */}
      <div className="card-detail-row">
        {/* Expiry Date */}
        <div className="card-detail half-width">
          <div>
            <div className="label">Expiry Date</div>
            <div className="value">12/26</div>
          </div>
          <ion-icon
            name="copy-outline"
            className="copy-btn"
            onClick={() => copyToClipboard("12/26")}
          ></ion-icon>
        </div>

        {/* CVV */}
        <div className="card-detail half-width">
          <div>
            <div className="label">CVV</div>
            <div className="cvv-box">
              <span>{cvvHidden ? "***" : "123"}</span>
            </div>
          </div>
          <ion-icon
            name="lock-closed-outline"
            className="copy-btn"
            onClick={() => setCvvHidden(!cvvHidden)}
          ></ion-icon>
        </div>
      </div>
      <p>apply for physical card</p>

      {/* Card Image */}
      <div className="card-image">
        <img src="/wyld.jpeg" alt="Card" />
      </div>
    </div>
  );
};

export default CardDetails;
