import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import MainPage from "../../components/mainPage";
import Description from "../../components/description";
import Explanation from "../../components/explanation";
import Popular from "../../components/popular";
import Comments from "../../components/comments";

export default function Page() {
  return (
    <>
      <Navbar />
      <MainPage />
      <Description />
      <Explanation />
      <Popular />
      <Comments />
      <Footer />
    </>
  );
}