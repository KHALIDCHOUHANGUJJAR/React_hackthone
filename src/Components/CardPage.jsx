import "./Header.css";

const CardPage = () => {
  return (
    <div>
      <div className="container1 flex flex-col items-center">
        <img
          className="img6 w-full h-auto"
          src="/Assets/Images/banner-6.webp"
          alt=""
        />
        <div className="container2 flex flex-wrap justify-around mt-4">
          <img
            className="w-full sm:w-1/  lg:w-1/3 m-2"
            src="/Assets/Images/banner-5.webp"
            alt=""
          />
          <img
            className="w-full sm:w-1/2 sm:h-6 lg:w-1/3 m-2 "
            src="/Assets/Images/banner-4.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardPage;
