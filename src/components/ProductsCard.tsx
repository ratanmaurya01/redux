import {
  AiFillFilter,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/feature/cardSlice";
import toast from "react-hot-toast";

interface PropsType {
  id: number;
  img: string;
  category: string;
  title: string;
  price: number;
}

const ProductsCard = ({ id, img, category, title, price }: PropsType) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const payload = {
      id,
      img,
      title,
      price,
      quantity: 1,
    };
    dispatch(addToCart(payload));
    toast.success("Added to Cart");
  };

  return (
    <div className=" border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img
          className="inline-block "
          style={{ width: "150px", height: "150px" }}
          src={img}
          alt={title}
        />
      </div>
      <div className="px-8 py-4">
        <p className="text-gray-500 text-[14px] front-medium">{category}</p>
        <h2 className="front-medium">{title}</h2>
        <div className="mt-3 flex text=[#ffb21d] items-center ">
          <AiFillFilter />
          <AiFillFilter />
          <AiFillFilter />
          <AiFillFilter />
          <AiOutlineStar />
          <p className="text-black-200 text-[14px] ml-2"> (3 Review)</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h2 className="font-medium text-accent text-xl">${price}</h2>
          <div
            className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursur-pointer
      hover:bg-accent rounded-lg"
            onClick={addProductToCart}
          >
            <AiOutlineShoppingCart />
            Add To Cart
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
