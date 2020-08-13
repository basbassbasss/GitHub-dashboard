import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const fontWeights = {
  'regular': 400,
  'semi-bold': 600,
  'bold': 700,
};

const fontSizes = {
  'medium': '15px',
  'regular': '16px',
  'large': '18px',
}

const Heading = styled.p`
  font-family: 'Open Sans';
  font-size: ${({ size }) => fontSizes[size] ?? fontSizes.regular };
  font-weight: ${({ weight }) => fontWeights[weight] ?? fontWeights.regular};
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.primary};
  margin: 0;
  padding: 0;
  letter-spacing: -0.5px;
`;

Heading.propTypes = {
  weight: PropTypes.oneOf(Object.keys(fontWeights)),
  size: PropTypes.oneOf(Object.keys(fontSizes)),
};

Heading.defaultProps = {
  weight: 'regular',
  size: 'regular',
  color: 'primary',
};

export default Heading;
