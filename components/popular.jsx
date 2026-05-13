export default function Popular() {
    const cards = [
        {
            name: "Javar Saripun",
            image: "javar.png",
            description: "A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.",
        },
        {
            name: "Fausiah Fera",
            image: "fausiah.png",
            description: "Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.",
        },
        {
            name: "Shreryl Olap",
            image: "shreryl.png",
            description: "Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.",
        },
    ];

    return (
        <section className="w-full bg-[#fef7f6] mt-20 mb-10">
            <div className="mx-auto max-w-7xl items-center px-8 py-20">

                <div className="text-center mb-16">
                    <h1 className="text-5xl font-semibold text-black leading-normal mb-4">
                        Most Popular In This Week
                    </h1>

                    <p className="text-[#959393] text-base leading-normal px-80">
                        There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful and we have it all to get you to be successful.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-12 items-stretch">
                    {cards.map((card, index) => (
                        <div key={index} className="max-h-[600px] rounded-2xl h-full flex flex-col bg-white shadow shadow-base"
                            style={{
                                marginTop: `${index * 100}px`,
                            }}>

                            <div className="h-[250px]">
                                <img src={card.image} alt={card.name} className="w-full h-full object-cover rounded-t-2xl"/>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h2 className="text-3xl font-semibold text-black mb-3">
                                    {card.name}
                                </h2>

                                <p className="text-[#959393] text-base leading-9">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}