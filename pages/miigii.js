import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Miigii({ data }) {
  let dataTemp = `{"records":[{"id":"recbSDgeBuTA69yl0","fields":{"about":"jaa","audiomack":"rise","title":"Rise","cover":[{"id":"attyVnPVWTA2JG1Qf","url":"https://dl.airtable.com/.attachments/c27084761f49a62073f81f04ebf1bfaf/4f12361b/2020.jpg","filename":"2020.jpg","size":3152360,"type":"image/jpeg","thumbnails":{"small":{"url":"https://dl.airtable.com/.attachmentThumbnails/aaf0ff9b66b1fb5d181d95879f3db189/0e9561ed","width":36,"height":36},"large":{"url":"https://dl.airtable.com/.attachmentThumbnails/b2e6ca3dc5e9b28c87a35184123c3837/0a3a3bcd","width":512,"height":512},"full":{"url":"https://dl.airtable.com/.attachmentThumbnails/2779c063b66da6a753cd7d7658e119d1/177e5d24","width":3000,"height":3000}}}]},"createdTime":"2021-03-10T13:41:34.000Z"},{"id":"recvs7xlySMXPChAD","fields":{"about":"joo","audiomack":"12684359","title":"Here We Go","cover":[{"id":"attltrtUHhdh2R0DH","url":"https://dl.airtable.com/.attachments/15873bed9fb9912e9168a69d0ddd60d7/cc2c0020/herewego.jpg","filename":"herewego.jpg","size":97018,"type":"image/jpeg","thumbnails":{"small":{"url":"https://dl.airtable.com/.attachmentThumbnails/4dc5f2a04bd8ac9c56afe6bbddc5707b/4bc9889e","width":36,"height":36},"large":{"url":"https://dl.airtable.com/.attachmentThumbnails/ef7fe0baf14ac0ed33d71625f4d045e8/637f938d","width":512,"height":512},"full":{"url":"https://dl.airtable.com/.attachmentThumbnails/0c817906019a54b9e692a4d8d61277b5/8024531c","width":3000,"height":3000}}}]},"createdTime":"2021-03-10T13:41:34.000Z"}]}`;
  let dataObj = JSON.parse(dataTemp);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <ul>
            {dataObj.records.map((e) => {
              return (
                <>
                  <h1>{e.fields.title}</h1>
                  {e.fields.cover
                    ? e.fields.cover.map((f) => {
                        return <img src={f.thumbnails.large.url}></img>;
                      })
                    : null}
                  <iframe
                    src={`https://audiomack.com/embed/song/miigii/${e.fields.audiomack}?`}
                    scrolling="no"
                    width="100%"
                    height="200"
                    scrollbars="no"
                    frameborder="0"
                  ></iframe>
                </>
              );
            })}
          </ul>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
}
/*
export async function getStaticProps({ params }) {
  console.log(process.env.api_key);
  const res = await fetch(
     `https://api.airtable.com/v0/appvWjkNwxwdONFnS/Table%201?api_key=${process.env.api_key}`
  );

  const data = await res.json();

  return {
    props: {
      data: data.records,
    },
  };
}
*/
