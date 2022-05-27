import { createSelector } from 'reselect';

const selectSnakeGame = state => state.get('snakeGame');

const makeSelectSnake = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('snake'),
    );

const makeSelectBlocks = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('blocks'),
    );

const makeSelectCar = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('car'),
    );

const makeSelectAnchorPoint1 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint1'),
    );

const makeSelectAnchorPoint2 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint2'),
    );

const makeSelectAnchorPoint3 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint3'),
    );
const makeSelectAnchorPoint4 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint4'),
    );
const makeSelectAnchorPoint9 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint9'),
    );
const makeSelectAnchorPoint10 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint10'),
    );

const makeSelectAnchorPoint15 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint15'),
    );

const makeSelectAnchorPoint20 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint20'),
    );
const makeSelectAnchorPoint21 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint21'),
    );
const makeSelectAnchorPoint22 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('anchorPoint22'),
    );

const makeSelectisGameStart = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isGameStart'),
    );

const makeSelectisMapDisabled = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isMapDisabled'),
    );


const makeSelectScore = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('score'),
    );

const makeSelectIsPause = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isPause'),
    );

const makeSelectIsSpeedModified = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isSpeedModified'),
    );

export {
    makeSelectSnake,
    makeSelectBlocks,
    makeSelectCar,
    makeSelectAnchorPoint1,
    makeSelectAnchorPoint3,
    makeSelectAnchorPoint2,
    makeSelectAnchorPoint4,
    makeSelectAnchorPoint9,
    makeSelectAnchorPoint10,
    makeSelectAnchorPoint15,
    makeSelectAnchorPoint20,
    makeSelectAnchorPoint21,
    makeSelectAnchorPoint22,
    makeSelectisGameStart,
    makeSelectisMapDisabled,
    makeSelectScore,
    makeSelectIsPause,
    makeSelectIsSpeedModified,
};
