import { BadgeProps } from './index';
import styled from 'styled-components';

export const Container = styled.div<BadgeProps>`
  svg {
    font-size: 20px;
    color: ${({language}) => {
      if(language === 'typescript') { return '#2B72BF' }
      else if (language === 'javascript'){return '#EFD81D'}
      else if(language === 'reactjs'){return '#2B72BF'}
      else if(language === 'nodejs'){return '#90C53F'}
      else if(language === 'mobile'){return '#8DB646'}

      return 'var(--red)'
    }};
  }
`;

