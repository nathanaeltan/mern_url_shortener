import { FormEvent, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { shortenUrl } from "../actions/short-url-actions";
import Modal from "./Modal";
const UrlInput = () => {
  const dispatch = useAppDispatch();

  const [longUrl, setLongUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShortenUrl = (e: FormEvent) => {
    e.preventDefault();
    dispatch(shortenUrl(longUrl));
    setLongUrl("");
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  items-center">
        <form className="max-w-md mx-auto mt-5 l">
          <div className="relative w-full">
            <input
              className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-emerald-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
              placeholder="Shorten That URL..."
              required
              onChange={(e) => setLongUrl(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleShortenUrl}
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
            >
              Shorten
            </button>
          </div>
        </form>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default UrlInput;
