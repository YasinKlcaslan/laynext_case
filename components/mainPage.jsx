import Image from "next/image";

export default function MainPage() {
  return (
    <section className="bg-[#fef7f6] mt-32 mb-10">
      <div className="mx-auto grid grid-cols-2 max-w-7xl items-center gap-32 px-8 py-12">

        <div>
          <h1 className="text-6xl font-semibold leading-normal text-black">
            Find
            <span className="text-[#FF725E] font-bold"> Match Now </span>
            and Grow Your Feelings
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-loose text-[#959393]">
            There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful.
          </p>


          <div className="mt-12 inline-flex gap-4 rounded-3xl p-3 bg-white">
            <div className="flex items-center justify-between gap-16 px-3 py-3">
              <div>
                <p className="mt-1 text-base font-medium text-[#959393]">
                  Male
                </p>
              </div>

              <svg className="h-4 w-4 text-[#959393]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex items-center justify-center h-14 w-[1px] bg-black md:block"></div>

            <div className="flex items-center justify-between gap-16 px-3 py-3">
              <div>
                <p className="mt-1 text-base font-medium text-[#959393]">
                  Female
                </p>
              </div>

              <svg className="h-4 w-4 text-[#959393]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <button className="rounded-lg bg-[#FF725E] border border-white px-5 py-3 text-sm text-white transition-all duration-300 hover:bg-white hover:text-[#FF725E] hover:border-[#FF725E]">
              Find Now
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center py-2 gap-32">
          <Image
            src="/main_pic.png"
            alt="main"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </section>
  );
}