import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">INFLUCARD</Link>
      <div className="icons">
        <ion-icon name="headset-outline"></ion-icon>
        setting
        {/* <ion-icon name="person-outline"></ion-icon> */}
      </div>
    </nav>
  );
};

export default Navbar;
