import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form' // as は名前がかぶらないようにインポート時に別名にできる

import user from './user'

export default combineReducers({
    form: formReducer, // 追加
    user
})
