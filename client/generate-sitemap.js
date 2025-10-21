import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

// Your full site URL
const siteUrl = "https://maring-hymn-of-praise.vercel.app";

const links = [{ url: "/", changefreq: "daily", priority: 1.0 }];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: siteUrl });

  // Pipe to file
  const writeStream = createWriteStream("./dist/sitemap.xml");
  stream.pipe(writeStream);

  // Write links
  for (const link of links) {
    stream.write(link);
  }

  // End the stream
  stream.end();

  // Optional: wait for finish
  await streamToPromise(stream);
  console.log("✅ Sitemap generated at dist/sitemap.xml");
}

// Run the function
generateSitemap().catch(console.error);
