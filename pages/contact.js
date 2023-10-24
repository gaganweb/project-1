import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import NavigationButton from './components/NavigationButton';

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
        Bond.
      </Link>
      <nav id="navigation">
      <NavigationButton />
        <ul className="main-menu">
        <li><Link href="/">
         Home
        </Link>
        </li>
          <li><Link href="/about">
         About
        </Link>
        </li>
          <li>
            <Link href="#">Portfolio</Link>
            <ul className="sub-menu">
              <li>
              <Link href="/2-columns">
                2 Columns
                </Link>
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
          <li><Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>

		<div class="container-full">

			<div class="hero-contact">
				<div class="hero-content">
					<h1>Bond</h1>
					<h2>get in touch with us</h2>
				</div>
			</div> 

			<div class="contact-us">
				<div class="container">
					<div class="contact-us-content">
						<p>
            At Bond Interiors, as a leading contracting company, we understand that each project is unique. With over 3 decades of experience in the industry, we have proudly served renowned names across various sectors, delivering exceptional results.
						</p>
					</div>
				</div>
			</div>
			
			<div class="contacts">

				<div class="container">

					<div class="contact-item">
						<span class="ti-location-pin contact-icon"></span>
						<h3>Our Address</h3>
						<p>Saih Shuaib 3, Dubai Industrial City, Dubai, UAE
Phone: 04 566 7720</p>
<p>Email: Info@bondinteriors.com</p>
<p>Business Hours:
Monday - Friday 7am to 4pm
</p>
					</div>

					<div class="contact-item">
						<span class="ti-email contact-icon"></span>
						<h3>email us</h3>
						<p>Info@bondinteriors.com</p>
					</div>

					<div class="contact-item">
						<span class="ti-mobile contact-icon"></span>
						<h3>phone us</h3>
						<p>+971 4 566 7720</p>
					</div>
					
					<div class="clearfix"></div>

				</div>

			</div>

		</div>

	</main>
  <footer>
    <div className="footer-content">
      <div className="container">
        <p className="copyright">
          <span className="fa fa-copyright" /> Bond Interiors
        </p>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/people/Bond-Interiors/100053255392607/">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/bondinteriors/">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/bond-interiors/">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" />
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
  )
}
