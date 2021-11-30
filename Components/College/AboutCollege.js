import React from "react";
import { about } from "../Common/Images";

const AboutCollege = () => {
  return (
    <div className="shadow-lgOuter11 py-8   my-9 w-full">
      <div className="flex items-center px-8 ">
        <img
          src={about}
          alt="icon"
          height="20px"
          width="24px"
          className=" h-8 w-8"
        />
        <p className="text-25 text-2xl text-blue-550 ml-2 font-black ">
          About College
        </p>
      </div>
      <div className="flex mx-8 my-6">
        <img src="/img/college.png" alt="" height="190px" width="260px" style={{height:'190px'}}/>
        <p className="mx-2 text-md ml-4 font-thin text-gray-600">
          {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec .vel, aliquet nec, vulputate eget, arcu.pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec `}
        </p>
      </div>
      <p className="mx-4 font-thin text-gray-600">
        {`Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
        leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
        lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
        rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
        ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
        venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec`}
      </p>
    </div>
  );
};

export default AboutCollege;
