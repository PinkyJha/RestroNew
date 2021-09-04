import { ZARTEK_FOOD, ZARTEK_FOOD_SUCCESS, ZARTEK_FOOD_FAILURE, ZARTEK_FOOD_RESET } from './ZartekTypes'

const initialState = {
    zartekfoodApi:{
    zartekfoodInProgress: false,
    zartekfoodSuccess:false,
    zartekfoodFailed:false,
    zartekfood: [],
    }
}

const zartekReducer = (state = initialState, action) => {
    switch(action.type){
        case ZARTEK_FOOD:
            return{
                ...state,
                zartekfoodApi:{
                    zartekfoodInProgress: true,
                    zartekfoodSuccess:false,
                    zartekfoodFailed:false,
                    zartekfood: [],
                    }
            
            }
            case ZARTEK_FOOD_SUCCESS:
                return{
                    ...state,
                    zartekfoodApi:{
                        zartekfoodInProgress: false,
                        zartekfoodSuccess:true,
                        zartekfoodFailed:false,
                        zartekfood: action.payload,
                        }
                
                }
            case ZARTEK_FOOD_FAILURE:
                return{
                    ...state,
                    zartekfoodApi:{
                        zartekfoodInProgress: false,
                        zartekfoodSuccess:false,
                        zartekfoodFailed:true,
                        zartekfood: [],
                        }
                
                }

                case ZARTEK_FOOD_RESET:
                    return{
                        ...state,
                        zartekfoodApi:{
                            zartekfoodInProgress: false,
                            zartekfoodSuccess:false,
                            zartekfoodFailed:false,
                            }
                    
                    }

            default: return state 
    }
}

export default zartekReducer