import {friender, buyer} from './actions.js'
import users_array from './userslist.js'


export function User  ( username, email) {


	let user = {
		username,
		email,
		coins: 100,
		heroes: [],
		friends:[],
	}
	return Object.assign(
		user,
		friender(user),
		buyer(user),
		users_array.push(username)
		)
}