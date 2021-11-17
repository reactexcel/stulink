import React from "react";

const AboutCollege = () => {
  return (
    <div className="shadow-2xl p-8">
      <p className="text-xl text-blue-550 font-black">About College</p>
      <div className="flex mx-8 my-12">
        <img src="/img/college.png" alt="" height="auto" width="350px" />
        <p className="mx-4 font-thin text-gray-600">
          {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu.pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec .vel, aliquet
          nec, vulputate eget, arcu.pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec.`}
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
