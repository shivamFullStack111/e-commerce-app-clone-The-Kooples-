import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="loader">
        <div className="loader__bar" />
        <div className="loader__bar" />
        <div className="loader__bar" />
        <div className="loader__bar" />
        <div className="loader__bar" />
        <div className="loader__ball" />
      </div>
    </div>
  );
};

export default Loader;
