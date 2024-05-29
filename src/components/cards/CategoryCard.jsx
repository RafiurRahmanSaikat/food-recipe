/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
  console.log(category);
  return (
    <div className="p-1 rounded-3xl   bg-sky-700 hover:bg-sky-900 duration-500 text-white ">
      <div className="flex flex-col items-center p-1">
        <p className="text-2xl font-medium duration-500">{category.title}</p>
        <img
          className="m-1 rounded-3xl "
          src={category.image}
          alt={category.image}
        />
      </div>
    </div>
  );
}
