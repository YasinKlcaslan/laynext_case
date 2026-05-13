import { FaStar } from "react-icons/fa";

export default function Comments() {
    const comments = [
        {
            name: "Tasha Wijayanti",
            country: "Curug",
            text: "This Bucheen is so cool, I found the partner I wanted and it's very easy to use and steady for Bucheen. Cheers and hopefully many other people can find their partner here.",
        },
        {
            name: "Sizuka Engkol",
            country: "Indonesia",
            text: "Very interesting services are provided to customers, access is very fast and we can also see the development of our partners and the information provided is accurate and genuine.",
        },
        {
            name: "Gundam Gandim",
            country: "Bulgaria",
            text: "It's crazy that this application can make me find my soul mate very easily and quickly. The information contained in this Bucheen is very accurate and really real, not a hoax.",
        },
    ];

    return (
        <section className="w-full bg-white mt-20 mb-16">
            <div className="mx-auto max-w-7xl items-center">

                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-black">
                        What Our Customers Have To Say
                    </h1>

                    <p className="mt-8 text-[#959393] text-base">
                        Here's what our customers say with Bucheen.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-10 mt-16">

                    {comments.map((comment, index) => (
                        <div key={index}
                            className={`rounded-3xl bg-white p-8 ${index === 1
                                ? "shadow-lg"
                                : "border border-[#959393]"
                                }`}>

                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-full bg-[#959393]"/>

                                <div>
                                    <h3 className="text-base font-semibold text-black">
                                        {comment.name}
                                    </h3>

                                    <p className="text-[#959393] text-sm mt-1">
                                        {comment.country}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-8 text-[#959393] text-base leading-6">
                                {comment.text}
                            </p>

                            <div className="flex items-center gap-2 mt-8 text-yellow-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}