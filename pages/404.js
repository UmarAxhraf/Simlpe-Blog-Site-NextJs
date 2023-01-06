import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     // router.go(-1)
  //     // router.go(1)
  //     router.push("/");
  //   }, 9000);
  // }, []);

  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        {" "}
        Go to
        <Link href="/">
          <a className="btn"> Homepage</a>
        </Link>{" "}
        {/* in 10 seconds... */}
      </p>
    </div>
  );
};

export default NotFound;
