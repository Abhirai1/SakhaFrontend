import * as React from "react";

const bookData = [
  { title: "Bhagvadgita" },
  { title: "Ramayana" },
  { title: "Puranas" },
  { title: "Vedas" },
  { title: "Upanishad" },
  { title: "Chalisa" },
  { title: "Niti Shashtra" },
  { title: "Ayurveda" },
  { title: "Sikhism" },
];

function BookCard({ title }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center text-4xl font-medium text-center text-yellow-900 whitespace-nowrap shadow-2xl max-md:mt-8 max-md:max-w-full">
        <div className="justify-center items-center px-16 pt-32 pb-24 rounded-2xl border border-solid backdrop-blur-[30.97599983215332px] bg-zinc-300 bg-opacity-10 border-stone-800 max-md:px-5 max-md:pt-10 max-md:max-w-full">
          {title}
        </div>
      </div>
    </div>
  );
}

function BookRow({ startIndex }) {
  return (
    <div className="mt-8 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {bookData.slice(startIndex, startIndex + 3).map((book, index) => (
          <BookCard key={index} title={book.title} />
        ))}
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col items-center px-16 pt-20 bg-orange-100 max-md:px-5">
      <div className="flex flex-col mt-4 w-full max-w-[1409px] max-md:max-w-full">
        <h1 className="self-center text-6xl font-bold tracking-wider text-stone-950 max-md:max-w-full max-md:text-4xl">
          Sakha Book Store
        </h1>
        <main>
          <BookRow startIndex={0} />
          <BookRow startIndex={3} />
          <BookRow startIndex={6} />
        </main>
      </div>
    </div>
  );
}

export default MyComponent;
