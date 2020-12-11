import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

export interface StarProps {
  color?: string;
  width?: number;
}

export default function Star({ color = "#808080", width = 1 }: StarProps) {
  return (
    <div
      className={styles.root}
      style={{
        width: width < 1 ? `${Math.ceil(20 * width * 100) / 100}px` : null,
      }}
    >
      <div className={styles.inner} style={{ backgroundColor: color }}>
        <FontAwesomeIcon color="white" icon={faStar} size="xs" />
      </div>
    </div>
  );
}
