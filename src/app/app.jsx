import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function App({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
