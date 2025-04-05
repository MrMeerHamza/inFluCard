import React from "react";
import "./brands.css"; // Make sure this CSS file exists

const brands = [
  { name: "Khaadi", cashback: "60%", description: "", image: "/brands/khaadi.jpg" },
  { name: "Cheezious", cashback: "60%", description: "", image: "/brands/cheezious.png" },
  { name: "Sapphire", cashback: "60%", description: "", image: "/brands/sapphire.png" },
  { name: "Rivaj ", cashback: "60%", description: "", image: "/brands/rivaj.jpeg" }
];

const BrandsPage = () => {
  return (
    <div className="brands-container">
      {/* Top Banner */}
      <div className="banner">
        <img src="/ad.jpeg" alt="Bakery Bliss Awaits" />
      </div>

      {/* Categories */}
      <div className="categories">
        <div className="category">Fashion</div>
        <div className="category">Restaurants</div>
        <div className="category">Beauty</div>
        <div className="category">F&B</div>
      </div>

      {/* Brand Cards */}
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.image} alt={brand.name} className="brand-logo" />
            {/* <span className="cashback">{brand.cashback} Cashback</span> */}
            {/* <h3>{brand.name}</h3> */}
            <p>{brand.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
