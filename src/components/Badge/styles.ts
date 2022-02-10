import { BadgeProps } from './index';
import styled from 'styled-components';

export const Container = styled.div<BadgeProps>`
  svg {
    font-size: 20px;
    color: ${({language}) => {
      if(language === 'TypeScript') {
        return '#2B72BF'
      } else if (language === 'JavaScript'){
        return '#EFD81D'
      }

      return 'var(--green)'
    }};
  }
`;

