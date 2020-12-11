import clsx from "clsx";
import Star from "../Star";
import styles from "./index.module.scss";
import times from "../../utils/times";

export interface StarCountProps {
  color: string;
  value: number;
}

export default function StarCount({ color = "transparent", value }: StarCountProps) {
  const COUNT = 5;
  const roundedUpValue = Math.ceil(value);

  return (
    <div className={styles.root}>
      {roundedUpValue ? (
        <div className={clsx(styles.group, styles.actual)}>
          {times(roundedUpValue, (_, i) => {
            const isLastItem = i === roundedUpValue - 1;
            const fraction = 1 - roundedUpValue + value;

            return (
              <Star key={i} color={color} width={isLastItem ? fraction : 1} />
            );
          })}
        </div>
      ) : null}

      <div className={clsx(styles.group, styles.total)}>
        {times(COUNT, (_, i) => (
          <Star key={i} />
        ))}
      </div>
    </div>
  );
}
