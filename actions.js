import heroesData from './data.js';
import users_array from './userslist.js'

 const attacker = (state) => ({
	attack(){
		console.log(state.baseDamage)
	}
})

 const defender = () => ({})

 const healer = () => ({})

 const buyer = (state) => ({
	buy(heroName){
		for (var i = 0; i < heroesData.length; i++) {
		

			if (heroesData[i].name === heroName){
				state.heroes.push(heroesData[i])
				state.coins -= heroesData[i].cost
			}else{
				console.log('hero not found')
			}
		}
	}
})

 const friender = (state) => ({
	befriend(friend){
		if (users_array.includes(friend)){
		state.friends.push(friend)
		}
		else
		{
			console.log('no user under the name'+ friend +' was found')
		}
	}
})

 export { friender, buyer, healer, attacker, defender}