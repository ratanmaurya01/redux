
import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import FeatureCard from './FeatureCard'; // Adjust the import path as necessary


const data = [
    {
        icon: (
            <div className="text-4xl">
                <TbTruckDelivery />
            </div>
        ),
        title: "Free Shipping",
        desc: "Get free shipping on all orders over $50"
    },
    {
        icon: (
            <div className="text-4xl">
                <RiRefund2Fill />
            </div>
        ),
        title: "Easy Returns",
        desc: "Hassle-free returns within 30 days"
    },
    {
        icon: (
            <div className="text-4xl">
                <TbDiscount />
            </div>
        ),
        title: "Best Discounts",
        desc: "Amazing discounts on  $99.0"
    },
    {
        icon: (
            <div className="text-4xl">
                <MdSupportAgent />
            </div>
        ),
        title: "24/7 Support",
        desc: "Customer support available 24/7"
    }
];

// const data = [
//     {
//         icon: <TbTruckDelivery className="text-4xl" />,
//         title: "Free Shipping",
//         desc: "Get free shipping on all orders over $50"
//     },
//     {
//         icon: <RiRefund2Fill className="text-4xl" />,
//         title: "Easy Returns",
//         desc: "Hassle-free returns within 30 days"
//     },
//     {
//         icon: <TbDiscount className="text-4xl" />,
//         title: "Best Discounts",
//         desc: "Amazing discounts on  $99.0"
//     },
//     {
//         icon: <MdSupportAgent className="text-4xl" />,
//         title: "24/7 Support",
//         desc: "Customer support available 24/7"
//     }
// ];

const Feature = () => {
    return (
        <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {data.map((item) => (
                <FeatureCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    );
};

export default Feature;
