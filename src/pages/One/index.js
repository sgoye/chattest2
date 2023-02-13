import React from "react";

import { Text, Img, Button } from "components";

const OnePage = () => {
  return (
    <>
      <div className="bg-bluegray_900 border border-black_900 border-solid flex flex-col font-segoeui items-end justify-start mx-[auto] p-[32px] sm:px-[20px] w-[100%]">
        <div className="bg-bluegray_900 border border-bluegray_800 border-solid flex flex-col items-start justify-start max-w-[1431px] mb-[196px] mt-[115px] md:px-[20px] sm:px-[20px] rounded-radius24 shadow-bs w-[100%]">
          <div className="flex sm:flex-col flex-row gap-[39.32px] items-start justify-start sm:px-[20px] md:px-[40px] px-[78.64px] py-[39.32px] w-[100%]">
            <Text
              className="bg-purple_400 font-semibold h-[49px] pb-[20px] pl-[8px] sm:pr-[20px] pr-[27px] pt-[2px] rounded-radius3 text-left text-white_A700 w-[49px]"
              as="h1"
              variant="h1"
            >
              Y
            </Text>
            <Text
              className="flex-1 font-normal text-bluegray_100 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Explain quantum computing in simple terms
            </Text>
            <Img
              src="images/img_minimize.svg"
              className="h-[45px] w-[72px]"
              alt="minimize"
            />
          </div>
          <div className="bg-bluegray_800 flex md:flex-col sm:flex-col flex-row gap-[39.32px] items-start justify-start sm:px-[20px] md:px-[40px] px-[78.64px] py-[39.32px] w-[100%]">
            <Button className="flex h-[49px] items-center justify-center w-[49px]">
              <Img src="images/img_file.svg" className="" alt="file" />
            </Button>
            <Text
              className="flex-1 font-normal leading-[45.88px] md:max-w-[100%] sm:max-w-[100%] max-w-[1074px] text-bluegray_100 text-left"
              as="h1"
              variant="h1"
            >
              Quantum computing is a type of computing where information is
              processed using quantum-mechanical phenomena, such as
              superposition and entanglement. In traditional computing,
              information is processed using bits, which can have a value of
              either 0 or 1. In quantum computing, information is processed
              using quantum bits, or qubits, which can exist in multiple states
              simultaneously. This allows quantum computers to perform certain
              types of calculations much faster than traditional computers.
            </Text>
            <Img
              src="images/img_minimize.svg"
              className="h-[45px] w-[72px]"
              alt="minimize One"
            />
          </div>
          <div className="flex flex-col gap-[6.55px] items-start justify-start py-[39.32px] w-[100%]">
            <Img
              src="images/img_frame2.svg"
              className="h-[81px] w-[100%]"
              alt="FrameTwo"
            />
            <div className="flex flex-col items-start justify-start p-[13.11px] w-[100%]">
              <a
                href={"javascript:"}
                className="font-normal text-[19.66px] text-bluegray_200 text-left underline w-[auto]"
                rel="noreferrer"
              >
                ChatGPT Jan 30 Version. Free Research Preview. Our goal is to
                make AI systems more natural and safe to interact with. Your
                feedback will help us improve.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnePage;
