import Header from "../components/Header";
import Table from "../components/Table";
import UrlInput from "../components/UrlInput";

const Home = () => {
  return (
    <>
      <section className="bg-emerald-600 py-10">
        <Header />
        <UrlInput />
      </section>
      <section>
        <Table />
      </section>
    </>
  );
};

export default Home;
