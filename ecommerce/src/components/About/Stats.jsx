export default function Stats() {
  const stats = [
    { caption: '15K', desc: 'Happy Customers' },
    { caption: '150K', desc: 'Montlhy Visitors' },
    { caption: '15', desc: 'Countries Worldwide' },
    { caption: '100+', desc: 'Top Partners' },
  ];
  return (
    <div className="montserrat my-30 flex flex-col items-center justify-center gap-10 text-center font-bold md:flex-row md:gap-40">
      {stats.map((stat, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <h1 className="text-text-color text-6xl">{stat.caption}</h1>
            <h5 className="text-second-text-color text-base">{stat.desc}</h5>
          </div>
        );
      })}
    </div>
  );
}
