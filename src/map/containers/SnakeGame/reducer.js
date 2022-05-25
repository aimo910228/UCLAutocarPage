import { fromJS, get } from 'immutable';
import {
    INIT,
} from './constants';
import _, { random } from 'lodash';
import {
    GAME_WIDTH,
    GAME_HEIGHT,
    SET_SNAKE_MOVING,
    SET_CAR_MOVING,
    SET_SNAKE_DIRECTION,
    SET_SNAKE_GAME_START,
    SET_SNAKE_SPEED_MODIFIED,
    SNAKE_LIMITED_SPEED,
    SNAKE_INITIAL_SPEED,
    SNAKE_DELTA_SPEED,
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
} from './constants';
import gtag from '../../utils/tracking';

const direction = {};
direction[ARROW_UP] = { x: 0, y: -1 };
direction[ARROW_DOWN] = { x: 0, y: 1 };
direction[ARROW_LEFT] = { x: -1, y: 0 };
direction[ARROW_RIGHT] = { x: 1, y: 0 };

let carLoc = new Promise((resolve, reject) => {
    fetch('https://uclautocar.54ucl.com/carlocate', {
        method: "POST",
        headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
    })
        .then((res) => res.json())
        .then((location) => {
            console.log(location.val);
            console.log(JSON.stringify(location, 0, 4));
            resolve(location.val.x)
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
})

const createCar = () => ({
    x: carLoc.then((data)=>data),
    y: carLoc.then((data)=>data),
});

const createAnchorPoint1 = () => ({
    x: 151,
    y: 113 - 99,
});

const createAnchorPoint2 = () => ({
    x: 144,
    y: 113 - 63,
});
const createAnchorPoint3 = () => ({
    x: 151,
    y: 113 - 26,
});

const createAnchorPoint4 = () => ({
    x: 136,
    y: 113 - 0,
});

const createAnchorPoint9 = () => ({
    x: 100,
    y: 113 - 7,
});

const createAnchorPoint10 = () => ({
    x: 73,
    y: 113 - 7,
});

const createAnchorPoint15 = () => ({
    x: 0,
    y: 113 - 14,
});

const createAnchorPoint20 = () => ({
    x: 46,
    y: 113 - 0,
});

const createAnchorPoint21 = () => ({
    x: 14,
    y: 113 - 7,
});

const createAnchorPoint22 = () => ({
    x: 164,
    y: 113 - 1,
});

const defaultSnake = {
    headPosition: {
        x: 0,
        y: 0,
    },
    body: [],
    maxLength: 2,
    direction: {
        x: 1,
        y: 0,
    },
    speed: SNAKE_INITIAL_SPEED,
};

const defaultBlocks = _.range(0, GAME_HEIGHT).map((value, indexY) => (
    _.range(0, GAME_WIDTH).map((value, indexX) => (
        {
            id: indexX + GAME_HEIGHT * indexY,
            x: indexX,
            y: indexY,
        }
    ))
));

const initialState = fromJS({
    blocks: defaultBlocks,
    snake: defaultSnake,
    car: createCar(),
    anchorPoint1: createAnchorPoint1(),
    anchorPoint2: createAnchorPoint2(),
    anchorPoint3: createAnchorPoint3(),
    anchorPoint4: createAnchorPoint4(),
    anchorPoint9: createAnchorPoint9(),
    anchorPoint10: createAnchorPoint10(),
    anchorPoint15: createAnchorPoint15(),
    anchorPoint20: createAnchorPoint20(),
    anchorPoint21: createAnchorPoint21(),
    anchorPoint22: createAnchorPoint22(),
    isGameStart: false,
    isPause: false,
    isSpeedModified: true,
    score: 0,
});

function snakeGameReducer(state = initialState, action) {
    switch (action.type) {
        case INIT: {
            return initialState;
        }

        case SET_SNAKE_MOVING: {
            const direction = state.getIn(['snake', 'direction']);
            const maxLength = state.getIn(['snake', 'maxLength']);
            const snakeBody = state.getIn(['snake', 'body']);
            const car = state.get('car');
            const headPositionX = car.get('x');
            const headPositionY = car.get('y');
            const isEatCar = car.get('x') === headPositionX && car.get('y') === headPositionY;
            const updatedPositionX = headPositionX + direction.get('x');
            const updatedPositionY = headPositionY + direction.get('y');
            const eatSelf = snakeBody.find((body) => (
                body.get('x') === updatedPositionX && body.get('y') === updatedPositionY
            ));
            if (state.get('isPause') || !state.get('isGameStart')) {
                return state;
            }
            if (eatSelf) {
                gtag('event', 'Score', {
                    'event_category': 'Score',
                    'event_label': state.get('score'),
                });
                return state.set('isGameStart', false);
            }
            return state
                // update snake body
                .updateIn(['snake', 'body'], (body) => {
                    let updatedBody = body.push(fromJS({
                        x: headPositionX,
                        y: headPositionY,
                    }));
                    if (updatedBody.size > maxLength) {
                        updatedBody = updatedBody.shift();
                    }
                    return fromJS(updatedBody);
                })
                // update snake head position
                .updateIn(['snake', 'headPosition'], (headPosition) =>
                    headPosition
                        .set('x', updatePosition(headPosition.get('x') + direction.get('x')))
                        .set('y', updatePosition(headPosition.get('y') + direction.get('y')))
                )
                // create new car
                .updateIn(['car'], (car) => {
                    if (isEatCar) {
                        return fromJS(createCar());
                    }
                    return car;
                })
                // update snake maxLength
                .updateIn(['snake', 'maxLength'], (maxLength) => {
                    if (isEatCar) {
                        return maxLength + 1;
                    }
                    return maxLength;
                })
                // update snake speed after eating car
                .updateIn(['snake', 'speed'], (speed) => {
                    if (isEatCar) {
                        const updatedSpeed = (speed - SNAKE_DELTA_SPEED) > SNAKE_LIMITED_SPEED ? (speed - SNAKE_DELTA_SPEED) : SNAKE_LIMITED_SPEED;
                        return updatedSpeed;
                    }
                    return speed;
                })
                // update score
                .updateIn(['score'], (score) => {
                    if (isEatCar) {
                        return score + 1;
                    }
                    return score;
                })
                // update isSpeedModified
                .updateIn(['isSpeedModified'], (isSpeedModified) => {
                    if (isEatCar) {
                        return true;
                    }
                    return false;
                });
        }

        case SET_SNAKE_SPEED_MODIFIED: {
            return state.set('isSpeedModified', action.payload);
        }

        case SET_SNAKE_DIRECTION: {
            if (!state.get('isGameStart')) {
                return state;
            }
            let isPause = state.get('isPause');
            let isSpeedModified = state.get('isSpeedModified');
            if (action.payload === 'Space') {
                isPause = !state.get('isPause');
                isSpeedModified = isPause;
            }
            if (!direction[action.payload] && !(action.payload === 'Space')) {
                return state;
            }

            return state.updateIn(['snake', 'direction'], (dir) => {
                if (action.payload === 'Space' || isPause) {
                    return dir;
                }
                if (dir.get('x') * -1 === direction[action.payload].x &&
                    dir.get('y') * -1 === direction[action.payload].y) {
                    return dir;
                }
                return fromJS(direction[action.payload]);
            })
                .set('isPause', isPause)
                .set('isSpeedModified', isSpeedModified);
        }

        case SET_SNAKE_GAME_START: {
            return initialState
                .set('isGameStart', true);
        }

        case SET_CAR_MOVING: {
            // const car = state.get('car');
            let locX = 2;
            let locY = 0;
            return state
                // create new car
                .updateIn(['car'], (car) => {
                    console.log(fromJS(createCar()));
                    return fromJS(createCar());
                })
        }

        default: {
            return state;
        }
    }
}

const updatePosition = (position) => {
    if (position > GAME_WIDTH - 1) {
        return 0;
    } else if (position < 0) {
        return GAME_WIDTH;
    }
    return position;
}

export default snakeGameReducer;
