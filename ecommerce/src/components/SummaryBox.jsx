import { useSelector } from 'react-redux';
export default function SummaryBox() {
  const { cart } = useSelector((state) => state.shoppingCart);

  const totalPayment = cart
    .filter((c) => c.checked)
    .reduce((acc, c) => acc + c.product.price * c.count, 0);
  return (
    <div>
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
    </div>
  );
}
