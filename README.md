-----

# 🕵️‍♂️ Professional NestJS Web Crawler & API Inspector

A powerful, high-performance web crawler built with **NestJS** and **Puppeteer**. It doesn't just scrape headlines; it intercepts network traffic to give you the **exact API responses** used by any website.

-----

## 👤 Contributor

**Gauri Bidwai**

-----

## 🌟 New & Advanced Features

  * **📡 Network Interception (Real-time)**
    Automatically captures and saves background API (XHR/Fetch) calls while crawling.

  * **📊 Professional Dashboard**
    Real-time stats for Headlines, Links, Paragraphs, and Total API Calls found.

  * **🔍 Deep API Inspector**
    A dedicated **"API Response Viewer"** tab that displays captured JSON data in an accurate, readable Table or JSON format.

  * **🤖 Stealth Mode**
    Uses custom User-Agents and Headers to mimic a real browser, avoiding `500 Internal Server Errors` and bot detection.

-----

## 📖 Deep Diving: How It Works

1.  **Target Entry:** User provides a URL (e.g., `https://example.com`).
2.  **Headless Browsing:** Puppeteer launches a stealth browser instance.
3.  **Traffic Sniffing:** While the page loads, the crawler listens to every `fetch` and `xhr` request.
4.  **Data Extraction:** Simultaneously extracts SEO elements like Headlines (`h1`-`h3`) and Paragraphs.
5.  **Saved Responses:** Every background API response is cached and ready for instant inspection.

-----

## 🖼 Project Visuals





### 1\. The Main Dashboard

![*Displays a high-level overview of the crawled page stats.*](https://i.ibb.co/fdwKnQcn/crawl-D.png)

### 2\. API Call Tracking

![*Lists every background network request made by the site.*](https://i.ibb.co/LXTQ3Fy2/Dashboard-Crawl.png)

### 3\. Accurate API Response Viewer

![*Detailed view of the exact JSON data returned by the server.*](https://i.ibb.co/xq8cGNJh/Response-Viewer.png)

-----

-----

## 🛠 Tech Stack

  * **Backend:** NestJS (Node.js framework)
  * **Frontend:** Next.js 14+ (App Router)
  * **Automation:** Puppeteer (Headless Chrome)
  * **HTTP Client:** Axios (for proxied requests)
  * **Styling:** Tailwind CSS

-----

## ⚖️ Benefits for Developers

  * **Reverse Engineering:** Quickly understand how a website's backend API is structured.
  * **Debugging:** Test blocked APIs by proxying them through the crawler's server.
  * **SEO & Content Strategy:** High-speed extraction of competitor content structure.

-----

## 🚀 Getting Started

### 1️⃣ Installation

```bash
npm install
```

### 2️⃣ Run the Application

```bash
# Start Backend (NestJS) - Usually on port 4005
npm run start:dev

# Start Frontend (Next.js) - Usually on port 3000
npm run dev
```

-----

## 📌 Future Enhancements

  * [ ] **Data Persistence:** Save crawl history in MongoDB/PostgreSQL.
  * [ ] **Export Options:** Download API responses as CSV or Excel.
  * [ ] **Authentication Support:** Crawl sites that require login credentials.
  * [ ] **Automated Scheduling:** Run crawls at specific intervals.

-----


<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
