import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className="title">
            <Link href="/miigii">
              <a>Miigii</a>
            </Link>
          </h1>
        </main>
      </div>
    </Layout>
  );
}
