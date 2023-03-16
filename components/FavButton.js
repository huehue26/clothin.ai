import { AiOutlineHeart } from "react-icons/ai";

function FavButton() {
  return (
    <button
      className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-palette-plightest hover:bg-palette-plighter text-palette-primary"
      type="button"
      aria-label="like"
    >
      <AiOutlineHeart className="w-6 h-6" />
    </button>
  );
}

export default FavButton;
