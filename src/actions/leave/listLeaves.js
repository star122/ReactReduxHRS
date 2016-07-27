import { createAction } from 'redux-actions'
import { CONFIG } from '../../config/index'
import * as _ from 'lodash'
import {fireAjax} from '../../services/index'

import * as jwt from 'jwt-simple'

import {show_loading, hide_loading} from '../generic/frontend'

export const ACTION_LIST_LEAVES_SUCCESS = "ACTION_LIST_LEAVES_SUCCESS"
export const ACTION_LIST_LEAVES_EMPTY = "ACTION_LIST_LEAVES_EMPTY"
export const ACTION_LIST_LEAVES_ERROR = "ACTION_LIST_LEAVES_ERROR"

export function list_leaves_sucess( data ){
	return createAction( ACTION_LIST_LEAVES_SUCCESS )( data )
}

export function list_leaves_empty( data ){
	return createAction( ACTION_LIST_LEAVES_EMPTY )( [] )
}

export function list_leaves_error( err ){
	return createAction( ACTION_LIST_LEAVES_ERROR )( 'Error Occurs !!' )
}

function async_getAllLeaves( from_date, to_date, no_of_days, reason ){
	return fireAjax( 'POST', '', {
		'action' : 'get_all_leaves'
	})
}

export function getAllLeaves( ){

	return function (dispatch,getState){

		return new Promise(( reslove, reject ) => {
			dispatch( show_loading() ); // show loading icon
			async_getAllLeaves(  ).then(
				( json ) => {
					dispatch( hide_loading() ) // hide loading icon
					if( json.error == 0 ){
						dispatch( list_leaves_sucess( json.data ) )
		 			}else{
		 				dispatch( list_leaves_error( json.data.message ) )
		 			}
				},
				( error ) => {
					dispatch( hide_loading() ) // hide loading icon
					dispatch( list_leaves_error( json.data.message ) )
				}
			)
			
		})

	}
    
}