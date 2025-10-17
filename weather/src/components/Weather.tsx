import { useEffect, useState } from "react";
import Scene from "./Scene";
import styles from "./Weather.module.scss";

type WeatherCondition =
  | "clearDay"
  | "clearNight"
  | "rainyDay"
  | "rainyNight"
  | "cloudyDay"
  | "cloudyNight"
  | "snowyDay"
  | "snowyNight";

interface Star {
  top: number;
  left: number;
  delay: number;
}

interface Rain {
  left: number;
  delay: number;
  duration: number;
}

interface Snow {
  left: number;
  delay: number;
  duration: number;
}

interface WeatherProps {
  conditions: WeatherCondition;
}

export default function Weather({ conditions }: WeatherProps) {
  const [stars, setStars] = useState<Star[]>([]);
  const [rains, setRains] = useState<Rain[]>([]);
  const [snows, setSnows] = useState<Snow[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const generatedRain = Array.from({ length: 100 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: Math.random() * 2.5 + 2,
    }));
    setRains(generatedRain);
  }, []);

  useEffect(() => {
    const generatedSnow = Array.from({ length: 100 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 12.5,
      duration: Math.random() * 2.5 + 10,
    }));
    setSnows(generatedSnow);
  }, []);

  const stylesChange = {
    clouds: {
      clearNight: { opacity: "0" },
      rainyNight: { fill: "rgba(64, 65, 66, 1)" },
      cloudyNight: { fill: "rgba(92, 87, 97, 1)" },
      snowyNight: { fill: "rgba(205, 205, 205, 1)" },
      clearDay: { opacity: "0" },
      rainyDay: { fill: "rgba(141, 141, 141, 1)" },
      cloudyDay: { fill: "rgba(204, 205, 206, 1)" },
      snowyDay: { fill: "rgba(255, 255, 255, 1)" },
    },
    sky: {
      clearNight: "rgba(74, 51, 94, 1)",
      rainyNight: "rgba(79, 79, 79, 1)",
      cloudyNight: "rgba(67, 63, 76, 1)",
      snowyNight: "rgba(66, 65, 71, 1)",
      clearDay: "rgba(148, 172, 234, 1)",
      rainyDay: "rgba(175, 175, 175, 1)",
      cloudyDay: "rgba(147, 167, 180, 1)",
      snowyDay: "rgba(229, 229, 229, 1)",
    },
    sun: {
      clearNight: { opacity: "0" },
      rainyNight: { opacity: "0" },
      cloudyNight: { opacity: "0" },
      snowyNight: { opacity: "0" },
      clearDay: {
        opacity: "1",
        animation: "throb 2s ease-in-out infinite",
      },
      rainyDay: { opacity: "0" },
      cloudyDay: {
        opacity: "0.6",
        boxShadow: "0px 0px 80px 60px rgba(228, 222, 161, 1)",
      },
      snowyDay: { opacity: "0" },
    },
    starsContainer: {
      clearNight: { opacity: "1" },
      rainyNight: { opacity: "1" },
      cloudyNight: { opacity: "1" },
      snowyNight: { opacity: "1" },
      clearDay: { opacity: "0" },
      rainyDay: { opacity: "0" },
      cloudyDay: { opacity: "0" },
      snowyDay: { opacity: "0" },
    },
    rainContainer: {
      clearNight: { opacity: "0" },
      rainyNight: { opacity: "1" },
      cloudyNight: { opacity: "0" },
      snowyNight: { opacity: "0" },
      clearDay: { opacity: "0" },
      rainyDay: { opacity: "1" },
      cloudyDay: { opacity: "0" },
      snowyDay: { opacity: "0" },
    },
    rain: {
      clearNight: `none`,
      rainyNight: `linear-gradient(
    to top,
    rgba(134, 190, 255, 1),
    rgba(0, 136, 255, 0)
  )`,
      cloudyNight: `none`,
      snowyNight: `none`,
      clearDay: `none`,
      rainyDay: `linear-gradient(
    to top,
    rgba(36, 50, 63, 1),
    rgba(35, 49, 61, 0.26),
    rgba(61, 84, 106, 0)
  )`,
      cloudyDay: `none`,
      snowyDay: `none`,
    },
    snowContainer: {
      clearNight: { opacity: "0" },
      rainyNight: { opacity: "0" },
      cloudyNight: { opacity: "0" },
      snowyNight: { opacity: "1" },
      clearDay: { opacity: "0" },
      rainyDay: { opacity: "0" },
      cloudyDay: { opacity: "0" },
      snowyDay: { opacity: "1" },
    },
    moonInner: {
      clearNight: { backgroundColor: "rgba(74, 51, 94, 1)" },
      rainyNight: { backgroundColor: "rgba(79, 79, 79, 1)" },
      cloudyNight: { backgroundColor: "rgba(67, 63, 76, 1)" },
      snowyNight: { backgroundColor: "rgba(66, 65, 71, 1)" },
      clearDay: { backgroundColor: "rgba(148, 172, 234, 1)" },
      rainyDay: { backgroundColor: "rgba(175, 175, 175, 1)" },
      cloudyDay: { backgroundColor: "rgba(147, 167, 180, 1)" },
      snowyDay: { backgroundColor: "rgba(229, 229, 229, 1)" },
    },
    moonContainer: {
      clearNight: { opacity: "1" },
      rainyNight: { opacity: "0" },
      cloudyNight: { opacity: "1" },
      snowyNight: { opacity: "0" },
      clearDay: { opacity: "0" },
      rainyDay: { opacity: "0" },
      cloudyDay: { opacity: "0" },
      snowyDay: { opacity: "0" },
    },
  };

  document.body.style.backgroundColor = stylesChange.sky[conditions];

  return (
    <>
      <Scene conditions={conditions} />
      <div
        className={styles.moonContainer}
        style={stylesChange.moonContainer[conditions]}
      >
        <div className={styles.moonOuter}>
          <div
            className={styles.moonInner}
            style={stylesChange.moonInner[conditions]}
          ></div>
        </div>
      </div>
      <div className={styles.sun} style={stylesChange.sun[conditions]}></div>
      <div
        className={styles.starsContainer}
        style={stylesChange.starsContainer[conditions]}
      >
        {stars.map((star, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              top: `${star.top}vh`,
              left: `${star.left}vw`,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>
      <div
        className={styles.rainContainer}
        style={stylesChange.rainContainer[conditions]}
      >
        {rains.map((rain, i) => (
          <div
            key={i}
            className={styles.rain}
            style={{
              left: `${rain.left}vw`,
              animationDelay: `${rain.delay}s`,
              animationDuration: `${rain.duration}s`,
              background: `${stylesChange.rain[conditions]}`,
            }}
          ></div>
        ))}
      </div>
      <div
        className={styles.snowContainer}
        style={stylesChange.snowContainer[conditions]}
      >
        {snows.map((snow, i) => (
          <div
            key={i}
            className={styles.snow}
            style={{
              left: `${snow.left}vw`,
              animationDelay: `${snow.delay}s`,
              animationDuration: `${snow.duration}s`,
            }}
          ></div>
        ))}
      </div>
      <div className={styles.clouds1} style={stylesChange.clouds[conditions]}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="360"
            viewBox="0 0 1280 660"
          >
            <g transform="translate(0,500) scale(0.1,-0.1)" stroke="none">
              <path
                d="M7605 6499 c-573 -53 -1155 -289 -1615 -655 -121 -96 -402 -381 -491
-499 -305 -401 -504 -853 -579 -1310 l-11 -71 -130 -2 c-428 -6 -832 -152
-1184 -427 -44 -34 -89 -72 -99 -84 l-19 -21 -51 43 c-267 224 -576 337 -925
337 -479 0 -919 -233 -1176 -622 -21 -32 -41 -58 -44 -58 -4 0 -25 18 -46 40
-203 208 -560 243 -808 81 -299 -195 -417 -585 -281 -927 84 -211 274 -381
480 -430 180 -43 393 -1 532 103 18 14 35 23 37 22 2 -2 28 -53 59 -114 305
-601 1026 -895 1678 -685 51 16 93 28 93 27 1 -1 25 -47 54 -102 415 -787
1281 -1195 2155 -1014 287 60 589 204 826 396 97 78 261 248 329 341 30 39 58
72 63 72 4 0 43 -17 86 -39 784 -391 1725 -424 2535 -87 183 76 464 229 574
314 l33 24 124 -120 c417 -402 972 -567 1524 -452 492 103 924 435 1170 901
141 267 212 557 212 869 0 172 -18 314 -59 475 -201 775 -882 1323 -1648 1326
l-141 1 -17 76 c-44 202 -173 531 -288 737 -401 717 -1086 1244 -1882 1448
-169 44 -277 63 -455 82 -145 16 -466 18 -615 4z"
              />
            </g>
          </svg>
          <svg>
            <path d="M77.231,60.835c-2.99,8.104-13.403,11.033-20.179,4.738c-3.082,14.236-22.442,16.464-28.395,2.621  c-5.634,2.39-12.462-0.959-13.62-7.359C2.005,60.582,1.363,41.682,14.877,40.99C13.505,29.001,26.35,21.23,35.809,29.504  c3.082-14.236,22.442-16.464,28.395-2.621c4.63-2.073,10.543,0.188,12.655,4.553c1.064-0.241,2.171-0.369,3.308-0.369  C100.792,32.003,99.995,62.494,77.231,60.835z" />
          </svg>
        </div>
      </div>
      <div className={styles.clouds2} style={stylesChange.clouds[conditions]}>
        <div>
          <svg>
            <path d="M77.231,60.835c-2.99,8.104-13.403,11.033-20.179,4.738c-3.082,14.236-22.442,16.464-28.395,2.621  c-5.634,2.39-12.462-0.959-13.62-7.359C2.005,60.582,1.363,41.682,14.877,40.99C13.505,29.001,26.35,21.23,35.809,29.504  c3.082-14.236,22.442-16.464,28.395-2.621c4.63-2.073,10.543,0.188,12.655,4.553c1.064-0.241,2.171-0.369,3.308-0.369  C100.792,32.003,99.995,62.494,77.231,60.835z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="300"
            viewBox="0 0 1280 660"
          >
            <g transform="translate(0,500) scale(0.1,-0.1)" stroke="none">
              <path
                d="M7605 6499 c-573 -53 -1155 -289 -1615 -655 -121 -96 -402 -381 -491
-499 -305 -401 -504 -853 -579 -1310 l-11 -71 -130 -2 c-428 -6 -832 -152
-1184 -427 -44 -34 -89 -72 -99 -84 l-19 -21 -51 43 c-267 224 -576 337 -925
337 -479 0 -919 -233 -1176 -622 -21 -32 -41 -58 -44 -58 -4 0 -25 18 -46 40
-203 208 -560 243 -808 81 -299 -195 -417 -585 -281 -927 84 -211 274 -381
480 -430 180 -43 393 -1 532 103 18 14 35 23 37 22 2 -2 28 -53 59 -114 305
-601 1026 -895 1678 -685 51 16 93 28 93 27 1 -1 25 -47 54 -102 415 -787
1281 -1195 2155 -1014 287 60 589 204 826 396 97 78 261 248 329 341 30 39 58
72 63 72 4 0 43 -17 86 -39 784 -391 1725 -424 2535 -87 183 76 464 229 574
314 l33 24 124 -120 c417 -402 972 -567 1524 -452 492 103 924 435 1170 901
141 267 212 557 212 869 0 172 -18 314 -59 475 -201 775 -882 1323 -1648 1326
l-141 1 -17 76 c-44 202 -173 531 -288 737 -401 717 -1086 1244 -1882 1448
-169 44 -277 63 -455 82 -145 16 -466 18 -615 4z"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
