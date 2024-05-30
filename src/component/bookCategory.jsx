import * as React from "react";

function BookCard({ book }) {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:mt-7">
        <div className="flex flex-col pb-2.5 bg-stone-400 bg-opacity-40">
          <img
            loading="lazy"
            src={book.image}
            alt={book.title}
            className="w-full aspect-[0.68]"
          />
          <div className="mt-6 text-2xl font-medium tracking-normal text-yellow-900">
            {book.title}
          </div>
          <div className="mt-2 text-lg tracking-normal leading-6 text-stone-700">
            {book.author}
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageCard({ image }) {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:mt-7">
        <div className="flex flex-col justify-center bg-stone-400 bg-opacity-40">
          <img
            loading="lazy"
            src={image}
            alt=""
            className="w-full aspect-[2.7]"
          />
        </div>
      </div>
    </div>
  );
}

function MyComponent() {
  const books = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/64c40c9581ec51b7ee3bbe97e25b2f51656d0e4b3fb1959563615ef1168b7710?apiKey=290b2159386a48ec963871817c9791f6&",
      title: "The Upanishads",
      author: "Avadhoot Sastry",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/018358faa2bc98e36175221e615c49a4b40ed7d450c0f1b3a3c3090d22cc8779?apiKey=290b2159386a48ec963871817c9791f6&",
      title: "The Upanishads",
      author: "Eknath Easwaran",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/236fcfc82e8b681450c8ecc1045f6e800ce86fba7ce46c0c94f14b7c642274d1?apiKey=290b2159386a48ec963871817c9791f6&",
      title: "Brahma Upanishad",
      author: "Munindra Misra",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a61e2c069170410aa60bb116eee18c3319bce9dada7d5ac46d997ba6aec8f2a7?apiKey=290b2159386a48ec963871817c9791f6&",
      title: "Brhadaranyaka Upanishad",
      author: "Swami Ranganathanande",
    },
  ];

  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f7350da39e3d5364b94532409fcd12b72fec31045e784c6f3b40c67f74b2ee4e?apiKey=290b2159386a48ec963871817c9791f6&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3e9ae9c887b449bbcca7c63c993ae069352133919ff860b35dec5d903975fc45?apiKey=290b2159386a48ec963871817c9791f6&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0103a6e2cb34f09e8792cdde530f6ca6ba379dfa53a5af333b3122888c211848?apiKey=290b2159386a48ec963871817c9791f6&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/5056917e4c902af9026dcb4711b6dc866cdb465bcad133ee2feee6af36619e2f?apiKey=290b2159386a48ec963871817c9791f6&",
  ];

  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-9 bg-orange-100 max-md:px-5">
      <div className="flex flex-col mt-3.5 w-full max-w-[1412px] max-md:max-w-full">
        <h1 className="self-center text-6xl font-bold tracking-wider text-stone-950 max-md:text-4xl">
          Upanishad
        </h1>
        <div className="flex flex-col px-2 py-3 mt-4 rounded-2xl border-white border-solid shadow-sm bg-zinc-300 bg-opacity-10 border-[1.4px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {books.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {images.map((image, index) => (
                <ImageCard key={index} image={image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
