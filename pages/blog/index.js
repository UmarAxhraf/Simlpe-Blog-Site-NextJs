import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Next JS | Blogs</title>
        <meta name="keywords" content="Umar Ashraf" />
      </Head>
      <div className="indexbody">
        <h1>Blogs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      {data.slice(0, 10).map((curElem) => {
        return (
          <div key={curElem.id} className="ssr-styles indexbody">
            <h3>{curElem.id}</h3>
            <Link href={"/blog/" + curElem.id} key={curElem.id}>
              <h2 className="single">{curElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;
