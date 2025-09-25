import { useDispatch, useSelector } from 'react-redux';
import {
  addCart,
  deleteCart,
  removeCart,
  toggleChecked,
} from '../../redux/thunks/shoppingCartThunks';
import { Trash2 } from 'lucide-react';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);

  const totalPayment = cart
    .filter((c) => c.checked)
    .reduce((acc, c) => acc + c.product.price * c.count, 0);

  return (
    <div>
      {cart.map((c, index) => {
        const itemTotal = c.product.price * c.count;
        return (
          <div key={index}>
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
            <div>
              <h6>{c.product.name}</h6>
              <h6>{c.product.description}</h6>
              <h6>{c.product.price}</h6>
              <div>
                <button
                  onClick={() => dispatch(removeCart(c.product))}
                  className="btn"
                >
                  -
                </button>
                <p>{c.count}</p>
                <button
                  onClick={() => dispatch(addCart(c.product))}
                  className="btn"
                >
                  +
                </button>
                <Trash2 onClick={() => dispatch(deleteCart(c.product))} />
              </div>
            </div>
            <h6>Ücretsiz Kargo</h6>
            <h6>{itemTotal}</h6>
          </div>
        );
      })}
      <div>
        <span>Toplam:</span>
        <span>{totalPayment}</span>
      </div>
    </div>
  );
}
