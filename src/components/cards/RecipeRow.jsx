import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function RecipeRow({ recipe, onDeleteRecipe }) {
  const handleDeleteRecipe = async () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await axios.delete(`http://localhost:3000/recipes/${recipe.id}`);
      } catch (error) {
        toast.error("Failed to delete recipe.");
      }
    }
  };

  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button className="btn btn-xs btn-error" onClick={handleDeleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}
