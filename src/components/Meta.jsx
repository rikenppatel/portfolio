import React from 'react';
import Helmet from 'react-helmet';

const defaults = {
  title: 'Riken Patel',
  description:
    'Mobile Engineer',
};

const Meta = ({
  url,
  noindex,
  canonicalLink,
  article = false,
  absoluteImageUrl = '',
  title = defaults.title,
  description = defaults.description,
  twitterCreatorAccount = 'https://twitter.com/',
}) => {
  return (
    <Helmet title={title}>
      {title && <title>{title}</title>}
      <link rel='alternate' href={url} hreflang='en-us' />
      <link rel='alternate' href={url} hreflang='en' />
      <link rel='alternate' href={url} hreflang='x-default' />
      {title && <meta name='title' content={title} />}
      {description && <meta name='description' content={description} />}
      <meta name='image' content={absoluteImageUrl} />
      {twitterCreatorAccount && (
        <meta name='twitter:creator' content={twitterCreatorAccount} />
      )}
      {noindex && <meta name='robots' content='noindex' />}
      {canonicalLink && <link rel='canonical' href={canonicalLink} />}

      {(article ? true : null) && <meta property='og:type' content='article' />}
      {url && <meta property='og:url' content={url} />}
      <meta http-equiv='cache-control' content='no-cache' />
      <meta http-equiv='expires' content='0' />
      <meta http-equiv='pragma' content='no-cache'></meta>
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content={title} />
      {description && <meta property='og:description' content={description} />}
      <meta property='og:title' content={title} />
      <meta property='og:image' content={absoluteImageUrl} />

      <meta name='twitter:description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:image' content={absoluteImageUrl} />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  );
};

export default Meta;
