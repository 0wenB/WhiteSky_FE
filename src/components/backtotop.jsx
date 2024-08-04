const BackToTop = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="flex justify-center items-center p-4">
        <button
          className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
          onClick={toTop}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default BackToTop;
