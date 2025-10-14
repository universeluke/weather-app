import styles from "./Scene.module.scss";

export default function Scene() {
  //IDEA: sunrise and sunset, depending on time, different positions, get angle from bottom 0 middle, draw circle and plot it
  //IDEA: when it's cold, smoke out chimney
  return (
    <div>
      <div className={styles.backgroundHill}></div>
      <div className={styles.leftHill}></div>
      <div className={styles.houseOnHill}>
        <svg
          className={styles.house}
          viewBox="0 0 512 512"
          width="100"
          height="100"
          fill="rgb(74, 144, 169)"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M395.141,193.75V90.781h-47.703v55.266l-53.375-53.391L256,54.625l-38.063,38.031L0,310.609l38.063,38.063   l41.813-41.828v150.531h352.25V306.844l41.813,41.828L512,310.609L395.141,193.75z M245.578,396.719h-54.484v-54.5h54.484V396.719z    M245.578,321.063h-54.484v-54.5h54.484V321.063z M320.906,396.719h-54.484v-54.5h54.484V396.719z M320.906,321.063h-54.484v-54.5   h54.484V321.063z"
          />
        </svg>
        <div className={styles.hill}></div>
        <div className={styles.smoke}></div>
        <div className={styles.fireContainer}>
          <div className={styles.fireGlow}></div>
          <div className={styles.fireGlow}></div>
          <div className={styles.fireGlow}></div>
          <div className={styles.fireGlow}></div>
        </div>
      </div>
    </div>
  );
}
