
import *  as actionTypes from '../action-types';
let actions = {
    add1(){
        return {type:actionTypes.ADD1};
    },
    minus1(){
        return {type:actionTypes.MINUS1};
    },
    changeColor(color){
        return {type:actionTypes.CHANGE_COLOR,payload:color};
    }
}

export default actions;