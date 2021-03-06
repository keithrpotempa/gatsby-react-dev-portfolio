import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
