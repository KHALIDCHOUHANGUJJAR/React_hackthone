/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-around mt-5 p-6 flex-wrap bg-black text-white">
      <div className="flex flex-col w-[20%] items-center">
        <div className="mr-5">
          <h1 className="font-bold text-xl">Social</h1>
        </div>
        <ul className="flex flex-col">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>YouTube</li>
        </ul>
      </div>

      <div className="flex flex-col w-[20%] items-center">
        <div className="mr-5">
          <h1 className="font-bold text-xl">About</h1>
        </div>
        <ul className="flex flex-col">
          <li>Support Center</li>
          <li>Customer Support</li>
          <li>About Us</li>
          <li>Copyright</li>
        </ul>
      </div>

      <div className="flex flex-col w-[20%] items-center border-4 p-5">
        <div className="mr-5">
          <h1 className="font-bold text-xl">Contact Us</h1>
        </div>
      </div>
      <div className="flex flex-col w-[20%] items-center">
        <div className="mr-5">
          <h1 className="font-bold text-xl">Top Categories</h1>
        </div>
        <ul className="flex flex-col">
          <li>Men's Wear</li>
          <li>Women's Wear</li>
          <li>Kid's Wear</li>
          <li>sport wear</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
