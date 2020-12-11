import Head from "next/head";
import ReviewsList from "../components/ReviewsList";
import companies from "../configs/companies.json";
import styles from "./index.module.scss";

export interface Review {
  reviews?: number;
  stars?: number;
  url: string;
}

export interface ReviewsHashMap {
  [companyName: string]: Review;
}

export interface ReviewsResponse {
  reviews: ReviewsHashMap;
}

export interface Companies {
  [companyName: string]: {
    color: string;
    logoURL: string;
  };
}

export async function getStaticProps() {
  try {
    const res = await fetch(`https://api.mocki.io/v1/3e299c44`);
    const data: ReviewsResponse = await res.json();

    if (!data) {
      return {
        props: {
          reviews: null,
        },
      };
    }

    return {
      props: {
        reviews: data.reviews,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        reviews: null,
        error,
      },
    };
  }
}

export default function App({ reviews }: ReviewsResponse) {
  return (
    <>
      <Head>
        <title>Bogdan Slovyagin: Hunted Test</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/4f7279db2c.js"
          crossOrigin="anonymous"
        />
      </Head>

      {reviews ? (
        <section className={styles.section}>
          <h2 className={styles.title}>About us</h2>
          <ReviewsList reviews={reviews} companies={companies} />
        </section>
      ) : null}

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          background-color: #f3f4f6;
          font-family: Open Sans, Helvetica, Arial, sans-serif;
        }
        
        body {
          margin: 2rem;
        }
      `}</style>
    </>
  );
}
