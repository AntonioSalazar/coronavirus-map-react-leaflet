import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p className='custom__header'>Covid 19 Info</p>
      </Container>
    </header>
  );
};

export default Header;
