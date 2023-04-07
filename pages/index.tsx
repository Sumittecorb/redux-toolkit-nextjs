import Navbar from "@/component/Navbar";
import Products from "./product";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-5" style={{ textAlign: "center" }}>
        <h2>Welcome to the toolkit store</h2>
        <section>
          <h3>Products</h3>
          <div className="mt-5">
            <Products />
          </div>
        </section>
      </div>
    </>
  );
}
