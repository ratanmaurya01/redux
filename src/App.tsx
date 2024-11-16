import { useState } from "react";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import { store } from "./redux/store";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner";
import Foooter from "./components/Foooter";
import Cart from "./components/Cart";
import TrendingProducts from "./components/TrendinProducts";
import NewArrival from "./components/NewArrival";
import LoginDialog from "./login/LoginDialog ";
import ImageSlider from "./components/ImageSlider";

interface Credentials {
  username: string;
  password: string;
}

const slides = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Slide 2",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Slide 3",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Slide 4",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/296114/pexels-photo-296114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Slide 5",
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleLoginSubmit = (credentials: Credentials) => {
    console.log("Data Part ", credentials);
    handleCloseDialog();
  };

  return (
    <Provider store={store}>
      <Navbar setShowCart={setShowCart} onOpenLogin={handleOpenDialog} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <ImageSlider slides={slides} />
      <Feature />
      <TrendingProducts />
      <Banner />
      <NewArrival />
      <Foooter />
      <Toaster position="bottom-center" reverseOrder={false} />
      <LoginDialog
        isDialogOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleLoginSubmit}
      />
    </Provider>
  );
}

export default App;
