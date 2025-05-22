import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\images\kite.png"
        header="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="
Learn more "
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />
      <RightSection 
        header="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
        url="Learn More"
        imageURL="media\images\console.png"
      />
      <LeftSection
        imageURL="media\images\coin.png"
        header="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore="Learn More"
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />
      <RightSection 
        header="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
        url="Kite Connect"
        imageURL="media\images\kiteConnect.png"
      />
      <LeftSection
        imageURL="media\images\varsity.png"
        header="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="Try Demo"
        learnMore="Learn More"
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />
      <Universe />
    </>
  );
}

export default ProductsPage;
