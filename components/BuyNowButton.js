import Link from "next/link";
import { ROUTES } from "../constants";

function BuyNowButton({ onClickFn }) {
  return (
    <Link href={ROUTES.cart()}>
      <button
        className="w-full py-2 px-4 hover:bg-slate-100 flex items-center justify-center rounded-md bg-slate-200 hover:bg-palette-pdark text-palette-white"
        type="button"
        onClick={onClickFn}
      >
        Buy now
      </button>
    </Link>
  );
}

export default BuyNowButton;
