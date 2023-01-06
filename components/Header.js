import React from "react";
import Link from "next/link";
import Image from "next/image";
// import "../styles/style.css";

const Header = () => {
  return (
    <div className="container Header">
      <div id="branding">
        <Image src="/vercel.svg" alt="site logo" width={70} height={50} />
      </div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blogs</a>
        </Link>
        <Link href="/contact">
          <a className="hcontact">Contact Us</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
