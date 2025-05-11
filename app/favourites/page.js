// "use client"

// import React, { useState } from "react";
// import "./favourites.css";

// const Favourites = () => {
//   const [isGridView, setIsGridView] = useState(true);
//   const favouriteItems = [
//     { id: 1, name: "Khaadi", image: "/brands/khaadi.jpg", cashback: "60%" },
//     { id: 2, name: "Cheezious", image: "/brands/cheezious.png", cashback: "60%" },
//     { id: 3, name: "Sapphire", image: "/brands/sapphire.png", cashback: "60%" },
//     { id: 4, name: "Rivaj", image: "/brands/rivaj.jpeg", cashback: "60%" },
//   ];

//   return (
//     <div className="favourites-container">
//       {/* Header */}
//       <div className="favourites-header">
//         <h2>❤️ Your Favourites</h2>
//         <button onClick={() => setIsGridView(!isGridView)}>
//           {isGridView ? "List View" : "Grid View"}
//         </button>
//       </div>

//       {/* Favourites List */}
//       <div className={isGridView ? "grid-view" : "list-view"}>
//         {favouriteItems.map((item) => (
//           <div key={item.id} className="fav-card">
//             <img src={`${item.image}`} alt={item.name} />
//             <div className="fav-info">
//               <h3>{item.name}</h3>
//               {/* <p>{item.cashback} Cashback</p> */}
//               <button className="remove-btn">Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Favourites;



"use client"

import React from "react";
import "./favourites.css";

const Favourites = () => {
  const favouriteItems = [
    { id: 1, name: "Khaadi", image: "/brands/khaadi.jpg", cashback: "60%" },
    { id: 2, name: "Cheezious", image: "/brands/cheezious.png", cashback: "60%" },
    { id: 3, name: "Sapphire", image: "/brands/sapphire.png", cashback: "60%" },
    { id: 4, name: "Rivaj", image: "/brands/rivaj.jpeg", cashback: "60%" },
  ];

  return (
    <div className="favourites-container">
      <div className="favourites-header">
        <h2>❤️ Your Favourites</h2>
      </div>

      <div className="list-view">
        {favouriteItems.map((item) => (
          <div key={item.id} className="fav-card">
            <img src={`${item.image}`} alt={item.name} />
            <div className="fav-info">
              <h3>{item.name}</h3>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
