'use client';
interface IAchievementPageCard {
  index: number;
}
const AchievementPageCard: React.FC<IAchievementPageCard> = ({ index }) => {
  return (
    <div
      className={`w-full flex flex-col-reverse gap-5 lg:gap-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}  lg:justify-between items-start rounded-2xl p-5 lg:p-10 bg-gradient-to-r from-[#534081]/20 via-[#534081]/20 to-[#534081]/80 backdrop-blur-[8px]`}
    >
      <div className=" w-full lg:w-[51%] h-full flex flex-col gap-8">
        <h1 className=" text-left text-2xl lg:text-4xl font-semibold">
          Himpunan dan Proker Terbaik FMIPA Awards 2024
        </h1>
        <p className=" text-justify text-base line-clamp-[9] lg:text-lg font-light lg:line-clamp-[12] w-full">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className=" w-full lg:w-[45%] h-full flex items-center justify-center">
        <svg
          className="w-full h-auto"
          viewBox="0 0 555 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0H545C550.523 0 555 4.47716 555 10V249.005C555 251.497 554.07 253.898 552.392 255.74L442.159 376.735C440.264 378.815 437.58 380 434.767 380H10C4.47717 380 0 375.523 0 370V10C0 4.47715 4.47717 0 10 0Z"
            fill="#ADA0D5"
          />
        </svg>
      </div>
    </div>
  );
};

export default AchievementPageCard;
