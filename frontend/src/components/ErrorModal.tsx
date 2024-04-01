import { useAppSelector, useAppDispatch } from "../store/hooks";
import { clearError } from "../store/short-url-slice";
const ErrorModal = () => {
  const { loading, error } = useAppSelector((state) => state.shortUrl);
  const dispatch = useAppDispatch();
  const handleClearError = () => {
    dispatch(clearError())
  }
  return (
    <>
      {!loading && error && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-1/2 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Error Occured</h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={handleClearError}
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
              <p>{error}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorModal;
