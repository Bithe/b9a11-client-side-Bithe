
const TrailTales = () => {
    return (
        <div>
  <section id="trail-tales" className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 text-primary">
      Trail Tales: Stories from Hikers
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Trail Tale 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 my-6">
        <h3 className="text-xl font-semibold mb-2">
          A Journey Through the Rockies
        </h3>
        <p className="text-gray-700">
          Last summer, I embarked on a solo journey through the majestic
          Rocky Mountains. From rugged trails to breathtaking vistas, every
          step was a testament to the beauty and resilience of nature.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
          Read More
        </button>
      </div>

      {/* Trail Tale 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 my-6">
        <h3 className="text-xl font-semibold mb-2">
          Conquering the Appalachian Trail
        </h3>
        <p className="text-gray-700">
          Trekking the entire length of the Appalachian Trail was no easy
          feat. But with determination and perseverance, I overcame
          challenges, forged new friendships, and experienced the true
          spirit of adventure.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
          Read More
        </button>
      </div>

      {/* Trail Tale 3 */}
      <div className="bg-white rounded-lg shadow-md p-6 my-6">
        <h3 className="text-xl font-semibold mb-2">
          Lost and Found: An Unexpected Journey
        </h3>
        <p className="text-gray-700">
          Getting lost in the wilderness was a terrifying experience, but
          it ultimately led to unexpected discoveries and unforgettable
          encounters. Sometimes, the greatest adventures begin with a wrong
          turn.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
          Read More
        </button>
      </div>
    </div>
  </div>
</section>


        </div>
    );
};

export default TrailTales;