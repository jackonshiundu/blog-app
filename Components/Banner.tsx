function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-3xl md:text-7xl md:mb-3 text-[#2b6777]">
          Jaguar Daily Blog
        </h1>
        <h2 className="text-sm md:text-base mt-5 md:mt-0">
          Welcome to{' '}
          <span className="underline decoration-4 decoration-[#2b6777]">
            Every Developer&apos;s{' '}
          </span>{' '}
          Favourite blog in the Devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Product features | The latest in technology | The weekly debugging
        nightmares & more
      </p>
    </div>
  );
}

export default Banner;
