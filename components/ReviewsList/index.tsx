import StarCount from "../StarCount";
import toTitleCase from "../../utils/toTitleCase";
import { ReviewsHashMap, Companies } from "../../pages";
import styles from "./index.module.scss";

export interface ReviewsListProps {
  reviews: ReviewsHashMap;
  companies: Companies;
}

export default function ReviewsList({ reviews, companies }: ReviewsListProps) {
  return (
    <ul className={styles.root}>
      {Object.entries(reviews).map(([name, reviewValue]) => {
        if (!reviewValue) return null;

        const { reviews, stars, url } = reviewValue;
        const normalizedStarValue = stars ?? 0;
        const titleCasedName = toTitleCase(name);
        const captionText = !!reviews
          ? `${normalizedStarValue} from ${reviews} ${
              reviews > 1 ? "reviews" : "review"
            }`
          : "No reviews";

        return (
          <li key={name} className={styles.item}>
            <a
              className={styles.inner}
              href={url}
              rel="nofollow"
              target="_blank"
              title={titleCasedName}
            >
              <div className={styles.image}>
                <img
                  alt={titleCasedName}
                  className={styles.logo}
                  src={companies?.[name]?.logoURL}
                  width={90}
                />
              </div>
              <StarCount
                color={companies?.[name]?.color}
                value={normalizedStarValue}
              />
              <div className={styles.caption}>{captionText}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
