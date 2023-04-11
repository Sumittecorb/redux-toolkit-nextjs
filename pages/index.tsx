import Navbar from "../component/navbar";
import Products from "./product";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-5 text-center">
        <h2 className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white xl:text-4xl md:text-3xl sm:text-2xl max-[640px]:text-xl">Welcome to the toolkit store</h2>
        <h3 className="py-2 pl-3 pr-4 text-gray-900 rounded">Products</h3>
      </div>
      <div className="container mx-auto px-4">
        <Products />
      </div>
    </>
  );
}
