import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10  sm:static">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://github.com/1606DP/MERNPortfolio">
            <i class="ri-mail-line text-gray-500 text-xl"></i>
          </a>
          <a href="">
            <i class="ri-instagram-line text-gray-500 text-xl"></i>
          </a>
          <a href="">
            <i class="ri-linkedin-box-fill text-gray-500 text-xl"></i>
          </a>
          <a href=''><i class="ri-github-fill text-gray-500 text-xl"></i></a>
        </div>
        <div className="w-[1px] h-52 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
