import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div id="welcome" className="w-full px-4 md:px-0">
      <Header />
      <main className="md:py-6">{children}</main>
      <Footer />
    </div>
  );
}
