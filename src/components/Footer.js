import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() }, Created for learning purposes only</p>
      </Container>
    </footer>
  );
};

export default Footer;
