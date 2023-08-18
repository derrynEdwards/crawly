const { JSDOM } = require('jsdom');

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const aElements = dom.window.document.querySelectorAll('a');

    for (const aElement of aElements) {
        if (aElement.href.slice(0, 1) === '/') {
            try {
                urls.push(new URL(aElement.href, baseURL).href);
            } catch (err) {
                console.log(`${err.message}: ${aElement.href}`);
            };
        } else {
            try {
                urls.push(new URL(aElement.href).href);
            } catch (err) {
                console.log(`${err.message}: ${aElement.href}`);
            };
        };
    };
    return urls;
};

function normalizeURL(url) {
    const urlObj = new URL(url);
    let normUrl = `${urlObj.host}${urlObj.pathname}`;

    if (normUrl[normUrl.length - 1] === '/') {
        normUrl = normUrl.slice(0, normUrl.length - 1);
    };
    if (!normUrl.includes('/')) {
        normUrl = `${normUrl}/`;
    };
    if (normUrl.includes('www.')) {
        normUrl = normUrl.slice(4, normUrl.length);
    }

    return normUrl;
};

module.exports = {
    normalizeURL,
    getURLsFromHTML
};
