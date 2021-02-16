import {attacker, defender} from './actions.js'

export function Hero (name, classType, level, baseDamage, health, energy, speed, cost){
	let hero = {
		name,
		classType,
		level,
		baseDamage,
		health,
		energy,
		speed,
		cost,
	}
	return Object.assign(
		hero,
		attacker(hero),
		defender(hero),
		)
}


