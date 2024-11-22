import Header from "../components/Header";
import Hero from "../components/Hero";
import LatestArticles from "../components/LatestArticles";
import Section2 from "../components/Section2";
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Section2 />
        <LatestArticles />
      </main>
    </div>
  );
};

export default Home;
