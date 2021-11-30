import React from "react";
import { twitter, facebook, linkedin, appStore, playStore } from "./Images";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="footerSection">
        <div className="mx-auto grid grid-cols-4 footerSection1">
          <div className="">
            <div className="flex flex-col mb-16">
              <p className="font-semibold text-base font-Poppins mb-4">
                BEST COLLEGES
              </p>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Request an offer
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                How it works
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Pricing
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Reviews
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Stories
              </a>
            </div>
            <div>
              <div className="flex flex-col mb-16">
                <p className="font-semibold text-base font-Poppins mb-4">
                  OTHERS
                </p>
                <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                  FAQ
                </a>
                <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col mb-16">
              <p className="font-semibold text-base font-Poppins mb-4">
                OUR GROUPS
              </p>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Infoedge.in
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Naukri.coms
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Firstnaukri.com
              </a>
            </div>
            <div className="flex flex-col mb-16">
              <p className="font-semibold text-base font-Poppins mb-4">
                RESOURCES
              </p>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Guides
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Help Center
              </a>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col mb-16">
              <p className="font-semibold text-base font-Poppins mb-4">ABOUT</p>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Company
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Career
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Press
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Contact
              </a>
            </div>
            <div className="flex flex-col mb-16">
              <p className="font-semibold text-base font-Poppins mb-4">
                OFFERS
              </p>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Make an offer
              </a>
              <a className="font-normal text-base text-gray-500 w-max hover:underline cursor-pointer my-2">
                Request an offer
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <div>
              <div className="flex flex-col mb-16 justify-center">
                <p className="font-semibold text-base font-Poppins mb-4">
                  DOWNLOAD APP
                </p>
                <img className="cursor-pointer my-3 h-12 w-40" src={appStore} />
                <img
                  className="cursor-pointer my-3 h-12 w-40"
                  src={playStore}
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-base font-Poppins mb-4">
                  SOCIAL MEDIA
                </p>
                <div className="flex flex-row w-36 justify-between">
                  <img src={twitter} />
                  <img src={facebook} />
                  <img src={linkedin} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrightSection flex justify-between text-gray-500">
          <div className="flex w-3/5">
            <div className="stuLink">© 2021 stulink</div>
            <div className="flex policySection">
              <div className="policyItem">Terms of Service</div>
              <div className="policyItem">Privacy Policy</div>
              <div className="policyItem">Trust & Safety</div>
            </div>
          </div>
          <div className="w-1/5 flex justify-end">
            <div className='flex items-center'>
              <div className='mr-2'>Language : </div>
              <select
                className="outline-none focus:outline-none border px-3 py-1 bg-white rounded"
                value="en"
              >
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
