import { useEffect, useState } from 'react';
import PageContent from '../layout/PageContent';
import { getOrders } from '../redux/thunks/clientThunks';
import { useDispatch } from 'react-redux';

export default function PreviousOrders() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const data = await dispatch(getOrders());
      if (data) setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, [dispatch]);

  if (loading) return <p>Yükleniyor...</p>;
  if (!orders.length) return <p>Hiç sipariş bulunamadı.</p>;
  return (
    <div>
      <PageContent>
        <div className="p-5">
          <h1 className="mb-4 text-2xl font-bold">Geçmiş Siparişlerim</h1>
          <div className="flex flex-col gap-3">
            {orders.map((order) => (
              <details key={order.id} className="rounded border p-3">
                <summary className="cursor-pointer font-bold">
                  Sipariş ID{order.id} -{' '}
                  {new Date(order.order_date).toLocaleDateString()} - ₺
                  {order.price}
                </summary>
                <div className="mt-2">
                  {order.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex justify-between border-t py-2"
                    >
                      <div>
                        <p>{product.name}</p>
                        <p className="text-sm text-gray-500">
                          {product.description}
                          <img
                            src={product.images[0].url}
                            alt=""
                            className="h-50 w-50 object-cover"
                          />
                        </p>
                      </div>
                      <p>Adet: {product.count}</p>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </PageContent>
    </div>
  );
}
