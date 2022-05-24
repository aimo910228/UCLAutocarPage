import { Observable } from 'rxjs';
import {
    INIT,
} from './constants';
import { ofType } from 'redux-observable';
import { switchMap } from "rxjs/operators";

const setInit = (action$, store) =>
    action$.pipe(
        ofType(INIT)
            ,switchMap(() => {
                return Observable.empty();
            }));

export default [
    setInit,
];
