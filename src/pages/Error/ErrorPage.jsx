import React from "react";
import Navbar from "../../components/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen flex justify-center items-center">
        <h2>Something went wrong.</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
