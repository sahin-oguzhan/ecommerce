import { useEffect, useRef, useState } from 'react';
import ProductCard from '../ProductCard';

export default function ProductList({ images }) {
  const totalProducts = 36;
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const lastProductRef = useRef(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 5 : 12);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => {
      window.addEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const products = Array.from({ length: totalProducts }, (_, i) => i + 1);
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const isLastPageWithLessItems =
    currentPage === totalPages && paginatedProducts.length < itemsPerPage;

  useEffect(() => {
    if (isLastPageWithLessItems && lastProductRef.current) {
      lastProductRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage, isLastPageWithLessItems]);

  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + 2);
    if (end - start < 2) start = Math.max(1, end - 2);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();
  return (
    <div className="my-10 flex flex-col items-center gap-20">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-4">
        {paginatedProducts.map((product, index) => {
          const isLast = index === paginatedProducts.length - 1;
          const image = images[(startIndex + index) % images.length];
          return (
            <div
              key={product}
              ref={isLast ? lastProductRef : null}
              className="flex flex-col justify-center"
            >
              <ProductCard image={image} />
            </div>
          );
        })}
      </div>
      <div className="join">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className="join-item btn"
        >
          First
        </button>
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`join-item btn ${currentPage === page ? 'bg-primary-color' : ''}`}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          className="join-item btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}
