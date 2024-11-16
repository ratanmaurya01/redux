import { useAppDispatch } from "../redux/hooks";
import { RxCross1 } from 'react-icons/rx';
import { removeFromCart } from "../redux/feature/cardSlice";

interface PropsType {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const CardProducrs: React.FC<PropsType> = ({ // corrected 'CardProducrs' to 'CardProduct'
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4"> 
        <img className="h-[80px]" src={img} alt={title} />
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity}x ${price}.00
          </p>
        </div>
      </div>

      <div 
        className="cursor-pointer" // Apply styling to the wrapper
        onClick={() => dispatch(removeFromCart(id))}
      >
        <RxCross1 />
      </div>
      
    </div>
  );
};

export default CardProducrs;