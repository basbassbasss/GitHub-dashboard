import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const fontWeights = {
  'regular': 400,
  'medium': 700,
};

const Text = styled.p`
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: ${({ weight }) => fontWeights[weight] ?? fontWeights.regular};
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.primary};
  margin: 0;
  letter-spacing: -0.5px;
`;

Text.propTypes = {
  weight: PropTypes.oneOf(Object.keys(fontWeights)),
};

Text.defaultProps = {
  weight: 'regular',
};

export default Text;
