import { useState } from 'react';
import SummaryBox from '../SummaryBox';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/thunks/shoppingCartThunks';

export default function CCSumamry({ setActiveTab }) {
  const [checked, setChecked] = useState(false);
  const { payment } = useSelector((state) => state.shoppingCart);
  const hasPayment = !!payment;
  const dispatch = useDispatch();

  const handleCompleteOrder = async () => {
    const result = await dispatch(createOrder());
    if (result) setActiveTab('completeOrder');
  };

  return (
    <div className="border-muted-color flex h-max w-80 flex-col items-center gap-3 rounded-lg border p-2 p-3 text-sm">
      <button
        disabled={!checked || !hasPayment}
        onClick={handleCompleteOrder}
        className="btn btn-lg bg-primary-color w-full text-white"
      >
        Kaydet ve Devam Et
      </button>
      <div className="border-muted-color flex gap-2 rounded-lg border p-2">
        <input
          type="checkbox"
          id="sozlesme"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="sozlesme">
          <span className="font-bold underline">
            Ön Bilgilendirme Koşulları
          </span>
          'nı ve{' '}
          <span className="font-bold underline">Mesafeli Satış Sözleşmesi</span>
          'ni okudum, onaylıyorum.
        </label>
      </div>
      <SummaryBox />
      <button
        disabled={!checked || !hasPayment}
        onClick={handleCompleteOrder}
        className="btn btn-lg bg-primary-color w-full text-white"
      >
        Siparişi tamamla
      </button>
    </div>
  );
}
