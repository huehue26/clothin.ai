function AddToCartButton({ onClickFn }) {
  return (
    <button
      className="py-2 px-4 flex items-center justify-center rounded-md bg-palette-plightest hover:bg-palette-plighter hover:text-slate-400 text-palette-primary"
      type="button"
      onClick={onClickFn}
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
