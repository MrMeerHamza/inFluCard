import "./page.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="card-section">
          <div className="balance-card">
            <div className="card-info">
              {/* <button className="view-card">View Virtual Card</button> */}
              <button className="manage-card">Manage Card</button>
              <p className="balance-label">Available Balance</p>
              <h2 className="balance-amount">Rs 2588.37</h2>
            </div>
            <button className="add-money">Add Money</button>
          </div>
        </div>

        <div className="banner-section">
          <div className="banner">
            <img src="/freakins.jpeg" alt="Freakins" />
          </div>
          <div className="banner">
            <img src="/how-it-works.jpg" alt="How It Works?" />
          </div>
        </div>
      </div>
    </div>
  );
}
