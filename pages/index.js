import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS | Home</title>
        <meta name="keywords" content="Umar Ashraf" />
      </Head>
      <div>
        <div className="hero-image">
          <Image src="/weather.jpg" alt="site logo" width={1400} height={500} />
          <div className="hero-text">
            <h1 className="htext">I am Umar Ashraf</h1>
            <p className="htext">And I am a Developer || Blogger</p>
            {/* <button>Contact me</button> */}
            <Link href="/contact">
              <button>Contact me</button>
            </Link>
          </div>
        </div>
        <div className="indexbody">
          <h1>Home</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div>
            <h3>Lorem Ipsem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <h3>Lorem Ipsem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <h3>Lorem Ipsem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <h3>Lorem Ipsem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
