import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFound: React.FC = () => {
  return (
    <div className="pt-16">
      <Header />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
