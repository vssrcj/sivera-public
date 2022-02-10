import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sivera</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>
          Welcome to{' '}<strong> Sivera </strong>          
        </h1>
        <h2>სივერა</h2>
        <p>
          We will be online soon.  Please contact us on <a href="mailto:info@sivera.ge">info@sivera.ge</a> if you have any queries.
        </p>
      </main>
    </div>
  )
}
