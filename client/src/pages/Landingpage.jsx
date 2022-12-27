import React from "react";
import { HiMenu } from "react-icons/Hi";
import "./landingPage.scss";
const Landingpage = () => {
  return (
    <>
      <div className="main">
        <nav>
          <div className="logo">WealthUp</div>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu" className="menu-btn">
            <HiMenu className="menu-btn" />
          </label>
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#whywe">WhyWe</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a className="signin">SignIn </a>
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
            <button className="hero-signup">SignIn</button>
            <button className="signup">Register Now</button>
          </div>
          <img src="../../Assets/hero.png" alt="Hero" />
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
                Wealth management services help investors calculatedly and
                systematically create their corpus.
              </li>
              <li>
                Wealth managers come armed with t skills that help them
                understand client requirement and.
              </li>
            </ul>
          </div>
          <div className="leftSide">
            <img src="../../Assets/whywe.png" alt="whywe" />
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
                <img src="../../Assets/single.png" alt="" />
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
                <img src="../../Assets/multipal.png" alt="" />
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
                <img src="../../Assets/extramul.png" alt="" />
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
