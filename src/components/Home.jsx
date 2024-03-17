import React from "react";
import "../CSS/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const images = [
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme2-yj07Z1Bi.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme6-DLTVTwGL.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme1-JDwmP6re.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme2-yj07Z1Bi.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme2-yj07Z1Bi.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme5-25quZxah.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme3-B4H9Q8NZ.png",
    },

    {
      img: "https://meme-token-gilt.vercel.app/assets/meme8-CQJUooap.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme2-yj07Z1Bi.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme2-yj07Z1Bi.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme5-25quZxah.png",
    },
    {
      img: "https://meme-token-gilt.vercel.app/assets/meme3-B4H9Q8NZ.png",
    },
  ];

  return (
    <div>
      <div className="main-container">
        <div className="Container">
          <div className="hero-image">
            <img
              src="https://meme-token-gilt.vercel.app/assets/uranus-BetmuAOr.jpeg"
              alt=""
            ></img>
          </div>

          <div className="section">
            <img
              src="https://meme-token-gilt.vercel.app/assets/29231-B1Z16x30.png"
              alt="null"
            />
            <h2>$URANUS</h2>
            <p>
              Uranus, the ruler of Aquarius, starts 2024 in retrograde, going
              direct on Saturday, January 27, then retrogrades again on Sunday,
              September 1. This suggests ongoing evolution in your home life and
              personal growth.
            </p>

            <p>
              Uranus champions individuality, social justice, and authenticity.
              During its retrograde, focus on living by your values and perhaps
              engage more actively in humanitarian efforts.
            </p>

            <p>
              In 2024, the location of the Sun on the March equinox is in the
              constellation of Pisces but also on the border of Aquarius.
            </p>

            <p>
              {" "}
              So, we are slowly moving into a new age, from Pisces to Aquarius.
              Aquarius is ruled by Uranus, the planet that governs innovation,
              technology, and surprising events. Uranus perfectly mirrors
              Aquarius' distinctive attitude, complementing the nontraditional
              nature of these visionary air signs
            </p>
            <ul>
              <li>
                Everyone Loves to Pump Uranus more than they like when Uranus
                Dumps.
              </li>
              <li>The liquidity injections just keep coming into Uranus.</li>
              <li>Don't pass gas (it's gonna be giant)</li>
              <li>Hold onto Uranus!</li>
              <li>
                Disclaimer: This is all in good fun - a blend of memes,
                astrology, and crypto. We will not go to the moon, we're going
                to Uranus.
              </li>
            </ul>
            <p>In Crypto We Trust, But In Uranus, We Believe!</p>
            <h4>The Memeifesto</h4>
            <p>
              Welcome to the wild side of crypto - where memes aren't just
              dreams, and astrology isn't just your daily horoscope.
            </p>
          </div>

          <div className="slider">
            <Slider {...settings}>
              {images.map((item, idx) => {
                return <img src={item.img} key={idx} alt="null" />;
              })}
            </Slider>
          </div>
        </div>

        <div className="Footer">
          <div className="links">
            <div className="partner">
              <p className="foot-heading">Partner</p>
            </div>

            <div className="resource">
              <p className="foot-heading">Resources</p>
            </div>
          </div>

          <p className="copyright">
            © 2024 Manish Nilkanth (nilkanthmanish0@gamil.com)
          </p>

          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              alt="null"
            />
            <img
              src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
              alt="null"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
              alt="null"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
