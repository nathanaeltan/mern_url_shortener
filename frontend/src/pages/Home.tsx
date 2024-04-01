import UrlInput from "../components/UrlInput"

const Home = () => {
  return (
    <section className="bg-emerald-600 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-emerald-100 sm:text-5xl md:text-6xl">
          MERN URL Shortener
        </h1>
      </div>

    </div>
    <UrlInput />
  </section>
  )
}

export default Home