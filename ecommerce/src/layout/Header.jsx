import NavBar from '../components/NavBar';
export default function Header() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="max-md:flex-1/3">
        <NavBar />
      </div>
      <div className="flex max-md:flex-2/3">
        <img className="" src="images/header-image-1.jpg" alt="" />
      </div>
    </div>
  );
}
