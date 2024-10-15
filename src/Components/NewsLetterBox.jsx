const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault()
    alert("clicked");
  };

  return (
    <div className="text-center mt-10 p-1">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & get{" "}
        <span className="text-orange-600 font-semibold inline-block animate-bounce">
          20% Offer
        </span>
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        nostrum?
      </p>
      {/* form is added there */}
      <form
        onClick={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full sm:flex outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
