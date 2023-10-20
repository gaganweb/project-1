// NavigationButton.js
import React, { useState } from 'react';
import Link from 'next/link';

function NavigationButton() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className="nav-button">
      <span className="ti-menu" onClick={toggleNav} />
      {isNavOpen && (
        <div className="overlay" onClick={toggleNav}>
          <nav className="mobile-nav">
            <ul>
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
                <a href="/3-columns">3 columns</a>
              </li>
              <li>
                <a href="/4-columns">4 columns</a>
              </li>
              <li>
              <Link href="/single-project">single project</Link>
              </li>
            </ul>
          </li>
          <li><Link href="/contact">
          Contact
        </Link></li>
              {/* Other menu items */}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default NavigationButton;
