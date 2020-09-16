import styles from "./spinner.module.css";

interface SpinnerProps {
  size: number;
}

function Spinner({ size }: SpinnerProps) {
  return (
    <div
      className={`${styles.loader} rounded-full border-2 border-t-2 border-gray-200 h-${size} w-${size}`}
    ></div>
  );
}

export default Spinner;
