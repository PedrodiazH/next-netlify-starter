import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      /*<Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  */

      <main>
        <Header title="AUTOPOIESIS" />
        <p className="description">
          Capacidad de un sistema para reproducirse,conservar el equilibrio
          y observar de gran manera el atardecer de forma no caucásica. 
          También pueden hacer alusión a lo verde del pasto en ocasiones.
        </p>
      </main>

      <Footer />
    </div>
  )
}
