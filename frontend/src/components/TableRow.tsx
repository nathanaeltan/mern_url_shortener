
type Url = {
    shortUrl: string;
    longUrl: string;
    createdAt: string;
}
type TableRowProps = {
    url: Url;
    index: number;
    copiedIndex: number | null;
    handleClickCopy: (url: string, index: number) => void;
}

const TableRow = ({url, index, handleClickCopy, copiedIndex}: TableRowProps) => {
  return (
    <tr className=" hover:bg-gray-50 dark:border-gray-700 ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-[350px] overflow-x-auto hide-scrollbar"
      >
        {url.longUrl}
      </th>
      <td className="px-6 py-4">{url.shortUrl}</td>
      <td className="px-6 py-4">{url.createdAt}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleClickCopy(url.shortUrl, index)}
          className=" text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
        >
          {copiedIndex === index ? (
            <span
              id="success-message"
              className="inline-flex items-center"
            >
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
            <span
              id="default-message"
              className="inline-flex items-center"
            >
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
      </td>
    </tr>
  );
}

export default TableRow