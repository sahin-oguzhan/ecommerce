import { Plus } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function CreditCardList({ setActiveTab, setSelectedCard }) {
  const { creditCards } = useSelector((state) => state.client);
  const { card } = useSelector((state) => state.shoppingCart);

  return (
    <div className="border-muted-color font-montserrat text-text-color m-2 rounded-lg border p-3 text-sm md:text-lg">
      <div className="flex justify-between">
        <h6 className="text-sm font-bold md:text-lg">Kartlarım</h6>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <button
          onClick={() => setActiveTab('creditCardForm')}
          className="border-muted-color flex cursor-pointer items-center justify-center gap-2 rounded-lg border bg-gray-200 py-9"
        >
          <Plus size={30} /> Yeni kart ekle
        </button>
        {creditCards.map((c, i) => (
          <div key={i}>
            <button className="border-muted-color flex w-full flex-col gap-2 rounded-lg border-2 p-2 text-left">
              <div className="flex justify-between px-2">
                <div className="flex items-center gap-2">
                  <input type="radio" name="creditCard" />
                  <label className="text-primary-color font-bold"></label>
                </div>
                <button className="cursor-pointer underline">Düzenle</button>
              </div>
              <div className="border-muted-color focus:border-primary-color rounded-lg border p-1">
                <div className="flex justify-between">
                  <h6></h6>
                  <div className="flex items-center gap-2"></div>
                </div>
                <div>
                  <p>{c.card_no}</p>
                  <div className="flex gap-1">
                    <p>{c.expire_month}</p>/<p>{c.expire_year}</p>
                  </div>
                  <p>{c.name_on_card}</p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
