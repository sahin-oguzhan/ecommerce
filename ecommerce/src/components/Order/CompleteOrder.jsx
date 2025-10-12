import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CompleteOrder() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <Check size={55} className="text-secondary-color-1" />
          <p className="text-secondary-color-1 text-4xl">
            Sipariş başarıyla oluşturuldu!
          </p>
        </div>
        <div className="flex flex-col justify-center gap-10 md:flex-row">
          <button
            onClick={() => navigate('/')}
            className="bg-primary-color btn btn-xl text-white"
          >
            Ana Sayfaya dön
          </button>
          <button
            onClick={() => navigate('/shop')}
            className="bg-primary-color btn btn-xl text-white"
          >
            Alışverişe devam et
          </button>
        </div>
      </div>
    </div>
  );
}
