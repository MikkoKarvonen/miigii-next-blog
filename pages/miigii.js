import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Miigii({ data, covers }) {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <div>
            {data.map((e) => {
              return (
                <div key={e.fields.title}>
                  <h1>{e.fields.title}</h1>

                  {e.fields.album && (
                    <img
                      src={
                        covers.find((f) => f.name == e.fields.album).image[0]
                          .thumbnails.large.url
                      }
                    ></img>
                  )}

                  <iframe
                    src={`https://audiomack.com/embed/song/miigii/${e.fields.audiomack}?`}
                    scrolling="no"
                    width="100%"
                    height="200"
                    scrollbars="no"
                    frameBorder="0"
                  ></iframe>
                  <a href={`${e.spotify}`}>Spotify</a>
                </div>
              );
            })}
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.airtable.com/v0/appvWjkNwxwdONFnS/${process.env.song_key}?api_key=${process.env.api_key}`
  );
  const data = await res.json();

  const res2 = await fetch(
    `https://api.airtable.com/v0/appvWjkNwxwdONFnS/${process.env.album_key}?api_key=${process.env.api_key}`
  );
  const data2 = await res2.json();
  let albums = [];
  data2.records.map((e) => {
    let obj = {};
    obj.name = e.fields.Name;
    obj.image = e.fields.Attachments;
    albums.push(obj);
  });

  return {
    props: {
      data: data.records,
      covers: albums,
    },
  };
}
