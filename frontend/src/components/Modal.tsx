import { useState } from "react";
import { useAppSelector } from "../store/hooks";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const Modal = ({ isOpen, onClose }: ModalProps) => {
  const { loading, shortUrl } = useAppSelector((state) => state.shortUrl);
  const [copied, setCopied] = useState(false);
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
    } catch (error) {
      console.log("Error in Copying to Clipboard", error);
    }
  };
  return (
    <>
      {isOpen && shortUrl && !loading && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-1/2 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Here is your shortened URL
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-gray-700">
              <p>{shortUrl}</p>
            </div>
            <button
              onClick={() => handleCopyClick()}
              className=" text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border mt-5"
            >
              {copied ? (
                <span id="success-message" className="inline-flex items-center">
                  <svg
                    className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">
                    Copied
                  </span>
                </span>
              ) : (
                <span id="default-message" className="inline-flex items-center">
                  <svg
                    className="w-3 h-3 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                  <span className="text-xs font-semibold">Copy</span>
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
