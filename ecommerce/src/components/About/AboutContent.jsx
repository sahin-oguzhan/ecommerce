export default function AboutContent() {
  return (
    <div className="font-montserrat my-10 flex flex-col items-center justify-center gap-10 text-center md:flex-row md:gap-60 md:text-left">
      <div className="flex flex-col gap-10">
        <p className="text-danger-text-color text-sm">Problems trying</p>
        <h3 className="text-text-color text-2xl font-bold">
          Met minim Mollie non <br className="md:hidden" /> desert
          <br className="max-md:hidden" /> Alamo est sit
          <br className="md:hidden" />
          cliquey dolor do <br className="max-md:hidden" /> met
          <br className="md:hidden" /> sent.
        </h3>
      </div>
      <p className="text-second-text-color text-left text-sm">
        Problems trying to resolve the conflict between
        <br className="md:hidden" /> the two major realms of
        <br className="max-md:hidden" /> Classical physics:
        <br className="md:hidden" /> Newtonian mechanics
      </p>
    </div>
  );
}
