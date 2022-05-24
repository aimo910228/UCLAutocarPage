import styled, { keyframes } from 'styled-components';
import {
    GAME_WIDTH,
    GAME_HEIGHT,
    GAME_WIDTH_SIZE,
    GAME_HEIGHT_SIZE,
} from './constants';

const pulse = keyframes`
    0% {
        -moz-box-shadow: 0 0 0 0 red;
        box-shadow: 0 0 0 0 red;
    }
    70% {
        -moz-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
        box-shadow: 0 0 0 20px rgba(204,169,44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
`;
const pulseA = keyframes`
    0% {
        -moz-box-shadow: 0 0 0 0 blue;
        box-shadow: 0 0 0 0 blue;
    }
    70% {
        -moz-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
        box-shadow: 0 0 0 20px rgba(204,169,44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
`;

// @media only screen and (max-width: 600px) {
//     width: calc(100vw - 20px);
//     height: calc(100vw - 20px);
// }
//        width: 2048px;
//        height: 1042px;

const WH = (1042 / 2048 * 100)
export const StyledSnakeGame = styled.div`
    position: relative;
    padding: 0;
    left:0.4vw;
    .snake-game__map-wrapper {
        position: relative;

        width: 88vw;
        height: calc(1042 / 2048 * 90vw);
        display: grid;
        grid-template-columns: repeat(${GAME_WIDTH}, 1fr);
        grid-template-rows: repeat(${GAME_HEIGHT}, 1fr);
    }
    .snake-game__map-block-item {
        border: 0px solid black;
        box-sizing: border-box;
    }
    .snake-game__draw-snake-car {
        background: red;
        border-radius: 100%;
        animation: ${pulse} 2s infinite;
    }
    .snake-game__draw-snake-anchorPoint {

        background: blue;
        border-radius: 100%;
        animation: ${pulseA} 2s infinite;
    }
`;
