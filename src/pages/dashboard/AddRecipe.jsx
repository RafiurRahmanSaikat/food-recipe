import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRecipe = () => {
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await axios.get("http://localhost:3000/categories");
        if (data?.status === 200) {
          setCategories(data?.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    load();
  }, []);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = { id, title, price, category, description, imageUrl };

    if (window.confirm("Are you sure you want to add this recipe?")) {
      try {
        await axios.post("http://localhost:3000/recipes", recipeData);
        toast.success("Recipe added successfully!");
      } catch (error) {
        toast.error("Failed to add recipe.");
        console.error("Error adding recipe:", error);
      }
    }
  };

  return (
    <div className=" px-16">
      <h1 className=" text-4xl mb-14 text-violet-400 text-center">
        Add Recipe
      </h1>
      <form onSubmit={handleCreateRecipe} className="w-full ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              ID
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border focus:border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="id"
              type="text"
              placeholder="Enter ID"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              name="price"
              placeholder="Price"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Image URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border focus:border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Category
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="category"
              required
            >
              <option value="">Select a category</option>
              {categories?.map((category) => (
                <option key={category?.id} value={category?.title}>
                  {category?.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="description"
              placeholder="Enter description"
              required
            />
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <input
            type="submit"
            value={"Add Recipe"}
            className=" w-1/2 py-3 px-5 rounded-md bg-violet-500 text-white hover:bg-violet-600 transition-colors duration-300 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
