export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="AUTOPOIESIS X" />
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
