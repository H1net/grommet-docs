// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../DocsArticle';

export default class Usability extends Component {
  render () {
    return (
      <DocsArticle title="Usability" colorIndex="neutral-1">
        <section>
          <p>Products that are accessible to all users are good for people,
          products, and business.  All users should be empowered with access
          and the ability to have a pleasant experience with your application.</p>

          <p>We follow the <a href="http://www.w3.org/TR/WCAG20/">Web Content
          Accessibility Guidelines (WCAG)</a>.  By following this style guide
          and utilizing the accompanying implementation platform, you will be
          well on your way to satisfying the WCAG recommendations.</p>
        </section>
      </DocsArticle>
    );
  }
};
