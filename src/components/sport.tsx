import SlideUp from "./SlideUp";
import { mySports } from "../data/sport";

function Sports() {
  return (
    <section id="sports">
      <div className="py-16 animate-fadeIn animation-delay-2">
        <h2 className="relative text-3xl font-bold mt-6 md:mt-0 md:text-4xl text-center">
          Favorite Sports
          <hr
            className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-[56px]
            md:-translate-x-[68px] md:mt-1 md:w-12"
          />
        </h2>

        {/* GRID */}
        <div
          className="animate-fadeIn grid justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_300px))] 
          gap-x-6 gap-y-6 mt-10"
        >
          {/* Sport CARD */}
          {mySports.map((sport) => (
            <SlideUp
              data-hover
              classes="Sport-item"
              key={sport.id}
            >
              <img data-hover src={sport.image} alt={sport.alt} className="w-full h-[480px] object-cover rounded-xl" />

              <div data-hover className="content-slate md:cursor-none">
                <h3 className="text-lg md:text-2xl font-bold text-center text-white mb-2">
                  {sport.label}
                </h3>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sports;