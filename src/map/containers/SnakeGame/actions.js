import {
    SET_SNAKE_MOVING,
    SET_SNAKE_DIRECTION,
    SET_SNAKE_GAME_START,
    SET_MAP_DISABLED,
    SET_SNAKE_SPEED_MODIFIED,
    SET_CAR_MOVING,
} from './constants';

export const setSnakeMoving = () => ({
    type: SET_SNAKE_MOVING,
});

export const setCarMoving = () => ({
    type: SET_CAR_MOVING,
});

export const setSnakeDirection = (directionType) => ({
    type: SET_SNAKE_DIRECTION,
    payload: directionType,
});

export const setGameStart = () => ({
    type: SET_SNAKE_GAME_START,
});

export const setMapDisabled = () => ({
    type: SET_MAP_DISABLED,
});

export const setSnakeSpeedModified = (payload) => ({
    type: SET_SNAKE_SPEED_MODIFIED,
    payload,
});
