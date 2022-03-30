import * as actionTypes from "./actionTypes";

export function setProfile(profile){
    return {type:actionTypes.SET_PROFILE,payload:profile}
}