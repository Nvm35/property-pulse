import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 classname="text-3xl">Welcome</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
};

export default page;
