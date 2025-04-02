import Link from "next/link";

const ContentCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 md:mx-8 lg:mx-16 my-8">
      {/* Card 1 */}
      <Link href="/amaromontenegro" passHref>
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-2">
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-1 rounded-2xl">
            <div className="flex flex-col items-center bg-gradient-to-t from-black via-black/90 to-transparent rounded-xl h-full">
              <img
                alt="Amaro"
                className="w-full h-64 object-cover rounded-t-xl opacity-90 group-hover:opacity-100 transition-opacity"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654725062/drinksfoodlife/amaro-monte_omsl1h.jpg"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-pink-200 to-orange-100 bg-clip-text text-transparent">
                A delicious party! 🎉 
                </h2>
                <p className="mt-3 text-pink-200 font-semibold text-lg italic">
                Amaro Montenegro at ZXY Gallery
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Card 2 */}
      <Link href="/naturalwine" passHref>
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-2">
          <div className="bg-gradient-to-br from-blue-500 via-green-400 to-yellow-300 p-1 rounded-2xl">
            <div className="flex flex-col items-center bg-gradient-to-t from-black via-black/90 to-transparent rounded-xl h-full">
              <img
                alt="wine"
                className="w-full h-64 object-cover rounded-t-xl opacity-90 group-hover:opacity-100 transition-opacity"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654718485/drinksfoodlife/coup-wine_pjdgdv.jpg"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-200 via-green-200 to-yellow-100 bg-clip-text text-transparent">
                  An Awkward Quest
                </h2>
                <p className="mt-3 text-green-200 font-semibold text-lg italic">
                  For a Funky Natural Red 🍇
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Card 3 */}
      <Link href="/tealove" passHref>
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-2">
          <div className="bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300 p-1 rounded-2xl">
            <div className="flex flex-col items-center bg-gradient-to-t from-black via-black/90 to-transparent rounded-xl h-full">
              <img
                alt="Tea"
                className="w-full h-64 object-cover rounded-t-xl opacity-90 group-hover:opacity-100 transition-opacity"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654718487/drinksfoodlife/teasecret1_corwi6.jpg"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-red-200 via-orange-200 to-yellow-100 bg-clip-text text-transparent">
                  On the Love of Loose Tea
                </h2>
                <p className="mt-3 text-orange-200 font-semibold text-lg italic">
                  Where to find Tea in NYC 🫖
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;