import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/Home.module.css";
import { add } from "../../redux/Slice/CartSlice";

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
    console.log(data);

    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {product?.map((data) => {
        return (
          <div>
            <img src={data.image} alt="" />
            <h4>{data.title}</h4>
            <h5>{data.price}</h5>
            <button onClick={() => handleAdd(data)} className={styles.btn}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
