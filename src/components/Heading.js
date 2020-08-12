import styled from '@emotion/styled';

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.tiny} 0;
`;

export default Heading;
