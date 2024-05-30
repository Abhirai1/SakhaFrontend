import * as React from "react";

function ProgressCard({ title, value, unit, icon }) {
  return (
    <div className="flex flex-col grow justify-center font-medium tracking-wider whitespace-nowrap max-md:mt-6">
      <div className="flex flex-col px-6 pt-6 pb-14 w-full rounded-2xl bg-zinc-100 max-md:pl-5">
        <div className="flex gap-5 justify-between w-full text-xl text-neutral-700">
          <div className="flex gap-2.5">
            <img src={icon} alt="" className="shrink-0 w-12 aspect-square" />
            <div className="my-auto">{title}</div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/572f68d2ba555741016ce7dbd314197586fcfed42f2a5e227848cc45aecbc6b7?apiKey=290b2159386a48ec963871817c9791f6&"
            alt=""
            className="shrink-0 my-auto w-7 aspect-square"
          />
        </div>
        <div className="flex flex-col self-center px-16 py-20 mt-8 text-center rounded-full bg-zinc-100 h-[198px] w-[198px] max-md:px-5">
          <div className="text-2xl leading-8 text-black">{value}</div>
          <div className="mt-2.5 text-base text-neutral-600">{unit}</div>
        </div>
      </div>
    </div>
  );
}

function ReadingCard({ title, value, unit, icon, background }) {
  return (
    <div className="flex flex-col grow justify-center font-medium tracking-wider whitespace-nowrap max-md:mt-6">
      <div className="flex flex-col pt-6 pr-16 pb-12 pl-6 w-full rounded-2xl bg-zinc-100 max-md:px-5">
        <div className="flex gap-2.5 self-start text-xl text-neutral-700">
          <img
            src={icon}
            alt=""
            className="shrink-0 w-12 rounded-full aspect-square"
          />
          <div className="flex-auto my-auto">{title}</div>
        </div>
        <div className="flex overflow-hidden relative flex-col self-end px-2 pt-4 pb-2 mt-5 max-w-full text-center aspect-square w-[221px]">
          <img
            src={background}
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col px-20 py-20 w-full rounded-full bg-zinc-100 h-[198px] max-md:px-5">
            <div className="text-2xl leading-8 text-black">{value}</div>
            <div className="mt-3 text-base text-neutral-600">{unit}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageCard({ image }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden relative flex-col grow justify-center aspect-[2.29] max-md:mt-6">
        <img
          src={image}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative shrink-0 rounded-2xl bg-zinc-100 h-[148px]" />
      </div>
    </div>
  );
}

function NoteCard() {
  return (
    <div className="flex flex-col items-start py-4 pr-20 pl-3 mt-2 tracking-tight bg-orange-50 rounded-2xl max-md:pr-5 max-md:max-w-full">
      <div className="text-4xl font-medium text-stone-800">Untitled</div>
      <div className="text-2xl text-neutral-700">Write Something...</div>
    </div>
  );
}

function MyComponent() {
  const progressCards = [
    {
      title: "Walk",
      value: "2345",
      unit: "Steps",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0bfd5ea135372dba5f1daf64d757588d5ac70edc431cbeca8a509af1d1f5a9b?apiKey=290b2159386a48ec963871817c9791f6&",
    },
    {
      title: "Reading",
      value: "43",
      unit: "Pages",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7de22f875ec6a53c0c7a2b163de98a03f7774660ca464854b91ed14ac75af6f3?apiKey=290b2159386a48ec963871817c9791f6&",
      background:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/48a46b9e3a6f055d29e430a3f14ade4ffcf2de7bc0929a4749ae1a4ffb091531?apiKey=290b2159386a48ec963871817c9791f6&",
    },
  ];

  const imageCards = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/346d902cd8fa575f77b8d2fef931eb16e91733c10093ad48aebb9624f26da2e0?apiKey=290b2159386a48ec963871817c9791f6&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b2e70e2f4c99f1373ae9f8124d4b53aa035756b4f267a4f809b8ecd91ee89671?apiKey=290b2159386a48ec963871817c9791f6&",
  ];

  return (
    <div className="flex flex-col items-center px-16 pt-20 bg-orange-100 max-md:px-5">
      <div className="flex flex-col mt-4 w-full max-w-[1428px] max-md:max-w-full">
        <h1 className="self-center text-6xl font-bold tracking-wider text-stone-950 max-md:text-4xl">
          Progress
        </h1>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
                <div className="flex flex-col justify-center items-start px-16 py-7 bg-yellow-900 rounded-3xl max-md:px-5 max-md:max-w-full">
                  <div className="justify-center px-2 max-w-full w-[548px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto tracking-wider max-md:mt-10">
                          <h2 className="text-5xl font-bold text-white max-md:text-4xl">
                            Your Activity
                          </h2>
                          <div className="mt-1.5 text-3xl font-medium text-stone-200">
                            15{" "}
                            <span className="text-2xl text-stone-200">
                              Days
                            </span>
                          </div>
                          <div className="flex gap-5 justify-between mt-3 text-lg tracking-tight whitespace-nowrap text-stone-300">
                            <div className="flex gap-1">
                              <div className="shrink-0 my-auto w-6 h-3 bg-amber-500 rounded-[51px]" />
                              <div>Reading</div>
                            </div>
                            <div className="flex gap-1">
                              <div className="shrink-0 my-auto w-6 h-3 bg-green-400 rounded-[51px]" />
                              <div>Chanting</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb1855dbe9302391e77bdc4bbec5ea157572a703baa63bb5993a470cb6b3a0ef?apiKey=290b2159386a48ec963871817c9791f6&"
                          alt=""
                          className="shrink-0 max-w-full aspect-square w-[142px] max-md:mt-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {progressCards.map((card, index) => (
                      <React.Fragment key={index}>
                        {card.background ? (
                          <ReadingCard {...card} />
                        ) : (
                          <ProgressCard {...card} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="mt-6 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {imageCards.map((image, index) => (
                      <ImageCard key={index} image={image} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-6 py-11 w-full bg-yellow-900 rounded-3xl max-md:px-5 max-md:mt-7 max-md:max-w-full">
                <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto text-4xl font-medium tracking-tight text-stone-200">
                    May 2024
                  </div>
                  <div className="flex gap-4 self-start">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/49d34b3f598b8c996244ab0fb781931a2b6f5acdac895c0de9c81b1ea4919fab?apiKey=290b2159386a48ec963871817c9791f6&"
                      alt=""
                      className="shrink-0 w-8 aspect-square"
                    />
                    <div className="flex gap-0">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/402525edd8c8518f3d3aca532609d2e2b2fa5bf19dc267ec950deffc0a436b46?apiKey=290b2159386a48ec963871817c9791f6&"
                        alt=""
                        className="shrink-0 w-8 aspect-square"
                      />
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca7fdf884852c81d69f7a4227dc6335e214f0a4bae56b81a9e39b5d0bc47e506?apiKey=290b2159386a48ec963871817c9791f6&"
                        alt=""
                        className="shrink-0 w-8 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start py-4 pr-20 pl-3 mt-9 tracking-tight bg-orange-50 rounded-2xl max-md:pr-5 max-md:max-w-full">
                  <div className="text-4xl font-medium text-stone-800">
                    Untitled
                  </div>
                  <div className="text-2xl text-neutral-700">
                    Write Something...
                  </div>
                </div>
                {[...Array(4)].map((_, index) => (
                  <NoteCard key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
