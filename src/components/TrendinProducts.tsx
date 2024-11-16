import ProductsCard from "./ProductsCard";
import { motion } from "framer-motion";

const products = [
  {
    id: 0,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Headphone",
    title: "Geming Headphone",
    price: "100",
  },
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Smartphone",
    title: "Samsung Galaxy S22",
    price: "800",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Laptop",
    title: "Apple MacBook Air",
    price: "900",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Tablet",
    title: "Apple iPad Pro",
    price: "600",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Smartwatch",
    title: "Apple Watch Series 7",
    price: "300",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Gaming Console",
    title: "PlayStation 5",
    price: "400",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Camera",
    title: "Canon EOS 80D",
    price: "800",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Headphone",
    title: "Sony WH-1000XM4",
    price: "300",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Smartphone",
    title: "Google Pixel 6",
    price: "600",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Laptop",
    title: "Dell XPS 13",
    price: "999",
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Tablet",
    title: "Samsung Galaxy Tab S8",
    price: "500",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Smartwatch",
    title: "Fitbit Versa 3",
    price: "200",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Gaming Console",
    title: "Xbox Series X",
    price: "500",
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
    category: "Camera",
    title: "Nikon D5600",
    price: "600",
  },
];




const TrendingProducts = () => {
  return (
    <div className="container mt-32">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Trending Products</h2>
        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black">New</div>
          <div>Features</div>
          <div>Top Sellers</div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
      {products.map((item) => (
          <motion.div
            key={item.id}
            className="border border-gray-100 z-0 gradient-border"
            whileHover={{ scale: 1.05 }}
          >
            <ProductsCard
              img={item.img}
              category={item.category}
              title={item.title}
              price={parseFloat(item.price)}
             
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
