import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [covidError, setCovidError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCovidError("FUCK!");
    }, 2000);
  });

  if (covidError === "FUCK!") {
    return (
      <div className={styles.container}>
        <Head>
          <title>covid19 xgy 8bv4 TCM</title>
          <meta
            name="description"
            content="Thomas Constantine Moore (v91) Support"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.flex_container}>
          <div className={styles.main_container}>
            <main className={styles.main}>
              <h1 className="site-title">5vidxf xgy 8bv4 TCM</h1>

              <h1>519 Error</h1>
              <h2 className="blinking">A Virus Has Been Detected!</h2>
            </main>
          </div>
        </div>
        <div className="side">
          <div className={styles.pic}>
            <Image
              className="skewed"
              src="/virus.png"
              alt="Confused Thomas"
              width="400px"
              height="300px"
              loading="eager"
              layout="fixed"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Support for your TCM</title>
        <meta
          name="description"
          content="Thomas Constantine Moore (v91) Support"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.flex_container}>
        <div className={styles.main_container}>
          <main className={styles.main}>
            <h1 className="site-title">Support for your TCM</h1>
            <h1>HELP!</h1>
            <h2>My Thomas is malfunctioning!</h2>
            <div>
              <p>
                <em>{`"Thomas isn't working!" "There's something wrong with Thomas!"`}</em>{" "}
                {`We've heard this before.`}{" "}
                {`Below, you'll find some helpful troubleshooting tips.`}
              </p>
              <p>
                <strong> 1. Thomas is freaking out for no reason!</strong>
              </p>

              <p>
                Check out some of the tips below... if all else fails, he might
                need a nap!
              </p>
              <p>
                <strong>
                  {" "}
                  2. {`Thomas keeps grumbling about how his 'arms feel weird'.`}
                </strong>
              </p>

              <p>
                {`Thomas's arms feel weird when he hasn't exercised in a while.`}
              </p>
              <p>Try telling him to go on a run (or do some pushups)!</p>

              <p>
                <strong>
                  {" "}
                  3. Thomas is in a bad mood for no apparent reason.
                </strong>
              </p>

              <p>
                Remember R.E.D! “Have you gone for a <strong>RUN?</strong>”
                “Have you <strong>EATEN</strong>?” “When was the last time you{" "}
                <strong>DRANK</strong> water?”
              </p>

              <p>
                <strong>
                  {" "}
                  4. Thomas started crying and freaking out while on a trip!
                </strong>
              </p>

              <p>
                {`Thomas's mental health is tightly bound to his sense of control over his environment.`}
              </p>
              <p>
                Unfortunately, if this happens, you may just need to send your
                Thomas back.
              </p>
            </div>
          </main>
        </div>
        <div className="side">
          <div className={styles.pic}>
            <Image
              src="/help_computer.png"
              alt="Confused Thomas"
              width="400px"
              height="300px"
              loading="eager"
              layout="fixed"
            />
          </div>
        </div>
      </div>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
