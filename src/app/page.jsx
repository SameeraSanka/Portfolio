import Image from "next/image";
const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full px-8 md:px-12 lg:px-20 xl:px-48">
      {/* image */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>

      {/* text */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        {/* title */}
        <h1 className="text-4xl font-bold md:text-6xl">Crafting Digital Experiences, Designing Tomorrow.</h1>
        {/* description */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        {/* buttons */}
        <div className="w-full flex gap-4 ">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
