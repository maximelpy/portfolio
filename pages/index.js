import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
const TypeWriterEffect = dynamic(
  () => import('../utils/typeeffect.js'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>
              MAXIME LAPRAYE
            </h1>
            <TypeWriterEffect 
              textStyle={{
                fontFamily: 'Montserrat',
                color: 'rgb(0,0,0)',
                fontWeight: 400,
                fontSize: '0.7em',
                position: "relative",
              }}
              startDelay={2000}
              cursorColor="#3F3D56"
              loop={true}
              nextTextDelay={1000}
              typeSpeed={30}
              multiText={[
                'DIGITAL MARKETING CONSULTANT',
                'FRONT END DEVELOPER',
              ]}
            />
          </div>
          {/* <h2 className={styles.title}>
            DIGITAL MARKETING CONSULTANT
          </h2> */}
        </header>

        <div className={styles.menu}>
          <h1 className={styles.title}>
            PAID SEARCH
          </h1>
          <h1 className={styles.title}>
            ANALYTICS
          </h1>
          <h1 className={styles.title}>
            REPORTING
          </h1>
          <h1 className={styles.title}>
            TRAINING
          </h1>
          <h1 className={styles.title}>
            OPERATIONS
          </h1>
        </div>
{/* 
        <h1 className={styles.title}>
          COUCOU <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <h1 className={styles.title}>
          LET'S CONNECT
        </h1>
      </footer> */}
    </div>
  )
}
