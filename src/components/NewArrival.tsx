
import ProductsCard from './ProductsCard'
import { motion } from 'framer-motion';
 
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
        price: "1200",
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/71pGjUwrUlL._AC_UF1000,1000_QL80_.jpg",
        category: "Tablet",
        title: "Apple iPad Pro",
        price: "600",
    },
];


const NewArrival = () => {

    return (

        <div className='container mt-32'>
            <div className='sm:flex justify-between items-center'>
                <h2 className='text-4xl font-medium'> New Arrival </h2>
            </div>
            <div className='grid gap-4 grid col-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
               
               {
                products.map((item)=>(

                    <motion.div
                    key={item.id}
                    className="border border-gray-100 "
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                     <ProductsCard 
                     key={item.id}
                     id={item.id}
                     img={item.img}
                     category={item.category}
                     title={item.title}
                     price={parseFloat(item.price)} // Convert to number
                    
                     />
                     </motion.div>
                ))
               }
            </div>
        </div>
    )

}


export default NewArrival;