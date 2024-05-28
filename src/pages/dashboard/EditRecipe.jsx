import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    load();
  }, [id]);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      category,
      description,
    };

    await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
  };
  return (
    <>
      <div className="w-full px-16">
        <h1 className="text-4xl mb-4">Add Recipe</h1>
      </div>

      <section className=" text-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                {recipeDetails?.description.slice(0, 300)}...
              </p>

              <div className="mt-8">
                <img
                  className="rounded-3xl m-1"
                  src={recipeDetails?.image}
                  alt={recipeDetails?.image}
                />
              </div>
            </div>

            <div className="rounded-lg shadow-blue-900  p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleCreateRecipe} className="space-y-4 ">
                <div>
                  <p className="text-white  text-center">Title</p>
                  <input
                    className="w-full rounded-lg border-gray-200 bg-gray-600 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    defaultValue={recipeDetails?.title}
                    id="title"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-white text-center m-2 " htmlFor="email">
                      Email
                    </p>
                    <input
                      className="w-full rounded-lg border-gray-200 bg-gray-600 p-3 text-sm"
                      type="number"
                      name="price"
                      defaultValue={recipeDetails?.price}
                    />
                  </div>

                  <div>
                    <p className="text-white text-center m-2" htmlFor="">
                      Cateogry
                    </p>
                    <select
                      name="category"
                      id=""
                      className="w-full rounded-lg border-gray-200 bg-gray-600 p-3"
                    >
                      {categories?.map((category) => (
                        <option
                          key={category?.title}
                          selected={category?.title === recipeDetails?.category}
                          value={category?.title}
                        >
                          {category?.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <p className="text-white text-center m-2" htmlFor="message">
                    Description
                  </p>

                  <textarea
                    defaultValue={recipeDetails?.description}
                    name="description"
                    className="w-full bg-gray-700 rounded-lg border-gray-200 p-3 text-sm"
                    rows="15"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4 flex justify-center">
                  <button className="group relative flex w-36 items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300">
                    <input type="submit" />
                    <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                          <path
                            d="M4 12H20M20 12L14 6M20 12L14 18"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditRecipe;
