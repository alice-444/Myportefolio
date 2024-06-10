import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const successList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
];

const Success = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {successList.map((success, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-blue-ribbon-400 text-4xl font-bold flex flex-row">
                {success.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(success.value)}
                  locale="en-US"
                  className="text-blue-ribbon-500 text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {success.postfix}
              </h2>
              <p className="text-gray-500 text-base">{success.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Success;
