import React from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import NavigationButton from "./components/NavigationButton";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Title - Bond Interiors</title>
        <meta
          name="description"
          content="Bloom - Minimal and Clean Portfolio Template"
        />
        <link rel="stylesheet" href="./css/font-awesome.min.css" />
        <link rel="stylesheet" href="./css/themify-icons.css" />
        <link rel="stylesheet" href="./css/main.css" />
        <link rel="stylesheet" href="./css/responsive.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600%7CPoppins:600"
          rel="stylesheet"
        />
        <link rel="icon" href="assets/img/favicon.png" />
      </Head>
      <header>
        <div className="container">
          <Link href="/" className="logo">
            Gagan
          </Link>
          <nav id="navigation">
            <NavigationButton />
            <ul className="main-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="#">Portfolio</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/2-columns">2 Columns</Link>
                  </li>
                  <li>
                    <Link href="/3-columns">3 columns</Link>
                  </li>
                  <li>
                    <Link href="/4-columns">4 columns</Link>
                  </li>
                  <li>
                    <Link href="/single-project">single project</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container-full">
          <div className="hero-homepage">
            <div className="hero-content">
              <h1>Head</h1>
              <h2>Lorem Ipsum Net</h2>
            </div>
          </div>
          <div className="works_2-columns">
            <Link href="/single-project">
              <div className="works-item">
                <Image
                  src="/img/portfolio-items/img1.jpg"
                  alt="Landscape picture"
                  width={500}
                  height={500}
                />
                <div className="works-item-overlay">
                  <div className="works-item-info">
                    <h3 className="works-info-title">bunch magazine</h3>
                    <p className="works-info-category">print</p>
                  </div>
                </div>
              </div>
            </Link>
            <a href="single-project.html">
              <div className="works-item">
                <img src="/img/portfolio-items/img2.jpg" alt="..." />
                <div className="works-item-overlay">
                  <div className="works-item-info">
                    <h3 className="works-info-title">true blue</h3>
                    <p className="works-info-category">photoraphy</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="single-project.html">
              <div className="works-item">
                <img src="/img/portfolio-items/img3.jpg" alt="..." />
                <div className="works-item-overlay">
                  <div className="works-item-info">
                    <h3 className="works-info-title">mood magazine</h3>
                    <p className="works-info-category">print</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="single-project.html">
              <div className="works-item">
                <img src="/img/portfolio-items/img4.jpg" alt="..." />
                <div className="works-item-overlay">
                  <div className="works-item-info">
                    <h3 className="works-info-title">Bond</h3>
                    <p className="works-info-category">branding</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="single-project.html">
              <div className="works-item">
                <img src="/img/portfolio-items/img5.jpg" alt="..." />
                <div className="works-item-overlay">
                  <div className="works-item-info">
                    <h3 className="works-info-title">mason jar</h3>
                    <p className="works-info-category">packaging</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="single-project.html">
              <div className="works-item">
                <img src="/img/portfolio-items/img6.jpg" alt="..." />
                <div className="works-item-overlay">
                  <div className="works-item-info">
                    <h3 className="works-info-title">vinyl record</h3>
                    <p className="works-info-category">design</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="single-project.html">
              <div className="works-item">
                <img src="/img/portfolio-items/img1.jpg" alt="..." />
                <div className="works-item-overlay">
                  <div className="works-item-info">
                    <h3 className="works-info-title">wine bottle</h3>
                    <p className="works-info-category">packaging</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="single-project.html">
              <div className="works-item">
                <img src="/img/portfolio-items/img2.jpg" alt="..." />
                <div className="works-item-overlay">
                  <div className="works-item-info">
                    <h3 className="works-info-title">play me</h3>
                    <p className="works-info-category">development</p>
                  </div>
                </div>
              </div>
            </a>
            <div className="clearfix" />
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="container">
            <p className="copyright">
              <span className="fa fa-copyright" />
              Company Name
            </p>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <link rel="stylesheet" href="/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/css/themify-icons.css" />
      <link rel="stylesheet" href="/css/main.css" />
      <link rel="stylesheet" href="/css/responsive.css" />

      <Script src="/js/main.js"></Script>
    </>
  );
}
