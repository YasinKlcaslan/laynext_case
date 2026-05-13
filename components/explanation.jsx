import {
    FiSearch,
    FiHeart,
    FiUser,
} from "react-icons/fi";

export default function Explanation() {
    const items = [
        {
            icon: <FiSearch size={24} />,
            text: "Find your dating relationship in app and waiting until you get a notification. Have a good relationship its started.",
        },
        {
            icon: <FiHeart size={24} />,
            text: "Dating with benefits and you redefine the expectations of a perfect relationship with your partner.",
        },
        {
            icon: <FiUser size={24} />,
            text: "Ideal relationship makes your online dating relationship run more smoothly using this app.",
        },
    ];

    return (
        <section className="w-full bg-white mt-20 mb-10">
            <div className="mx-auto max-w-7xl items-center gap-32 grid-cols-2 px-8">

                <div className="max-w-xl">
                    <h1 className="text-5xl font-semibold leading-normal text-black">
                        How It Works To Find Your Relationship
                    </h1>
                </div>

                <div className="mt-12 flex flex-col gap-14">

                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-8">
                            
                            <div className="w-[70px] h-[70px] rounded-full bg-[#ffdacb] flex items-center justify-center text-[#ff725e]">
                                {item.icon}
                            </div>

                            <p className="w-[450px] text-lg leading-8 text-[#959393]">
                                {item.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}