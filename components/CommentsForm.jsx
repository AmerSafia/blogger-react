import React, { useState } from "react";
import { useRef } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleComments = () => {
    setError(false);
    const {
      value: { comment },
    } = commentEl.current;
    const {
      value: { email },
    } = emailEl.current;
    const {
      value: { name },
    } = nameEl.current;
    const {
      checked: { storeData },
    } = storeDataEl.current;

    if (!name || !comment || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };
    if (storeData) {
      localStorage.setItem("commentObj", commentObj);
    }else{
      localStorage.removeItem("commentObj", commentObj);

    }
  };
  return (
    <div className=" bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className=" text-xl mb-8 font-semibold border-b pb-4">Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          name="comment"
          placeholder="Comment"
          className=" p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          ref={nameEl}
          placeholder="Name"
          className=" py-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
        <input
          type="email"
          name="email"
          ref={emailEl}
          placeholder="Email"
          className=" py-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            type="checkbox"
            id="storeData"
            name="storeData"
            ref={storeDataEl}
            value={true}
          />
          <label
            htmlFor="storeData"
            className=" text-green-500 cursor-pointer ml-2"
          >
            {" "}
            Save My e-mail and name to the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500 font-semibold">
          All fields is required !
        </p>
      )}
      <div className=" mt-8">
        <button
          onClick={handleComments}
          type="button"
          className=" transition duration-500 ease hover:bg-indigo-900 bg-pink-600
         text-lg rounded-full text-white px-8 py-2 cursor-pointer "
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className=" text-xl float-right font-semibold mt-3 text-green-500"></span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
