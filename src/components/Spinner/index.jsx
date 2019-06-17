import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

import './Spinner.scss';

const Spinner = () => (
  <Segment className="spinner">
    <Dimmer active inverted>
      <Loader inverted content="Loading" />
    </Dimmer>
    <Image src="/images/wireframe/short-paragraph.png" />
  </Segment>
);

export default Spinner;
