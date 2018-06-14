const PARAMS = ['id', 'huntingZoneId', 'type', 'npc', 'reserved']

class SkillID {
	constructor(obj) { Object.assign(this, obj) }

	equals(obj = {}) {
		if(typeof obj === 'number') obj = {type: 1, id: obj}

		for(let k of PARAMS)
			if(this[k] | 0 !== obj[k] | 0) return false

		return true
	}
}

module.exports = SkillID