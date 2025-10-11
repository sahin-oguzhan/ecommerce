import { useDispatch, useSelector } from 'react-redux';
import {
  addCart,
  deleteCart,
  removeCart,
  toggleChecked,
} from '../../redux/thunks/shoppingCartThunks';
import { Package, SquareMinus, SquarePlus, Trash2 } from 'lucide-react';
import { FaShoppingCart } from 'react-icons/fa';
import CartSummary from './CartSummary';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);

  const totalPayment = cart
    .filter((c) => c.checked)
    .reduce((acc, c) => acc + c.product.price * c.count, 0);

  return (
    <div>
      {!cart.length > 0 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="border-primary-color my-20 animate-pulse rounded-full border-4">
            <FaShoppingCart className="fill-primary-color m-10" size={100} />
          </div>
          <h6 className="text-text-color font-montserrat font-semibold">
            Your cart is currently empty!
          </h6>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-around gap-5 md:flex-row">
          <div className="font-montserrat flex flex-col items-center justify-center gap-5">
            {cart.map((c, index) => {
              const itemTotal = c.product.price * c.count;
              return (
                <div>
                  <div className="bg-green-100">
                    <h6 className="flex items-center justify-center gap-2 py-2 text-center text-sm font-bold">
                      <Package className="text-green-400" /> Kargo Bedava!
                    </h6>
                  </div>
                  <div
                    key={index}
                    className="border-muted-color flex flex-col justify-around gap-3 border-1 p-2 md:w-300 md:flex-row"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={c.checked}
                        onChange={() => dispatch(toggleChecked(c.product))}
                      />
                      <img
                        src={c.product.images[0].url}
                        alt=""
                        className="h-30 w-30 object-cover object-center"
                      />
                      <div className="flex w-100 flex-col">
                        <h6 className="text-text-color text-base font-bold">
                          {c.product.name}
                        </h6>
                        <h6 className="text-second-text-color text-sm">
                          {c.product.description}
                        </h6>
                        <h6 className="text-secondary-color-1 text-sm font-bold">
                          ${c.product.price}
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-2/3 flex-col items-center md:flex-row">
                      <div className="flex items-center gap-2">
                        <SquareMinus
                          size={30}
                          onClick={() => dispatch(removeCart(c.product))}
                          className="hover:cursor-pointer"
                        />
                        <p className="text-text-color w-10 text-center text-3xl">
                          {c.count}
                        </p>
                        <SquarePlus
                          size={30}
                          onClick={() => dispatch(addCart(c.product))}
                          className="hover:cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="flex flex-2/3 flex-col items-center justify-around gap-3 md:flex-row">
                      <h6 className="text-secondary-color-1 font-bold">
                        ${itemTotal}
                      </h6>
                      <Trash2
                        size={30}
                        onClick={() => dispatch(deleteCart(c.product))}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-2">
              <span>Toplam:</span>
              <span className="text-secondary-color-1 font-bold">
                ${totalPayment}
              </span>
            </div>
          </div>
          <CartSummary />
        </div>
      )}
    </div>
  );
}
