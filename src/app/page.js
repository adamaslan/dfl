"use client";
import Link from "next/link";
import Image from "next/image";
// import styles from "../styles/Bubble2.module.css";
import ContentCard from "./(components)/ContentCard";
import RecipeList from "./(components)/Recipes";
import Nav from "./(components)/Nav";
import RevolvingGLBPage from './(components)/Logo3D';

const Home = () => {
  return (
    <div>
      <head>
        <title>Drinks Food Life</title>
        <meta
          name="google-site-verification"
          content="hibJJdNyGOXl4aB0kEVBNFHgXe61cum7gLKs_J2A50A"
        />
        <meta
          name="Drinks Food Life Bushwick"
          content="Based in NYC covering Food Spirits and Wine based around Bushwick Ridgewood Chinatown and the LES. "
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      
      {/* Remove the CSS module container and use only Tailwind */}
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 p-5 max-w-6xl mx-auto" id="parent">
  <Link href="./townbranch-hapenny" className="block group">
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-64 md:h-80 object-cover transform transition-all duration-500 group-hover:scale-105"
          alt='food' 
          src="/happeny2.jpg" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>
      <div className="p-4 bg-rose-100 transition-colors duration-300 group-hover:bg-orange-100">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Transatlantic Collaboration and Sustainability</h2>
        <h3 className="text-lg text-gray-600">The Story of Town Branch and Ha'Penny</h3>
      </div>
    </div>
  </Link>

  <Link href="/sherrycbasedcktailperfectforsummer" className="block group">
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 md:h-80 object-cover transform transition-all duration-500 group-hover:scale-105"
          alt='cocktail'
          src="https://res.cloudinary.com/adamaslan/image/upload/v1660751024/drinksfoodlife/grandarmypunch_e9pums.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>
      <div className="p-4 bg-sky-100 transition-colors duration-300 group-hover:bg-indigo-100">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Summer Cocktails Part 2</h2>
        <h3 className="text-lg text-gray-600">Grand Army Punch by @chemixtry</h3>
      </div>
    </div>
  </Link>

  <Link href="./about" className="block group">
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
      <div className="relative overflow-hidden">
        <div className="w-full h-64 md:h-80 relative overflow-hidden border-2 border-emerald-200">
          <RevolvingGLBPage 
            glbFile="/dfl-loading3.glb" 
            className="w-full h-full transform transition-all duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>
      <div className="p-4 bg-emerald-100 transition-colors duration-300 group-hover:bg-teal-100">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Think this 3D logo is cool?</h2>
        <h3 className="text-lg text-gray-600">Let us make you one for an Ad on our site! Contact us today!</h3>
      </div>
    </div>
  </Link>

  <Link href="/the-most-fun-conventions" className="block group">
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 md:h-80 object-cover transform transition-all duration-500 group-hover:scale-105"
          alt='fest'
          src="/fest1.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>
      <div className="p-4 bg-amber-100 transition-colors duration-300 group-hover:bg-orange-100">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">The Most Fun...Conventions</h2>
        <h3 className="text-lg text-gray-600">Shining a light on the road to the most fun conventions in the world</h3>
      </div>
    </div>
  </Link>
</div>
    



      {/* Part Two */}
      <ContentCard />
      <RecipeList />


    
      
      {/* Part Three */}
      <div>
        {/* Grid Container 4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-5 max-w-screen-xl mx-auto">
          <Link href="/besttacosinbk" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1685058269/tacos1_onlnoj.jpg"
                alt="food"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">Taco Poll Brooklyn</h2>
                <p className="text-sm opacity-90">See the results of our hotly contested poll!</p>
              </div>
            </div>
          </Link>

          <Link href="/artandfish" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654729613/drinksfoodlife/fish_ddrxgr.jpg"
                alt="food"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">Art and Fish</h2>
                <p className="text-sm opacity-90">The Story of Nicole Burko</p>
              </div>
            </div>
          </Link>

          <Link href="./stylish-in-aspen-drinking-rose-at-bonnies" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1678159115/drinksfoodlife/rose_mgk9sv.jpg"
                alt="Aspen"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">Awe and Culture in Aspen</h2>
                <p className="text-sm opacity-90">Whispering Angel Rose at Bonnies</p>
              </div>
            </div>
          </Link>
         

  <Link href="/northdumplingindimessquare" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                alt="cocktail"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654718488/drinksfoodlife/northdump1_dptuen.jpg"
       />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">North Dumpling, the Guru of Dimes Square,</h2>
                <p className="text-sm opacity-90">Dumplings Shining Brightly on the Lower East Side</p>
              </div>
            </div>
          </Link>


          <Link href="/summercocktailspart1" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                alt="cocktail"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1655411125/drinksfoodlife/danburydonkey_mdavxe.jpg"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">Summer Cocktails Part 1</h2>
                <p className="text-sm opacity-90">The Danbury Donkey by @chemixtry</p>
              </div>
            </div>
          </Link>

          <Link href="/babydaddy" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654731696/drinksfoodlife/babydaddy2_u29dmu.png"
                alt="beer"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">Baby Daddy Beer</h2>
                <p className="text-sm opacity-90">Baby Daddy is a great choice</p>
              </div>
            </div>
          </Link>

       
        </div>

        {/* Grid Container B */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-5 max-w-screen-xl mx-auto">
          <Link href="/3valuewines" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover"
                alt="wine"
                src="/diablo.png"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold">3 High Value Red Wines</h2>
              </div>
            </div>
          </Link>

          <Link href="/coyoacan">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover"
                alt="mole"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654900212/drinksfoodlife/cdmx2_u0b4mi.jpg"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">Getting Deep in Coyoacan</h2>
                <p className="text-sm opacity-90">Frida, the Trees, the Food..Life!</p>
              </div>
            </div>
          </Link>

          <Link href="/seawolf" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover"
                alt="Sea Wolf"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654824690/drinksfoodlife/notes_bovahb.jpg"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">Writing Away My Sunny Days at Sea Wolf</h2>
                <p className="text-sm opacity-90">Sea Wolf Brings the Boys to the Yard</p>
              </div>
            </div>
          </Link>

          <Link href="/naplesbotanicalgardenwelcomesfrida" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover"
                alt="Frida"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1681154705/drinksfoodlife/frida-diego_fi26ml.jpg"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">Naples Botanical Garden Welcomes Frida and the Casa Azul</h2>
                <p className="text-sm opacity-90">Celebrating of Art, Nature, and Mexican Culture in Southwest Florida</p>
              </div>
            </div>
          </Link>

          <Link href="/mole" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover"
                alt="mole"
                src="https://res.cloudinary.com/adamaslan/image/upload/v1654895312/drinksfoodlife/cdmx1_zm5yyj.jpg"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">On the Love of Mole and Mexico</h2>
                <p className="text-sm opacity-90">Mole, Mexico, Oh My!</p>
              </div>
            </div>
          </Link>
          
          <Link href="./raki" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover"
                alt='food'
                src="https://res.cloudinary.com/adamaslan/image/upload/v1664330111/drinksfoodlife/raki_iaoqaw_b5103d.jpg"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold mb-2">On the Love of Raki and Turkish Food</h2>
                <h3 className="text-sm opacity-90">Dining at Turkish Grill in Queens</h3>
              </div>
            </div>
          </Link>
          <Link href="/cafeversailles" passHref>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <img
                className="w-full h-64 object-cover"
                alt="cafe versailles"
                src="/versailles.jpg"
              />
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white">
                <h2 className="text-lg font-semibold">In Love with</h2>
                <p className="text-sm opacity-90">Cafe Versailles</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;