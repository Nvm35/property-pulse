import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 classname="text-3xl">Welcome</h1>
      <Link href="/properties">Show Props</Link>
    </div>
  );
};

export default HomePage;
