import React from "react"

import { FaInstagram } from "react-icons/fa"

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="navbar-header">
        <div className="social">
          <ul>
            <li>
              <a href="https://www.instagram.com/the_memory_mint_nft/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="contain" id="navBottom">
          <div className="logo">
            <a href="http://18.236.89.95/">
              <img src="img/logo.png" id="logo"></img>
            </a>
          </div>
          <div className="navbar-list">
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#contact" className="page-scroll">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
