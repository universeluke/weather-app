import styles from "./Scene.module.scss";

interface SceneProps {
  conditions: string;
}

export default function Scene({ conditions }: SceneProps) {
  //IDEA: sunrise and sunset, depending on time, different positions, get angle from bottom 0 middle, draw circle and plot it
  //IDEA: when it's cold, smoke out chimney

  const stylesChange = {
    backgroundHill: {
      clearNight: { backgroundColor: "rgb(168, 202, 214)" },
      rainyNight: { backgroundColor: "rgba(164, 171, 173, 1)" },
      cloudyNight: { backgroundColor: "rgba(123, 154, 162, 1)" },
      snowyNight: { backgroundColor: "rgba(205, 205, 205, 1)" },
      clearDay: { backgroundColor: "rgba(168, 214, 183, 1)" },
      rainyDay: { backgroundColor: "rgba(199, 214, 204, 1)" },
      cloudyDay: { backgroundColor: "rgba(175, 203, 184, 1)" },
      snowyDay: { backgroundColor: "rgba(240, 240, 240, 1)" },
    },
    hill: {
      clearNight: { backgroundColor: "rgb(74, 144, 169)" },
      rainyNight: { backgroundColor: "rgba(103, 117, 122, 1)" },
      cloudyNight: { backgroundColor: "rgba(65, 99, 111, 1)" },
      snowyNight: { backgroundColor: "rgba(160, 160, 160, 1)" },
      clearDay: { backgroundColor: "rgba(74, 169, 133, 1)" },
      rainyDay: { backgroundColor: "rgba(144, 158, 153, 1)" },
      cloudyDay: { backgroundColor: "rgba(131, 163, 152, 1)" },
      snowyDay: { backgroundColor: "rgba(208, 208, 208, 1)" },
    },
    leftHill: {
      clearNight: { backgroundColor: "rgb(48, 100, 119)" },
      rainyNight: { backgroundColor: "rgba(55, 65, 69, 1)" },
      cloudyNight: { backgroundColor: "rgba(44, 65, 74, 1)" },
      snowyNight: { backgroundColor: "rgba(124, 124, 124, 1)" },
      clearDay: { backgroundColor: "rgba(48, 119, 91, 1)" },
      rainyDay: { backgroundColor: "rgba(111, 120, 115, 1)" },
      cloudyDay: { backgroundColor: "rgba(92, 110, 102, 1)" },
      snowyDay: { backgroundColor: "rgba(184, 184, 184, 1)" },
    },
    houseOnHill: {
      clearNight: { fill: "rgb(74, 144, 169)" },
      rainyNight: { fill: "rgba(103, 117, 122, 1)" },
      cloudyNight: { fill: "rgba(65, 99, 111, 1)" },
      snowyNight: { fill: "rgba(160, 160, 160, 1)" },
      clearDay: { fill: "rgba(74, 169, 133, 1)" },
      rainyDay: { fill: "rgba(144, 158, 153, 1)" },
      cloudyDay: { fill: "rgba(131, 163, 152, 1)" },
      snowyDay: { fill: "rgba(163, 163, 163, 1)" },
    },
    fireContainer: {
      clearNight: { opacity: 1 },
      rainyNight: { opacity: 1 },
      cloudyNight: { opacity: 1 },
      snowyNight: { opacity: 1 },
      clearDay: { opacity: 0 },
      rainyDay: { opacity: 0 },
      cloudyDay: { opacity: 0 },
      snowyDay: { opacity: 1 },
    },
  };

  return (
    <div>
      <div
        className={styles.backgroundHill}
        style={stylesChange.backgroundHill[conditions]}
      ></div>
      <div
        className={styles.leftHill}
        style={stylesChange.leftHill[conditions]}
      ></div>
      <div
        className={styles.houseOnHill}
        style={stylesChange.houseOnHill[conditions]}
      >
        <svg
          className={styles.house}
          viewBox="0 0 512 512"
          width="100"
          height="100"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M395.141,193.75V90.781h-47.703v55.266l-53.375-53.391L256,54.625l-38.063,38.031L0,310.609l38.063,38.063   l41.813-41.828v150.531h352.25V306.844l41.813,41.828L512,310.609L395.141,193.75z M245.578,396.719h-54.484v-54.5h54.484V396.719z    M245.578,321.063h-54.484v-54.5h54.484V321.063z M320.906,396.719h-54.484v-54.5h54.484V396.719z M320.906,321.063h-54.484v-54.5   h54.484V321.063z"
          />
        </svg>
        <div
          className={styles.hill}
          style={stylesChange.hill[conditions]}
        ></div>
        <div className={styles.smoke}></div>
        <div
          className={styles.fireContainer}
          style={stylesChange.fireContainer[conditions]}
        >
          <div className={styles.fireGlow}></div>
          <div className={styles.fireGlow}></div>
          <div className={styles.fireGlow}></div>
          <div className={styles.fireGlow}></div>
        </div>
      </div>
    </div>
  );
}
