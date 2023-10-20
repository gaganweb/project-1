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
					<h1>Bond Interiors</h1>
					<h2>get in touch with us</h2>
				</div>
			</div> 

			<div class="contact-us">
				<div class="container">
					<div class="contact-us-content">
						<p>
							We are always interested in new projects and ideas. If you have an interesting project in mind, do not hesitate to contact us and figure out how we can help.
						</p>
					</div>
				</div>
			</div>
			
			<div class="contacts">

				<div class="container">

					<div class="contact-item">
						<span class="ti-location-pin contact-icon"></span>
						<h3>visit us</h3>
						<p>Bloom st.123, Bloomtown, UA</p>
					</div>

					<div class="contact-item">
						<span class="ti-email contact-icon"></span>
						<h3>email us</h3>
						<p>bloom-studio@mail.com</p>
					</div>

					<div class="contact-item">
						<span class="ti-mobile contact-icon"></span>
						<h3>phone us</h3>
						<p>+ 3 097 123 456 789</p>
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
          <span className="fa fa-copyright" /> All Rights Reserved
        </p>
        <ul className="social-links">
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-behance" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-dribbble" />
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
