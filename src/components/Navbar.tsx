import { CiSearch } from "react-icons/ci";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Make sure this path points to your store file
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";



interface Product {
    id: number;
    img: string;
    category: string;
    title: string;
    price: number;
}


function Navbar({ setShowCart, onOpenLogin }: any) {
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  const { username } = useSelector((state: RootState) => state.auth);
  const [searchTerm, setSearchTerm] = useState(''); // State to manage input value


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
};
  const handleSearchButton = () => {
    console.log(searchTerm);
  };

  return (
    <div className="pt-4 bg-white top-0 sticky  z-10">
      <div className="container">
        <div className="flex justify-between items-center navbar">
          <h1 className="text-4xl font-bold cursor-pointer">E-Shop</h1>
          <div className="lg:flex hidden w-full max-w-[500px]">
            <div className="relative w-full">
              <input
                className="border-2 border-red px-6 py-2 w-full rounded-md pr-10"
                type="text"
                placeholder="Search for Product..."
                value={searchTerm}
                onChange={handleInputChange}
                
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <div
                  className="text-[26px] text-gray-500"
                  onClick={handleSearchButton}
                >
                  <CiSearch />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 items-center">
            <div className="flex md:flex-row gap-3" onClick={onOpenLogin}>
              <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[40px] h-[40px] grid place-items-center cursor-pointer">
                <AiOutlineUser />
              </div>
              <div>
                <p className="text-gray-800 mt-2 cursor-pointer">
                  {username ? (
                    <div>
                      <h1> {username}</h1>
                    </div>
                  ) : (
                    <p> Login </p>
                  )}
                </p>
              </div>
            </div>

            <div
              className="text-gray-500 text-[32px] relative flex items-center"
              onClick={() => setShowCart(true)}
            >
              <div className="relative">
                <AiOutlineShoppingCart />
                <div
                  className="absolute top-[-10px] right-[-10px] bg-red-600
            w-[25px] h-[25px] rounded-full text-white text-[15px]
            grid place-items-center"
                >
                  {cartCount}
                </div>
              </div>
              <div className="ml-4 flex items-center">
                <p className="text-black text-[20px] cursor-pointer">Cart</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 pt-4" />
      </div>
    </div>
  );
}

export default Navbar;
