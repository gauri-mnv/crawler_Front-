/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";

export default function CrawlerPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleCrawl = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4005/scrape/Headlines", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target: url }),
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      alert("Backend not connected!");
    } finally {
      setLoading(false);
    }
  };

  const handleItemClick = (apiUrl: string) => {
    // Backend must return savedResponses object where key is URL and value is the JSON body
    const responseData = data?.savedResponses?.[apiUrl];

    // console.log(
    //   `%c 🚀 Actual Response for: ${apiUrl}`,
    //   "color: #007bff; font-weight: bold; font-size: 12px;"
    // );

    // if (responseData) {
    //   console.log("Full JSON Response:");
    //   console.dir(responseData); // Expandable object in console
    //   if (typeof responseData === 'object') {
    //     console.table(responseData); // Neat table for flat objects
    //   }
    // } else {
    //   console.warn("No response captured for this specific URL. Make sure Puppeteer is saving 'page.on(response)'.");
    // }

    if (responseData) {
    // 1. Data ko string mein badal kar localStorage mein save karein
    localStorage.setItem("temp_api_data", JSON.stringify(responseData));
    localStorage.setItem("temp_api_url", apiUrl);

    // 2. Naya page (Route) naye tab mein kholein
    window.open("/api-viewer", "_blank");
  } else {
    alert("No response captured for this specific URL. Make sure Puppeteer is saving 'page.on(response)'.");
  }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-10 font-sans text-gray-800">
      <div className="mx-auto max-w-[1400px] rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 border-b pb-4 text-center text-3xl font-bold">
          🕵️‍♀️ Professional NestJS Crawler
        </h1>

        <form onSubmit={handleCrawl} className="mb-8 flex justify-center gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL (e.g. https://google.com)"
            required
            className="w-full max-w-xl rounded-md border border-gray-300 p-3 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-green-600 px-8 py-3 font-bold text-white transition hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? "Crawling..." : "Start Crawling"}
          </button>
        </form>

        {data && data.stats && (
          <>
            <div className="mb-6 flex justify-between gap-5">
              {[
                { label: "Headlines", val: data.stats.totalHeadlines, color: "blue" },
                { label: "Links", val: data.stats.totalLinksFound, color: "blue" },
                { label: "Paragraphs", val: data.stats.totalParagraphs, color: "blue" },
                { label: "API Callings", val: data.stats.totalApiCalls, color: "yellow" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-lg bg-gray-100 p-5 text-center border-b-4 ${
                    s.color === "blue" ? "border-blue-500" : "border-yellow-500"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-blue-600">{s.val}</h2>
                  <p className="mt-1 font-bold text-gray-600">{s.label} Found</p>
                </div>
              ))}
            </div>

            <div className="flex gap-5">
              <Column title="📄 Headlines" items={data.headlines} />
              <Column title="🔗 Links" items={data.nextPageOptions} isLink={true} />
              <Column title="📝 Paragraphs" items={data.paragraphs} />
              <Column 
                title="🌐 API Callings" 
                items={data.apiCalls} 
                isApi={true} 
                onApiClick={handleItemClick} // Passing handler to column
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Column({ title, items, isLink, isApi, onApiClick }: any) {
  return (
    <div className="h-[500px] flex-1 overflow-y-auto rounded-lg border border-gray-100 bg-[#fafafa] p-4 custom-scrollbar">
      <h3 className="mb-3 border-b pb-2 text-lg font-bold text-gray-700">
        {title}
      </h3>
      <ul className="space-y-3">
        {items?.map((item: string, i: number) => (
          <li
            key={i}
            className={`border-b border-gray-100 pb-2 text-sm leading-snug ${isApi ? "cursor-pointer hover:bg-pink-50" : ""}`}
            onClick={() => isApi && onApiClick && onApiClick(item)}
          >
            {isLink ? (
              <a
                href={item}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline break-all"
              >
                {item}
              </a>
            ) : isApi ? (
              <div className="font-mono text-pink-600 break-all text-xs">
                <div className="text-[15px] text-gray-600 font-sans italic mb-1">Click to see response</div>
                <strong>API:</strong> {item}
              </div>
            ) : (
              <span>• {item}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}