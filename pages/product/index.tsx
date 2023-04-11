import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/Home.module.css";
import { add } from "../../redux/Slice/CartSlice";
import CardSkeleton from "@/component/LoaderSkeleton/cardSkeleton";

export default function Products() {
  type data = [
    {
      image: any;
      title: any;
      price: any;
    }
  ];

  const [product, setProduct] = useState<data>();
  const dispatch = useDispatch();

  const handleAdd = (data: any) => {
    dispatch(add(data));
  };
  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-9 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[640px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:flex items-center justify-center flex-wrap max-[500px]:px-8 max-[375px]:px-5">
        {product?.map((data) => {
          return (
            <>
              <div className="max-w-sm overflow-hidden border-2 marker:border-blue-500 rounded-2xl pt-5 max-[500px]:max-w-xs max-[500px]:min-w-full">
                <img className="w-auto h-52 m-auto" src={data.image} alt="Product Image" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 truncate text-center">{data.title}</div>
                  <p className="text-gray-700 text-center text-2xl">
                    {data.price}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex items-center justify-center">
                  <button onClick={() => handleAdd(data)} className="bg-slate-400 rounded-xl text-neutral-100 px-3 py-2">
                    Add to cart
                  </button>
                </div>
              </div>
              <CardSkeleton />
            </>
          );
        })}
      </div >
    </>
  );
}
