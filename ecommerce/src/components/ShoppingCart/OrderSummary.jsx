import { ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function OrderSummary() {
  const { cart } = useSelector((state) => state.shoppingCart);

  const totalPayment = cart
    .filter((c) => c.checked)
    .reduce((acc, c) => acc + c.product.price * c.count, 0);
  return (
    <div className="border-muted-color flex h-max flex-col items-center gap-5 rounded-xl border-1 p-5">
      <div className="font-montserrat text-second-text-color border-muted-color flex w-70 flex-col gap-2 rounded-xl border-1 p-2 text-sm font-semibold">
        <h2 className="text-text-color font-bold">Sipariş Özeti</h2>
        <div className="flex justify-between">
          <span>Ürünün Toplamı</span>
          <span>{totalPayment}</span>
        </div>
        <div className="flex justify-between">
          <span>Kargo Toplam</span>
          <span>$29.99</span>
        </div>
        {totalPayment > 150 && (
          <div className="flex justify-between">
            <span>
              $150 ve Üzeri Kargo Bedava <br /> (Satıcı Karşılar)
            </span>
            <span>-29.99$</span>
          </div>
        )}
        <div className="border-muted-color flex justify-between border-t-1 pt-2">
          <span>Toplam</span>
          <span>
            {totalPayment > 150 ? totalPayment - 29.99 : totalPayment + 29.99}
          </span>
        </div>
      </div>
      <button className="font-montserrat btn btn-lg bg-primary-color font-semibold text-white">
        İNDİRİM KODU GİR
      </button>
      <button className="bg-primary-color font-montserrat btn-lg btn flex font-semibold text-white">
        Sepeti Onayla <ChevronRight />
      </button>
    </div>
  );
}
