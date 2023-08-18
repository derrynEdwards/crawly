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
}

module.exports = {
    normalizeURL
}
