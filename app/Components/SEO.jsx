import Head from 'next/head';

//import favicon from 

const SEO = ({ title, description, image, url, keywords }) => {
  const siteName = 'Home'; // Replace with your website name
  const siteUrl = 'https://www.yourwebsite.com'; // Replace with your website URL
  const defaultImage = '/default-image.jpg'; // Replace with a default image URL for social sharing

  const pageTitle = title || 'Default Page Title';
  const pageDescription = description || 'Default page description';
  const pageImage = image || `${defaultImage}`;
  const pageUrl = url || siteUrl;
  const pageKeywords = keywords || 'default, keywords, for, your, page'; // Replace with your desired keywords

  return (
    <head>

 
      {/* Title */}
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />

      {/* Description */}
      <meta name="description" content={pageDescription} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:description" content={pageDescription} />

      {/* Keywords */}
      <meta name="keywords" content={pageKeywords} />

      {/* URL */}
      <link rel="canonical" href={pageUrl} />
      <meta property="og:url" content={pageUrl} />

      {/* Image */}
      <meta property="og:image" content={pageImage} />
      <meta name="twitter:image" content={pageImage} />

      {/* Site Name */}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </head>
  );
};

export default SEO;