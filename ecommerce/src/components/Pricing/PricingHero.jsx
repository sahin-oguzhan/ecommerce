import InnerBreadCrumb from '../InnerBreadCrumb';

export default function PricingHero() {
  return (
    <div className="flex justify-center">
      <div className="font-montserrat flex flex-col items-center gap-10 font-bold">
        <h5 className="text-second-text-color text-base">PRICING</h5>
        <h1 className="text-text-color text-4xl">Simple Pricing</h1>
        <InnerBreadCrumb to={'/'} text={'Home'} tab={'Pricing'} />
      </div>
    </div>
  );
}
