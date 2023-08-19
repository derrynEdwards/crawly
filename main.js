const { normalizeURL, getURLsFromHTML, crawlPage } = require('./crawl.js');

function checkUrl(url) {
    try {
        properUrl = new URL(url);
        return true;
    } catch (err) {
        console.error(`Invalid Input: ${err.message}`);
        return false;
    };
};

async function main() {
    const baseURL = process.argv[2];

    if (process.argv.length > 3) {
        console.error('Expected 1 argument: BASE_URL');
        process.exit(1);
    };

    if (process.argv.length < 3) {
        console.error('Expected 1 argument and none provided.');
        process.exit(1);
    };

    if (checkUrl(baseURL)) {
        console.log(`Starting crawl of: ${baseURL}...`);
        
    };

    const pages = await crawlPage(baseURL, baseURL, {});

    console.log(pages);
};

main();
