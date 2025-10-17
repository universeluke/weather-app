import styles from "./Thermometer.module.scss";

interface ThermometerProps {
  temperature: number;
}

export default function Thermometer({ temperature }: ThermometerProps) {
  //   console.log(temperature);
  const thermometerHeight = 75 - temperature * 2;
  //   console.log(thermometerHeight);
  return (
    <div className={styles.thermometerContainer}>
      <div className={styles.thermometerBulb}></div>
      <div className={styles.thermometerStickBorder}></div>
      <div className={styles.thermometerStickGradientContainer}>
        {" "}
        <div
          className={styles.thermometerStickGradient}
          style={{ height: `${thermometerHeight}px` }}
        ></div>
      </div>
    </div>
  );
}
