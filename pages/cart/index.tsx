import Navbar from "../../component/Navbar/index";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/Slice/CartSlice";
import { useAppSelector } from "@/redux/Store/hooks";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.cart);

  const handleRemove = (_id: any) => {
    dispatch(remove(_id));
  };

  return (
    <div>
      <Navbar />
      <h3>Cart</h3>
      <div>
        {products?.map((product: any) => {
          return (
            <div>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => handleRemove(product?.id)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
