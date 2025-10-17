import styles from "./Thermometer.module.scss";

export default function Thermometer() {
  return (
    <div className={styles.thermometerContainer}>
      <div className={styles.thermometerBulb}></div>
      <div className={styles.thermometerStickBorder}></div>
      <div className={styles.thermometerStickGradientContainer}>
        {" "}
        <div className={styles.thermometerStickGradient}></div>
      </div>
    </div>
  );
}
