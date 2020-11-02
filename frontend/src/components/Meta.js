import React from 'react';
import { Helmet } from 'react-helmet';

function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: 'Welcome To E-Shop',
  description: 'We sell the best products for cheap',
  keywords: 'electronics',
};

export default Meta;
