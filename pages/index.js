import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>NFTBank.ai | Portfolio</title>
        <meta name="title" content="NFTBank.ai | Portfolio" />
        <meta name="description" content="Portfolio - Search and manage Ethereum NFT portfolio on NFTBank." />
        <meta name="keywords" content="NFTBank, NFTBank.ai, NFT, Ethereum, portfolio, Nonfungible, analytics, digital collectibles, Portfolio management, Portfolio analytics" />

        <meta property="og:site_name" content="NFTBank.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solmii.github.io/seo-test" />
        <meta property="og:title" content="NFTBank.ai | Portfolio" />
        <meta property="og:description" content="Portfolio - Search and manage Ethereum NFT portfolio on NFTBank." />
        <meta property="og:image" content="https://storage.googleapis.com/nftbank-public/nftbank-public/default.png" />
        <meta property="og:image:secure_url" content="https://storage.googleapis.com/nftbank-public/nftbank-public/default.png" />
        <meta property="og:image:url"  content="https://storage.googleapis.com/nftbank-public/nftbank-public/default.png" />
        <meta property="og:image:type" content="image/png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://solmii.github.io/seo-test" />
        <meta property="twitter:title" content="NFTBank.ai | Portfolio" />
        <meta property="twitter:description" content="Portfolio - Search and manage Ethereum NFT portfolio on NFTBank." />
        <meta property="twitter:image" content="https://storage.googleapis.com/nftbank-public/nftbank-public/default.png" />
        <meta name="twitter:site" content={"@NFTbank_ai"} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
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
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
