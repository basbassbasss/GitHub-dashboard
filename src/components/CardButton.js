import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CardButtonContainer = styled.a`
   font-family: 'Roboto';
   font-weight: 500;
   color: ${({ theme }) => theme.colors.white};
   // background: rgb(255, 255, 255, 0.2);
   padding: ${({ theme }) => theme.spacing.tiny} ${({ theme }) => theme.spacing.small};
   text-transform: uppercase;
   border: 1px solid #fff;
   border-radius: ${({ theme }) => theme.radius.main};
   text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardButton = ({ className, children, ...props }) => {
  return <CardButtonContainer className={className} {...props}>{children}</CardButtonContainer>
};

CardButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CardButton;
