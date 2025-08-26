import image from "./assets/b.jpg";
import Cylinder from "./Cylinder";

const Name = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-neutral-900 via-gray-800 to-gray-900">
        <div className="min-h-screen flex flex-col justify-center items-center ">
          <h1 className="text-8xl font-serif rotate-2 z-10 text-white">
            Bibash Dahal
          </h1>

          <div class="flex justify-center">
            <img
              src={image}
              className=" w-120 h-80 object-cover -rotate-8 z-0"
            />
          </div>

          <h2 className="text-8xl z-10 font-mono text-white">PORTFOLIO</h2>
          <h3 className="text-4xl z-10 text-white">Full Stack Developer</h3>
        </div>
        <div className="w-full h-screen relative">
          <Cylinder />
        </div>
      </div>
    </>
  );
};

export default Name;
