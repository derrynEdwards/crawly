Crawly
===========
JavaScript guided project from [Boot.dev](https://boot.dev).  

Takes a Base URL as a CLI parameter and crawls the website.
Prints a report of the counts of each internal link found.

Objective
---------
Build a web crawler using JavaScript with Node.js.

Requirements
------------
- node.js v18.7.0

Other dependencies found in `package.json`.

Execution
---------
`npm install`  
`npm run start <base_url>`  
`npm run start https://example.com`  

File Tree
---------
```shell
crawly
├── README.md
├── crawl.js
├── crawl.test.js
├── main.js
├── package-lock.json
├── package.json
└── report.js
```

Sample Run
----------
```shell
==================================================
       REPORT FOR https://wagslane.dev
==================================================
wagslane.dev/ : 64
wagslane.dev/tags : 64
wagslane.dev/about : 64
wagslane.dev/index.xml : 64
wagslane.dev/posts/leave-scrum-to-rugby : 6
wagslane.dev/posts/managers-that-cant-code : 5
wagslane.dev/posts/kanban-vs-scrum : 5
wagslane.dev/posts/continuous-deployments-arent-continuous-disruptions : 4
wagslane.dev/posts/dark-patterns : 3
wagslane.dev/posts/things-i-dont-want-to-do-to-grow-business : 3
wagslane.dev/posts/zen-of-proverbs : 3
wagslane.dev/posts/func-y-json-api : 3
wagslane.dev/posts/keep-your-data-raw-at-rest : 3
wagslane.dev/posts/optimize-for-simplicit-first : 3
wagslane.dev/posts/no-one-does-devops : 3
wagslane.dev/posts/college-a-solution-in-search-of-a-problem : 3
wagslane.dev/posts/guard-keyword-error-handling-golang : 3
wagslane.dev/posts/gos-major-version-handling : 3
wagslane.dev/posts/go-struct-ordering : 3
wagslane.dev/posts/what-a-crazy-religion : 3
wagslane.dev/posts/a-case-against-a-case-for-the-book-of-mormon : 3
wagslane.dev/posts/seo-is-a-scam-job : 3
wagslane.dev/posts/collapsing-quality-of-devto : 3
wagslane.dev/posts/developers-learn-to-say-no : 2
wagslane.dev/tags/business : 1
wagslane.dev/tags/clean-code : 1
wagslane.dev/tags/devops : 1
wagslane.dev/tags/education : 1
wagslane.dev/tags/golang : 1
wagslane.dev/tags/management : 1
wagslane.dev/tags/philosophy : 1
wagslane.dev/tags/writing : 1
```