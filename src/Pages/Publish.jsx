import React, { useState } from 'react';

const Publish = () => {
  const [walletAddress, setWalletAddress] = useState(''); // Initialize wallet address if needed
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  
  const categories = ['Politics', 'Sports', 'Technology', 'Health','Business', 'Entertaiment','India','World']; // Example categories, adjust as needed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
    console.log({
      walletAddress,
      title,
      content,
      category,
      image,
    });
  };

  return (
    
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <header className="mb-8">
          <h1 className="py-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Publish News
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row">
          <main className="flex-1 lg:mr-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="wallet-address" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                  Wallet Address
                </label>
                <input
                  id="wallet-address"
                  type="text"
                  value={walletAddress}
                  readOnly
                  className="w-full p-2.5 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="title" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full p-2.5 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="content" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                  Content
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="w-full p-2.5 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="category" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full p-2.5 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="image" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                  Image URL
                </label>
                <input
                  id="image"
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full p-2.5 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
              >
                Submit
              </button>
            </form>
          </main>

          <aside className="mt-8 lg:mt-0 lg:w-1/4 lg:ml-8">
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700 text-left mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Publishing Guidelines</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Ensure your article is factual, well-researched, and relevant.</p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Use proper grammar and punctuation.</p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Avoid plagiarism and cite your sources properly.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-300 dark:border-gray-700 text-left">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tips for Writing</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Start with a strong headline that captures attention.</p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Keep your paragraphs short and to the point.</p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Use images and videos to complement your story.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Publish;
