import styled from 'styled-components';
import { Card } from '@mui/material';

const RoundedCard = styled(Card)`
  && {
    border-radius: 28px; 
    height: 100px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default RoundedCard;