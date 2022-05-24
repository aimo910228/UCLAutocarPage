import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    setSnakeMoving,
    setSnakeDirection,
    setGameStart,
    setSnakeSpeedModified,
} from './actions';
import { StyledSnakeGame } from './Styled';
import {
    makeSelectSnake,
    makeSelectBlocks,
    makeSelectCar,
    makeSelectAnchorPoint1,
    makeSelectAnchorPoint2,
    makeSelectAnchorPoint3,
    makeSelectAnchorPoint4,
    makeSelectAnchorPoint9,
    makeSelectAnchorPoint10,
    makeSelectAnchorPoint15,
    makeSelectAnchorPoint20,
    makeSelectAnchorPoint21,
    makeSelectAnchorPoint22,
    makeSelectisGameStart,
    makeSelectScore,
    makeSelectIsPause,
    makeSelectIsSpeedModified,
} from './selectors';
import gtag from '../../utils/tracking';

let gameInterval;

const updateGameView = (
    snake, block, car,
    anchorPoint1, anchorPoint2, anchorPoint3,
    anchorPoint4, anchorPoint9, anchorPoint10,
    anchorPoint15, anchorPoint20, anchorPoint21, anchorPoint22,
) => {
    // draw car
    if (block.get('x') === car.get('x') &&
        block.get('y') === car.get('y')) {
        return 'snake-game__draw-snake-car';
    }
    // draw anchorPoint1
    if (block.get('x') === anchorPoint1.get('x') &&
        block.get('y') === anchorPoint1.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    // draw anchorPoint2
    if (block.get('x') === anchorPoint2.get('x') &&
        block.get('y') === anchorPoint2.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    // draw anchorPoint3
    if (block.get('x') === anchorPoint3.get('x') &&
        block.get('y') === anchorPoint3.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    // draw anchorPoint4
    if (block.get('x') === anchorPoint4.get('x') &&
        block.get('y') === anchorPoint4.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    // draw anchorPoint9
    if (block.get('x') === anchorPoint9.get('x') &&
        block.get('y') === anchorPoint9.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    // draw anchorPoint10
    if (block.get('x') === anchorPoint10.get('x') &&
        block.get('y') === anchorPoint10.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    // draw anchorPoint15
    if (block.get('x') === anchorPoint15.get('x') &&
        block.get('y') === anchorPoint15.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    // draw anchorPoint20
    if (block.get('x') === anchorPoint20.get('x') &&
        block.get('y') === anchorPoint20.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    // draw anchorPoint21
    if (block.get('x') === anchorPoint21.get('x') &&
        block.get('y') === anchorPoint21.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    // draw anchorPoint22
    if (block.get('x') === anchorPoint22.get('x') &&
        block.get('y') === anchorPoint22.get('y')) {
        return 'snake-game__draw-snake-anchorPoint';
    }
    return 'snake-game__map-block-item';
};

class SnakeGame extends Component {
    static propTypes = {
        snake: PropTypes.instanceOf(Map),
        blocks: PropTypes.instanceOf(List),
        car: PropTypes.instanceOf(Map),
        anchorPoint1: PropTypes.instanceOf(Map),
        anchorPoint2: PropTypes.instanceOf(Map),
        anchorPoint3: PropTypes.instanceOf(Map),
        anchorPoint4: PropTypes.instanceOf(Map),
        anchorPoint9: PropTypes.instanceOf(Map),
        anchorPoint10: PropTypes.instanceOf(Map),
        anchorPoint15: PropTypes.instanceOf(Map),
        anchorPoint20: PropTypes.instanceOf(Map),
        anchorPoint21: PropTypes.instanceOf(Map),
        anchorPoint22: PropTypes.instanceOf(Map),
        isGameStart: PropTypes.bool,
        score: PropTypes.number,
        isPause: PropTypes.bool,
        isSpeedModified: PropTypes.bool,
        handleOnSetSnakeMoving: PropTypes.func,
        handleOnSetSpeedModified: PropTypes.func,
    }
    static defaultProps = {
        snake: Map(),
        blocks: List(),
        car: Map(),
        anchorPoint1: Map(),
        anchorPoint2: Map(),
        anchorPoint3: Map(),
        anchorPoint4: Map(),
        anchorPoint9: Map(),
        anchorPoint10: Map(),
        anchorPoint15: Map(),
        anchorPoint20: Map(),
        anchorPoint21: Map(),
        anchorPoint22: Map(),
        isGameStart: false,
        score: 0,
        isPause: false,
        isSpeedModified: true,
        handleOnSetSnakeMoving: () => { },
        handleOnSetSpeedModified: () => { },
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleOnKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleOnKeyDown);
        clearInterval(gameInterval);
    }
    componentDidUpdate(prevProps, prevState) {
        const {
            isSpeedModified,
        } = prevProps;
        const {
            snake,
            isGameStart,
            isPause,
            handleOnSetSnakeMoving,
            handleOnSetSpeedModified,
        } = this.props;
        if (isPause) {
            clearInterval(gameInterval);
        }
        if (isSpeedModified) { // to udpate speed
            handleOnSetSpeedModified(false);
            clearInterval(gameInterval);
            gameInterval = setInterval(() => {
                if (isGameStart && !isPause) {
                    handleOnSetSnakeMoving()
                }
            }, snake.get('speed'));
        }
        if (!isGameStart) {
            clearInterval(gameInterval);
            handleOnSetSpeedModified(true);
        }
    }
    handleOnKeyDown = (event) => {
        const {
            handleOnSetSnakeDirection,
        } = this.props;
        handleOnSetSnakeDirection(event.code);
        gtag('event', 'Keydown', {
            'event_category': 'Keydown',
            'event_label': event.code,
        });
    }
    handleOnGameStartClick = () => {
        const {
            handleOnSetSnakeMoving,
            handleOnSetGameStart,
        } = this.props;
        handleOnSetGameStart();
        handleOnSetSnakeMoving();
        gtag('event', 'start');
    }
    handleOnVirtualKeyboardClick = (event) => {
        const {
            handleOnSetSnakeDirection,
        } = this.props;
        const code = event.currentTarget.getAttribute('data-code');
        handleOnSetSnakeDirection(code);
        gtag('event', 'VirtualKeyboard', {
            'event_category': 'VirtualKeyboard',
            'event_label': code,
        });
    }

    render() {
        const {
            snake, blocks, car,
            anchorPoint1, anchorPoint2, anchorPoint3,
            anchorPoint4, anchorPoint9, anchorPoint10,
            anchorPoint15, anchorPoint20, anchorPoint21, anchorPoint22,
        } = this.props;
        return (
            <StyledSnakeGame onKeyDown={this.handleOnKeyDown}>
                <div className="snake-game__map-wrapper">
                    {
                        blocks.map((rows) => (
                            rows.map((block) => (
                                <div
                                    key={block.get('id')}
                                    className={updateGameView(snake, block, car,
                                        anchorPoint1, anchorPoint2, anchorPoint3,
                                        anchorPoint4, anchorPoint9, anchorPoint10,
                                        anchorPoint15, anchorPoint20, anchorPoint21, anchorPoint22,
                                    )}
                                >
                                </div>
                            ))
                        ))
                    }
                </div>
            </StyledSnakeGame>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    snake: makeSelectSnake(),
    blocks: makeSelectBlocks(),
    car: makeSelectCar(),
    anchorPoint1: makeSelectAnchorPoint1(),
    anchorPoint2: makeSelectAnchorPoint2(),
    anchorPoint3: makeSelectAnchorPoint3(),
    anchorPoint4: makeSelectAnchorPoint4(),
    anchorPoint9: makeSelectAnchorPoint9(),
    anchorPoint10: makeSelectAnchorPoint10(),
    anchorPoint15: makeSelectAnchorPoint15(),
    anchorPoint20: makeSelectAnchorPoint20(),
    anchorPoint21: makeSelectAnchorPoint21(),
    anchorPoint22: makeSelectAnchorPoint22(),
    isGameStart: makeSelectisGameStart(),
    score: makeSelectScore(),
    isPause: makeSelectIsPause(),
    isSpeedModified: makeSelectIsSpeedModified(),
});

const mapDispatchToProps = dispatch => ({
    handleOnSetSnakeMoving: () => dispatch(setSnakeMoving()),
    handleOnSetSnakeDirection: (directionType) => dispatch(setSnakeDirection(directionType)),
    handleOnSetGameStart: () => dispatch(setGameStart()),
    handleOnSetSpeedModified: (payload) => dispatch(setSnakeSpeedModified(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SnakeGame);
