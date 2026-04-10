/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
type ApiResponse = {
  data?: {
    form_response_data?: any;
  };
};
export type dataType={
data :String
}
export default function ApiViewer() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [apiUrl, setApiUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem("temp_api_data");
    const savedUrl = localStorage.getItem("temp_api_url");

    if (savedData) {
      const parsed = JSON.parse(savedData);
      setApiData(parsed);
      setApiUrl(savedUrl || "");
    }
    setLoading(false);
  }, []);

  if (loading) return <div className="p-10 text-center">Loading Accurate Data...</div>;
  if (!apiData) return <div className="p-10 text-center text-red-500">Data not found!</div>;

  const displayData = apiData?.data?.form_response_data
  ? [apiData.data.form_response_data]
  : (Array.isArray(apiData) ? apiData : null);

  return (
    <div className="min-h-screen bg-brown-20 p-6">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">🌐 API Response Inspector</h2>
      <p className="text-xs font-mono text-gray-500 mb-6 bg-gray-100 p-2 rounded truncate">{apiUrl}</p>

      {displayData ? (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-[10px] font-bold">
              <tr>
                {Object.keys(displayData[0]).map((key) => (
                  <th key={key} className="px-4 py-3 border-b">{key.replace(/_/g, ' ')}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayData.map((row: any, i: number) => (
                <tr key={i} className="hover:bg-blue-50 transition-colors">
                  {Object.values(row).map((val: any, j: number) => (
                    <td key={j} className="px-4 py-3 text-gray-600">
                      {typeof val === 'object' ? (
                        <details className="cursor-pointer">
                          <summary className="text-blue-500 text-xs">View Nested JSON</summary>
                          <pre className="text-[10px] bg-gray-50 p-2 mt-2">{JSON.stringify(val, null, 2)}</pre>
                        </details>
                      ) : String(val)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-lg p-6 shadow-inner">
           <div className="text-gray-400 text-xs mb-4"></div>
           <pre className="text-green-400 font-mono text-sm overflow-auto">
            {JSON.stringify(apiData, null, 2)}
           </pre>
        </div>
      )}
    </div>
  );
}