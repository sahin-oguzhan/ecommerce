import ContentCard from './ContentCard';

export default function FeaturedPosts() {
  const images = [
    '/images/contentcard-1.jpg',
    '/images/contentcard-2.jpg',
    '/images/contentcard-3.jpg',
  ];
  return (
    <div className="m-10 flex flex-col gap-10">
      <div className="font-montserrat flex flex-col justify-center gap-4 text-center">
        <h6 className="text-primary-color text-sm">Practice Advice</h6>
        <h2 className="text-text-color text-4xl font-bold">
          Featured <br className="md:hidden" />
          Posts
        </h2>
        <p className="text-second-text-color text-sm">
          Problems trying to resolve the conflict between{' '}
          <br className="max-md:hidden" /> the two major realms of classical
          physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        {images.map((image, index) => (
          <ContentCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
}
