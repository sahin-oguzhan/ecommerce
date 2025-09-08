import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <div className="font-montserrat my-10 flex flex-col gap-15 px-15 md:mx-auto md:w-5/7">
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        <h3 className="text-text-color text-2xl font-bold">Bandage</h3>
        <div className="text-primary-color flex w-25 gap-4">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
      <hr className="border-t-2 text-[#E6E6E6] max-md:hidden" />
      <div className="text-second-text-color flex flex-col gap-5 text-sm font-bold md:flex-row md:justify-between">
        <div className="flex flex-col">
          <h5 className="text-text-color text-base">Company Info</h5>
          <Link>About Us</Link>
          <Link>Carrier</Link>
          <Link>We are hiring</Link>
          <Link>Blog</Link>
        </div>
        <div className="flex flex-col">
          <h5 className="text-text-color text-base">Legal</h5>
          <Link>About Us</Link>
          <Link>Carrier</Link>
          <Link>We are hiring</Link>
          <Link>Blog</Link>
        </div>
        <div className="flex flex-col">
          <h5 className="text-text-color text-base">Features</h5>
          <Link>Business Marketing</Link>
          <Link>User Analytic</Link>
          <Link>Live Chat</Link>
          <Link>Unlimited Support</Link>
        </div>
        <div className="flex flex-col">
          <h5 className="text-text-color text-base">Resources</h5>
          <Link>IOS & Android</Link>
          <Link>Watch a Demo</Link>
          <Link>Customers</Link>
          <Link>API</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-text-color text-base">Get In Touch</h5>
          <div className="flex">
            <input
              type="text"
              placeholder="Your Email"
              className="h-15 bg-[#E6E6E6] pl-5"
            />
            <button className="btn bg-primary-color h-15 rounded-none text-white">
              Subscribe
            </button>
          </div>
          <p className="text-xs">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div>
        <h6 className="text-second-text-color text-sm font-bold">
          Made With Love By <br className="md:hidden" /> Finland All Right
          Reserved
        </h6>
      </div>
    </div>
  );
}
