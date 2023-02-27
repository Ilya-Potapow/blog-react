import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="error-page__header">
        <h1 className="error-page__title">404</h1>
        <h3 className="error-page__subtitle">Looks like you're lost</h3>
      </div>
      <div className="error-page__background">
        <div className="error-page__content-box">
          <p>The page you're looking for isn't available!</p>
          <Link to="/posts" className="error-page__link">
            Go back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
