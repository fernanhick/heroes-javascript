import heroesData from './data.js';
import {User} from './users.js'
import {Hero} from './heros.js'
import users_array from './userslist.js'


let playing = true


while (playing === true){
	console.log("User is playing")
}


const user = User('Fernan', 'fercho@gmail.com')
const user2 = User('Fernando', 'ffh@gmail.com')
user2.befriend('Fernan')
user2.befriend('Fer')
user.buy('Blaster')
user2.buy('Blaster')
user2.buy('Blaster')
console.log(user2.friends)
console.log(users_array)
