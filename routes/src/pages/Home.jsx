import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  return (
    <div>
      <Header text="Home Page" name="oops" />
      <Main name="main-component" liveth="24">
        <>
          <div>test</div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, ad.
            </li>
            <li>
              Cupiditate ad libero alias perferendis provident, voluptatem
              temporibus magni amet?
            </li>
          </ul>
        </>
      </Main>

      <Footer />
    </div>
  );
};

export default Home;
