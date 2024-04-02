"use client";
import CircleLoader from "react-spinners/CircleLoader";

const LoadingPage = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <CircleLoader
      color="#36d7b7"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      speedMultiplier={1}
    />
  );
};

export default LoadingPage;
