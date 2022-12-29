import React from 'react'
import img from "../../../img/heroImg.png"
import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="heroText">
            <h1>Buy, Sell & Accept Digital Assets</h1>
            <p>Crypton is more than just a crypto trading platform it's best place to learn about cryptography</p>
            <div className="heroBtn">
                <h1 className="getStr">Get Started</h1>
                <h1 className="howIt">How it Works</h1>
            </div>
        </div>
        <img src={img} alt="Hero image" />
    </div>
  )
}

export default Hero