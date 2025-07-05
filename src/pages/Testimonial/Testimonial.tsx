

const Testimonial = () => {
  return (
    <div
      className="text-gray-700 dark:text-gray-300 pt-12 pb-20 dark:bg-gray-900 bg-gray-50"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-12 space-y-4 px-6 md:px-0 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            What Our Readers Say
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Hear from students, teachers, and community members who rely on our
            library for reading, research, and learning.
          </p>
        </div>

        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {/* Testimonial 1 */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl">
            <div className="flex gap-4 items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/41.jpg"
                alt="Student"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Rahim Uddin</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">University Student</p>
              </div>
            </div>
            <p className="mt-6">
              The online book reservation system is a game-changer. I can borrow and track my books without even visiting the counter.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl">
            <div className="flex gap-4 items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/34.jpg"
                alt="Teacher"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Dr. Neela Sarker</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Lecturer, Literature</p>
              </div>
            </div>
            <p className="mt-6">
              Managing reading lists and checking availability through the system has made my teaching workflow much easier.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl">
            <div className="flex gap-4 items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/55.jpg"
                alt="Librarian"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Mr. Tanvir Ahmed</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Head Librarian</p>
              </div>
            </div>
            <p className="mt-6">
              Cataloging and tracking book inventory digitally has saved us hours of manual work every week.
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl">
            <div className="flex gap-4 items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt="Parent"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Shamima Akter</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Parent</p>
              </div>
            </div>
            <p className="mt-6">
              My kids love browsing books online before visiting the library. It’s modern and child-friendly!
            </p>
          </div>

          {/* Testimonial 5 */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl">
            <div className="flex gap-4 items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/61.jpg"
                alt="Researcher"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Farhan Kabir</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">PhD Researcher</p>
              </div>
            </div>
            <p className="mt-6">
              Accessing academic journals and managing citations through the system has streamlined my research process.
            </p>
          </div>

          {/* Testimonial 6 */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl">
            <div className="flex gap-4 items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/52.jpg"
                alt="Volunteer"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Mariya Chowdhury</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Library Volunteer</p>
              </div>
            </div>
            <p className="mt-6">
              Helping manage inventory and assist users through the system has made my volunteer work so efficient and rewarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
