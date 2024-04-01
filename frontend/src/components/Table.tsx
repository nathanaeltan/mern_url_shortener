import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { getAllUrls } from "../actions/short-url-actions";
import TableRow from "./TableRow";
const Table = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUrls());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { loading, urls } = useAppSelector((state) => state.shortUrl);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const handleClickCopy = async (shortUrl: string, index: number) => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopiedIndex(index);
    } catch (error) {
      console.log("Error in Copying to Clipboard", error);
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-9">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 max-w-[100px]">
              Original URL
            </th>
            <th scope="col" className="px-6 py-3">
              Short URL
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          ) : (
            urls.map((url, index) => {
              return (
                <TableRow
                  handleClickCopy={handleClickCopy}
                  copiedIndex={copiedIndex}
                  index={index}
                  url={url}
                  key={url.urlId}
                />
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
