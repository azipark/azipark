import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer `
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 60px;
  margin-top: 60px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: var(--white);
  background: var(--primary);

  h2 {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0;
  }
`;

function Footer() {
  return (
    <FooterWrap>
      <h2>Copyright &#169; HY KELLY</h2>
    </FooterWrap>
  );
}

export default Footer;