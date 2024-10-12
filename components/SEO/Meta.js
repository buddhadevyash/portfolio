import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           {/* Primary Meta Tags */}
            <title>Yash Buddhadev's Portfolio</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Yash Buddhadev's Portfolio" />
            <meta name="image" content="images/logos/yy.png" />
            <meta name="description"
                content="Yash Buddhadev's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Yash Buddhadev" />
            <meta name="keywords"
                content="yash buddhadev, yash buddhadev's portfolio, yash buddhadev linux, ubuntu portfolio, yash buddhadev computer, yash buddhadev ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="images/logos/yy.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Yash Buddhadev Portfolio - Computer Engineering Student" />
            <meta itemProp="description"
                content="Yash Buddhadev's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/yy.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Yash Buddhadev Portfolio - Computer Engineering Student" />
            <meta name="twitter:description"
                content="Yash Buddhadev's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="yashbuddhadev" />
            <meta name="twitter:creator" content="yashbuddhadev" />
            <meta name="twitter:image:src" content="images/logos/yy.png" />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Yash Buddhadev Portfolio - Computer Engineering Student" />
            <meta name="og:description"
                content="Yash Buddhadev's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/yy.png" />
            <meta name="og:url" content="http://yashbuddhadev.github.io/" />
            <meta name="og:site_name" content="Yash Buddhadev Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/yy.png" />
            <link rel="apple-touch-icon" href="images/logos/yy.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}