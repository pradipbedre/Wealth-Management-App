import React, { useState } from "react";
import { HiMenu } from "react-icons/Hi";
import "./landingPage.scss";
import hero from "../../Assets/hero.png";
import whywe from "../../Assets/whywe.png";
import singleUser from "../../Assets/single.png";
import multipalUser from "../../Assets/multipal.png";
import extraMultipalUser from "../../Assets/extramul.png";
import { Link } from "react-router-dom";
const Landingpage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="main">
        <nav>
          <div className="logo">WealthUp</div>
          <input
            type="checkbox"
            id="menu"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="menu" className="menu-btn">
            <HiMenu className="menu-btn" />
          </label>
          <ul>
            <li>
              <a href="#hero" onClick={handleCheckboxChange}>
                Home
              </a>
            </li>
            <li>
              <a href="#whywe" onClick={handleCheckboxChange}>
                WhyWe
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={handleCheckboxChange}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={handleCheckboxChange}>
                Testimonial
              </a>
            </li>
            <li>
              <Link to="/signin">
                <a className="signin">SignIn </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div id="hero">
          <h1 className="heading">The road to financial freedom starts here</h1>
          <div className="subheading">
            <p>
              Best wealth management service ,what we do is about more than
              money, it's about helping
              <br /> our clients build confidence and security for their future
            </p>
            <Link to="/signin">
              <button className="hero-signin">SignIn</button>
            </Link>

            <Link to="/signup">
              <button className="signup">Register Now</button>
            </Link>
          </div>
          <img src={hero} alt="Hero" />
        </div>
        <section id="whywe">
          <div className="rightSide">
            <h1 className="heading">Why WealthUp?</h1>
            <ul>
              <li>
                Wealth management services help investors calculatedly and
                systematically create their corpus.
              </li>
              <li>
                Wealth managers come armed with skills that help them understand
                client requirement and financial goals.
              </li>
              <li>
                Once you're aware of how much you're spending, an Expense
                manager lets you build upon a clear monthly budget.
              </li>
              <li>
                Request for a customized report of your spending & expenses and
                keep a close eye on your everyday money.
              </li>
            </ul>
          </div>
          <div className="leftSide">
            <img src={whywe} alt="whywe" />
          </div>
        </section>
        <section id="pricing">
          <h1 className="heading">Free plan includes free for individual</h1>
          <p className="subheding">
            No credit card needed , you can use UPI sign up today.{" "}
          </p>
          <div className="plans">
            <div className="hoverplan">
              <div className="plan">
                <img src={singleUser} alt="" />
                <p className="text1">PLUS</p>
                <p className="text2">For individual</p>
                <p className="text3">Free</p>
                <ul>
                  <li>only for one user</li>
                  <li>able to upload file less than 5 mb</li>
                  <li>accepting multipal payment option</li>
                </ul>
              </div>
            </div>
            <div className="hoverplan">
              <div className="plan">
                <img src={multipalUser} alt="" />
                <p className="text1">PREMIUM</p>
                <p className="text2">For 10 People</p>
                <p className="text3">30$</p>
                <ul>
                  <li>only for one user</li>
                  <li>able to upload file less than 5 mb</li>
                  <li>accepting multipal payment option</li>
                </ul>
              </div>
            </div>
            <div className="hoverplan">
              <div className="plan">
                <img src={extraMultipalUser} alt="" />
                <p className="text1">TEAM</p>
                <p className="text2">For individual</p>
                <p className="text3">Custom pricing</p>
                <ul>
                  <li>only for one user</li>
                  <li>able to upload file less than 5 mb</li>
                  <li>accepting multipal payment option</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <h1>Testimonials</h1>
          <p>See our users view</p>

          <div className="slide-container">
            <div className="slide">
              <h3>Jhon Doe</h3>
              <p>
                " Best Wealth management app which will help you to track fixed
                Assets expenses and income sources it is good."
              </p>
            </div>
            <div className="slide">
              <h3>Pradip Bedre</h3>
              <p>
                " he goal of wealth management is to help you achieve financial
                security and grow and protect your wealth."
              </p>
            </div>
            <div className="slide">
              <h3>Sachin Jaha</h3>
              <p>
                " Because of this app i am able to track all expenses so it is
                good to manage the expenses and income so use WealthUp"
              </p>
            </div>
            <div className="slide">
              <h3>Sandeep More</h3>
              <p>
                "Too good app i am happy with is it manage wealth and gives us
                income expense breakdown best all ever seen"
              </p>
            </div>
          </div>
        </section>
      </div>
      <section id="footer">
        <div className="copyright">
          <h1>WealthUp</h1>
          <p>© Copyright 2022, All Rights Reserved | WealthUp</p>
        </div>
        <div className="features">
          <h1>Features</h1>
          <p>Wealth Management</p>
          <p>Grow Your Wealth</p>
        </div>
        <div className="company">
          <h1>Company</h1>
          <p>
            <a href="">About Us</a>
          </p>
          <p>
            <a href="">Contact Us</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Landingpage;
