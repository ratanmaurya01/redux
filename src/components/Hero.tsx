
function Hero() {
    return (
        <div className='bg-[#E3EDF6]'>
            <div className='container grid md:grid-cols-2 py-8'>
                <div className='flex items-center'>
                    <div className="max-w-[450px] space-y-4">
                        <p className='text-topHeadingSecondary'>
                            Starting At <span className='font-bold'>$999.00</span>
                        </p>
                        <h2 className='text-topHeadingPrimary font-bold text-4xl md:text-5xl animate-slideIn'>
                            The best notebook collection 2024
                        </h2>
                        <h3 className="text-2xl font-['Oregano, cursive']">
                         Exclusive Offer <span className='text-red-600'>This Week</span>
                        </h3>
                        <a className='inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white'
                            href='#'>Shop Now</a>
                    </div>
                </div>
                <div>
                    <img className='ml-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qb4GEm-xLi_4WQnZeBcumEq4tB3gj-dWsw&s" alt="Notebook collection"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;
