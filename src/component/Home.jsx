import * as React from "react";

function HeroSection() {
  return (
    <section className="flex flex-col py-20 bg-stone-200">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex gap-0 self-start px-5">
          <div className="flex flex-col">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed4970b133293a27aac09359cc54b54719c2bd5b4bd392335dc0010151087730?apiKey=290b2159386a48ec963871817c9791f6&"
              alt="Hero image"
              className="self-center w-full aspect-[2.33]"
            />
            <div className="z-10 shrink-0 self-end -mt-2.5 bg-stone-200 h-[31px] w-[131px]" />
          </div>
          <div className="shrink-0 self-end mt-16 bg-stone-200 h-[19px] w-[27px] max-md:mt-10" />
          <div className="shrink-0 self-start mt-14 bg-stone-200 h-[19px] w-[27px] max-md:mt-10" />
        </div>
        <div className="flex flex-col pl-10 mt-16 w-full text-center max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <h1 className="text-8xl font-semibold text-orange-900 max-md:max-w-full max-md:text-4xl">
            Your <span className="text-orange-900">Guiding</span> Light in a
            World Full of <span className="text-orange-900">Distractions.</span>
          </h1>
          <p className="self-center mt-16 ml-5 text-4xl tracking-normal leading-10 text-stone-900 w-[841px] max-md:mt-10 max-md:max-w-full">
            We Provide the Direction you need to <br /> Transform Your Life.
          </p>
        </div>
      </div>
      <div className="flex z-10 flex-col self-end pb-20 mt-1.5 mr-64 max-w-full text-2xl font-medium tracking-normal text-stone-950 w-[539px] max-md:mr-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9617617f17fd8bf5a06412d9abdd406e93c22e5e95b3bbc3517d1e57d9c7a740?apiKey=290b2159386a48ec963871817c9791f6&"
          alt="Explore now image"
          className="z-10 self-end max-w-full aspect-square w-[318px]"
        />
        <button className="justify-center self-start px-6 py-4 mt-0 mb-20 bg-orange-500 rounded-xl max-md:px-5 max-md:mt-0 max-md:mb-10">
          Explore now
        </button>
      </div>
    </section>
  );
}

function ChatBubble({ image, text, isUser }) {
  return (
    <div className="flex gap-3 mt-4 max-md:flex-wrap">
      {!isUser && (
        <img
          loading="lazy"
          src={image}
          alt="Chat avatar"
          className="shrink-0 w-12 aspect-square"
        />
      )}
      <div
        className={`justify-center px-4 py-2 ${
          isUser ? "rounded-3xl bg-stone-300 text-stone-950" : "bg-yellow-800 rounded-sm"
        } max-md:max-w-full`}
      >
        {text}
      </div>
      {isUser && (
        <img
          loading="lazy"
          src={image}
          alt="User avatar"
          className="shrink-0 w-12 aspect-square"
        />
      )}
    </div>
  );
}

function ChatSection() {
  const chatData = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f116392e5a14e989a70bf2d00beb1425fc33a31d637d050a154c27c687a9e99c?apiKey=290b2159386a48ec963871817c9791f6&",
      text: "hARE kRISHNA...",
      isUser: false,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb40b8874ce2206f2e5fd6a71eb7cab302e1676b4db95cca0d028dd7d9bbec2a?apiKey=290b2159386a48ec963871817c9791f6&",
      text: "haribol...",
      isUser: true,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f116392e5a14e989a70bf2d00beb1425fc33a31d637d050a154c27c687a9e99c?apiKey=290b2159386a48ec963871817c9791f6&",
      text: "Haribol. I am servant of Krishna.",
      isUser: false,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb40b8874ce2206f2e5fd6a71eb7cab302e1676b4db95cca0d028dd7d9bbec2a?apiKey=290b2159386a48ec963871817c9791f6&",
      text: "What are you doing?",
      isUser: true,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f116392e5a14e989a70bf2d00beb1425fc33a31d637d050a154c27c687a9e99c?apiKey=290b2159386a48ec963871817c9791f6&",
      text: "I am just experimenting.",
      isUser: false,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb40b8874ce2206f2e5fd6a71eb7cab302e1676b4db95cca0d028dd7d9bbec2a?apiKey=290b2159386a48ec963871817c9791f6&",
      text: "what are you experimenting?",
      isUser: true,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f116392e5a14e989a70bf2d00beb1425fc33a31d637d050a154c27c687a9e99c?apiKey=290b2159386a48ec963871817c9791f6&",
      text: "I am experimenting with drugs.",
      isUser: false,
    },
  ];

  return (
    <section className="flex flex-col px-7 py-12 ml-7 max-w-full text-xl tracking-wide leading-9 lowercase bg-orange-100 rounded-3xl border-solid border-[1.4px] border-black border-opacity-20 text-zinc-50 w-[650px] max-md:px-5">
      {chatData.map((chat, index) => (
        <ChatBubble
          key={index}
          image={chat.image}
          text={chat.text}
          isUser={chat.isUser}
        />
      ))}
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="flex z-10 flex-col self-end px-5 mt-0 max-w-full text-2xl text-orange-900 w-[666px] max-md:mt-0">
      <blockquote className="text-3xl tracking-wider text-center max-md:max-w-full">
        "Where boredom ends, wisdom begins."
      </blockquote>
      <h2 className="mt-11 text-4xl font-bold leading-[56px] text-stone-950 max-md:mt-10 max-md:max-w-full">
        Are you feeling bored or seeking guidance?
      </h2>
      <p className="mt-11 tracking-wider leading-9 max-md:mt-10 max-md:max-w-full">
        Chat with <span className="font-bold text-orange-900">Sakha AI</span>{" "}
        for entertaining conversations and insightful responses drawn from
        scriptures, offering solutions to life's queries.
      </p>
      <button className="justify-center self-start px-6 py-4 mt-11 font-medium tracking-normal bg-orange-500 rounded-xl text-stone-950 max-md:px-5 max-md:mt-10">
        Chat with AI
      </button>
    </section>
  );
}

function GameSection() {
  return (
    <section className="flex flex-col mt-36 w-full max-md:mt-10 max-md:max-w-full">
      <div className="self-center w-full max-w-[1373px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-2xl text-stone-950 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-4xl font-bold leading-[56px] max-md:max-w-full">
                Embark on a journey of self-discovery with our Game?
              </h2>
              <p className="mt-11 tracking-wider leading-9 text-stone-900 max-md:mt-10 max-md:max-w-full">
                Over 50 days, engage in a series of 50 tasks designed to foster
                focus and promote a winning, healthy lifestyle.
              </p>
              <button className="justify-center self-start px-6 py-4 mt-12 font-medium tracking-normal bg-orange-500 rounded-xl max-md:px-5 max-md:mt-10">
                Try Now
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/656be6643ab48eb0a68402e6943b7ac1663d1622be474e4dfc1a6e45f5350d55?apiKey=290b2159386a48ec963871817c9791f6&"
              alt="Game image"
              className="grow w-full rounded-3xl border-solid aspect-[1.02] border-[1.4px] border-black border-opacity-20 max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BooksSection() {
  return (
    <section className="flex flex-col justify-center mt-40 w-full tracking-wider rounded-3xl bg-zinc-300 bg-opacity-0 max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col justify-center min-h-[700px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2171faf5ab31b52ac9cc5e100f0ffc20ffdd7c79280a88752a9224939f752ca4?apiKey=290b2159386a48ec963871817c9791f6&"
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center items-start px-16 py-20 bg-gray-700 bg-opacity-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col py-7 pr-14 pl-3.5 mt-80 mb-1.5 ml-5 max-w-full bg-black bg-opacity-70 rounded-[34px_34px_34px_0px] w-[777px] max-md:pr-5 max-md:mt-10">
            <blockquote className="text-3xl font-medium leading-10 text-amber-100 max-md:max-w-full">
              "Leaders Are Readers. Knowledge Is Power"
            </blockquote>
            <p className="mt-6 text-xl leading-8 text-zinc-300 max-md:max-w-full">
              All Leaders are readers. As we know, Knowledge, is power, and one
              needs the knowledge to grow in life, so we have inculcated some of
              the most useful books, meant for holistic development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MyComponent() {
  return (
    <main>
      <HeroSection />
      <ChatSection />
      <CallToActionSection />
      <GameSection />
      <BooksSection />
    </main>
  );
}

export default MyComponent;