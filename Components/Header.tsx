import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <div className="rounded-full w-10 h-10 md:w-16 md:h-16 overflow-hidden">
            <img
              className="object-cover"
              src="https://cdn.sanity.io/images/u5zsoy4b/production/78a3f23b060d7514bee8dacd1b6d5e4b21802824-2688x4032.jpg"
              alt="Logo"
            />
          </div>
        </Link>
        <h1 className="text-sm">Jaguar 101</h1>
      </div>
      <div>
        <Link
          href="https://jackon-echesa-portfolio-v2.vercel.app/"
          className="text-[#f2f2f2] px-3 md:px-5 py-1 md:py-3 text-[10px] md:text-base flex  bg-[#2b6777] items-center rounded-full text-center"
        >
          Visit Portfolio
        </Link>
      </div>
    </header>
  );
}

export default Header;
