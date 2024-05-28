/* eslint-disable react/prop-types */

export default function RecepiCard({ recipe }) {
  return (
    <>
      <div className="max-[350px] mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px]">
        {/* Card Image */}
        <img
          width={350}
          height={190}
          className="h-[190px] w-[350px] rounded-2xl bg-gray-400"
          src={recipe.image}
          alt="card navigate ui"
        />
        {/* Card Heading */}
        <div className="space-y-2">
          <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">
            {recipe.title}
          </h2>
          {/* rating  */}
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex items-center justify-between">
          <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">
            $ {recipe.price}
          </h2>
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
