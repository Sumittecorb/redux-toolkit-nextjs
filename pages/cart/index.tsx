import { useDispatch } from "react-redux";
import { remove } from "../../redux/Slice/CartSlice";
import { useAppSelector } from "@/redux/store/hooks";
import Navbar from "../../component/navbar";
import CardDetailsSkeleton from "@/component/LoaderSkeleton/cardDetailsSkeleton";


export default function Cart() {
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.cart);

  const handleRemove = (_id: any) => {
    dispatch(remove(_id));
  };

  return (
    <div>
      <Navbar />
      <h3 className="mt-7 text-4xl font-semibold whitespace-nowrap py-2 pl-3 pr-4 text-gray-900 rounded text-center xl:text-4xl md:text-3xl sm:text-2xl max-[640px]:text-xl">Cart</h3>
      <div className="container mx-auto px-4">
        {products?.map((product: any) => {
          return (
            <>
              <div className="grid grid-cols-2 mt-10">
                <div>
                  <img src={product.image} alt="" className="w-auto m-auto h-96" />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-2">{product.title}</h5>
                  <h5 className="text-gray-700 text-left text-2xl">{product.price}</h5>
                  <button onClick={() => handleRemove(product?.id)} className="bg-red-600 rounded-xl text-neutral-100 px-3 py-2 mt-8">Remove</button>
                </div>
              </div>
              <CardDetailsSkeleton />
            </>
          );
        })}
      </div>
    </div>
  );
}
