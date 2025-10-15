import Scene from "./Scene";

interface WeatherProps {
  time: string;
}

export default function Weather({ time }: WeatherProps) {
  return <Scene time={time} />;
}
