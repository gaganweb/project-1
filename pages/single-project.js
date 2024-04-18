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
        <title>New HTML</title>
        <meta
          name="description"
          content="Bond - Minimal and Clean Portfolio Template"
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
        <div class="container">
          <div class="single-project">
            <a href="#" class="tag">
              design,
            </a>
            <a href="#" class="tag">
              branding
            </a>
            <h1>Glass & Stone</h1>
            <Image
              src="/img/single-project/img1a.jpg"
              alt="Landscape picture"
              class="img-responsive"
              width={2400}
              height={null}
            />

            <div class="single-project-info">
              <h2>About Project</h2>
              <p>
                Chocolate sugar plum candy chocolate apple pie cheesecake sweet.
                Candy sweet danish lemon drops chupa chups fruitcake chocolate
                cake brownie jelly beans. Jelly jujubes tootsie roll gummies
                icing sweet roll lollipop icing. Jelly beans gummi bears pastry
                candy canes halvah cupcake sweet roll dragée donut jujubes.
              </p>
            </div>

            <Image
              src="/img/single-project/img2.jpg"
              alt="Landscape picture"
              class="img-responsive"
              width={2400}
              height={null}
            />

            <div class="single-project-info">
              <h2>/ design process</h2>
              <p>
                Powder tiramisu wafer oat cake. Chupa chups jelly-o jelly beans
                tootsie roll pastry jelly-o jujubes donut chocolate cake.
                Liquorice cake carrot cake cake icing. Cheesecake cheesecake
                macaroon tart jelly beans danish tart tootsie roll chocolate
                cake. Cupcake fruitcake cheese topping danish. Candy canes tart
                cookie toffee cookie. Candy canes donut cheesecake ice.
              </p>
              <p>
                Cupcake pastry jujubes fruitcake macaroon jujubes jelly-o tart
                bear claw. Jelly beans candy canes gingerbread carrot cake sweet
                roll macaroon bonbon chupa chups toffee. Toffee cake dessert
                topping cotton candy. Lollipop cake donut sweet roll toffee
                cotton candy sesame.
              </p>
            </div>

            <Image
              src="/img/single-project/img3.jpg"
              alt="Landscape picture"
              class="img-responsive"
              width={585}
              height={null}
            />
            <Image
              src="/img/single-project/img4.jpg"
              alt="Landscape picture"
              class="img-responsive"
              width={585}
              height={null}
            />

            <div class="clearfix"></div>

            <div class="single-project-info">
              <h2>/ solution & result</h2>
              <p>
                Cake marzipan sweet roll muffin candy caramels jujubes croissant
                toffee. Candy canes donut cheesecake ice cream cotton candy
                chocolate marshmallow. Bear cake soufflé liquorice soufflé icing
                cookie. Caramels candy carrot cake cookie candy oat cake tart
                bonbon jelly. Biscuit marshmallow tootsie roll cupcake chocolate
                sweet roll muffin powder.
              </p>
            </div>

            <Image
              src="/img/single-project/img5.jpg"
              alt="Landscape picture"
              class="img-responsive"
              width={1170}
              height={null}
            />
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="container">
            <p className="copyright">
              <span className="fa fa-copyright" /> Company Name
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
                <a href="https://www.linkedin.com/">
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
