export default function Description() {
    return (
        <section className="w-full bg-white mt-20 mb-10">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-row items-center justify-between">

                <div className="relative flex-1 flex justify-center items-center">
                    <img
                        src="/circles.png"
                        alt="circles"
                        className="absolute left-[-350px] top-1/2 -translate-y-1/2 w-[400px] "
                    />
                </div>

                <div className="flex-1">
                    <h1 className="text-5xl font-semibold leading-normal text-black">
                        Find Match Now and Develop Your Feelings
                    </h1>

                    <p className="mt-8 text-[#959393] text-base leading-8">
                        There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful and we have it all to get you to be successful.
                    </p>

                    <button className="mt-10 rounded-xl bg-[#FF725E] px-4 py-3 text-base text-white transition-all duration-300 hover:bg-white hover:text-[#FF725E] hover: border border-[#FF725E]">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
}