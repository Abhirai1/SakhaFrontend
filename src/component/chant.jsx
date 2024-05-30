import * as React from "react";

function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="shrink-0 w-12 aspect-square" />;
}

function ChatBubble({ children, className }) {
  return (
    <div className={`justify-center px-4 py-2 rounded-sm ${className}`}>
      {children}
    </div>
  );
}

function MyComponent() {
  const messages = [
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f116392e5a14e989a70bf2d00beb1425fc33a31d637d050a154c27c687a9e99c?apiKey=290b2159386a48ec963871817c9791f6&",
      content: <>hARE kRISHNA... </>,
      bgColor: "bg-yellow-800",
      textColor: "text-zinc-50",
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f116392e5a14e989a70bf2d00beb1425fc33a31d637d050a154c27c687a9e99c?apiKey=290b2159386a48ec963871817c9791f6&",
      content: (
        <>
          Haribol. I am servant of Krishna. I have no capacity, <br /> but I
          serve Krishna to my best knowledge. Just like <br /> you are serving
          Krishna to your best knowledge.
        </>
      ),
      bgColor: "bg-yellow-800",
      textColor: "text-zinc-50",
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb40b8874ce2206f2e5fd6a71eb7cab302e1676b4db95cca0d028dd7d9bbec2a?apiKey=290b2159386a48ec963871817c9791f6&",
      content: "haribol",
      bgColor: "bg-stone-300",
      textColor: "text-stone-950",
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f116392e5a14e989a70bf2d00beb1425fc33a31d637d050a154c27c687a9e99c?apiKey=290b2159386a48ec963871817c9791f6&",
      content: "I am just experimenting.",
      bgColor: "bg-yellow-800",
      textColor: "text-zinc-50",
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb40b8874ce2206f2e5fd6a71eb7cab302e1676b4db95cca0d028dd7d9bbec2a?apiKey=290b2159386a48ec963871817c9791f6&",
      content: "What are you doing?",
      bgColor: "bg-stone-300",
      textColor: "text-stone-950",
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb40b8874ce2206f2e5fd6a71eb7cab302e1676b4db95cca0d028dd7d9bbec2a?apiKey=290b2159386a48ec963871817c9791f6&",
      content: "what are you experimenting?",
      bgColor: "bg-stone-300",
      textColor: "text-stone-950",
    },
    {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f116392e5a14e989a70bf2d00beb1425fc33a31d637d050a154c27c687a9e99c?apiKey=290b2159386a48ec963871817c9791f6&",
      content: "I am experimenting with drugs.",
      bgColor: "bg-yellow-800",
      textColor: "text-zinc-50",
    },
  ];

  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-11 bg-orange-100 max-md:px-5">
      <div className="flex flex-col mt-4 w-full max-w-[1408px] max-md:max-w-full">
        <h1 className="self-center text-6xl font-bold tracking-wider text-stone-950 max-md:max-w-full max-md:text-4xl">
          Sakha Book Store
        </h1>
        <section className="flex flex-col px-20 py-12 mt-7 rounded-xl border-white border-solid shadow-sm bg-zinc-300 bg-opacity-10 border-[1.4px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-3 self-start pr-20 ml-5 text-xl tracking-wide leading-9 lowercase text-zinc-50 max-md:flex-wrap max-md:pr-5">
            <Avatar src={messages[0].avatar} alt="Avatar" />
            <ChatBubble className={messages[0].bgColor}>
              {messages[0].content}
            </ChatBubble>
          </div>
          <div className="mt-3 mr-6 ml-5 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex z-10 grow gap-3 pr-5 mt-9 text-xl tracking-wide leading-9 lowercase text-zinc-50 max-md:flex-wrap">
                  <Avatar src={messages[1].avatar} alt="Avatar" />
                  <ChatBubble className={messages[1].bgColor}>
                    {messages[1].content}
                  </ChatBubble>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex gap-3 pl-20 text-xl tracking-wide leading-9 lowercase whitespace-nowrap text-stone-950 max-md:flex-wrap">
                  <ChatBubble className={messages[2].bgColor}>
                    {messages[2].content}
                  </ChatBubble>
                  <Avatar src={messages[2].avatar} alt="Avatar" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2.5 mr-6 ml-5 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex gap-3 self-stretch pr-20 my-auto text-xl tracking-wide leading-9 lowercase text-zinc-50 max-md:flex-wrap max-md:mt-10">
                  <Avatar src={messages[3].avatar} alt="Avatar" />
                  <ChatBubble className={messages[3].bgColor}>
                    {messages[3].content}
                  </ChatBubble>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xl tracking-wide leading-9 lowercase text-stone-950 max-md:mt-6 max-md:max-w-full">
                  <div className="flex gap-3 pl-20 max-md:flex-wrap max-md:pl-5">
                    <ChatBubble className={messages[4].bgColor}>
                      {messages[4].content}
                    </ChatBubble>
                    <Avatar src={messages[4].avatar} alt="Avatar" />
                  </div>
                  <div className="flex gap-3 pl-20 mt-20 max-md:flex-wrap max-md:pl-5 max-md:mt-10">
                    <ChatBubble className={messages[5].bgColor}>
                      {messages[5].content}
                    </ChatBubble>
                    <Avatar src={messages[5].avatar} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 self-start mt-3 ml-5 text-xl tracking-wide leading-9 lowercase text-zinc-50 max-md:flex-wrap">
            <Avatar src={messages[6].avatar} alt="Avatar" />
            <ChatBubble className={messages[6].bgColor}>
              {messages[6].content}
            </ChatBubble>
          </div>
          <button className="justify-center items-start self-center px-5 py-4 mt-40 max-w-full text-2xl font-light tracking-normal leading-8 text-white bg-yellow-900 rounded-2xl w-[1126px] max-md:px-5 max-md:mt-10">
            Chat with Ai
          </button>
        </section>
      </div>
    </div>
  );
}
