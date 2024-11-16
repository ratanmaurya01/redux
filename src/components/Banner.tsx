const Banner = () => {
  return (
    <div className="container mt-20">
      <div className="grid lg:grid-cols-2 gap-4 pr-[15px]">
        <div
          className="h-[200px] w-[100%] md:h-[250px] bg-[url('https://w7.pngwing.com/pngs/815/461/png-transparent-technology-toy-technology-electronics-sale-banner-brand.png')] 
        bg-cover bg-center p-8 rounded-xl md:p-16 flex flex-col justify-end items-end"
        >
          <p className="text-topHeadingSecondary text-xl font-medium text-right">
            Sale 28% off all store
          </p>
          <h2 className="text-topHeadingPriamry font-bold text-xl sm:text-3xl max-w-[200px] text-right">
            SmartPhone BLU G91 Pro 2024 *
          </h2>
          <a
            className="inline-block mt-6 hover:text-accent text-topHeadingSecondary font-medium text-right"
            href="#"
          >
            Shop Now
          </a>
        </div>

        <div
          className="h-[100px] md:h-[250px] bg-[url('https://img.freepik.com/premium-vector/new-arrival-watch-sell-media-post-banner-design_621391-33.jpg')] 
        bg-cover bg-center rounded-xl md:p-16 bg-right p-8 rounded-xl hidden lg:block"
        ></div>
      </div>
    </div>
  );
};

export default Banner;
