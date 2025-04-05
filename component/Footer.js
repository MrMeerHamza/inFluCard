import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link href="/"><ion-icon name="home-outline"></ion-icon></Link>
      <Link href="/card-details"><ion-icon name="card-outline"></ion-icon></Link>
      <Link href="/brands"><ion-icon name="pricetags-outline"></ion-icon></Link>
      <Link href="/transactions"><ion-icon name="wallet-outline"></ion-icon></Link>
      <Link href="/favourites"><ion-icon name="star-outline"></ion-icon></Link>
    </footer>
  );
};

export default Footer;
