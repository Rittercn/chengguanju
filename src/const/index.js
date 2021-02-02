export const characterMap = {
	honest: {
		key: 'honest',
		desc: require('@/assets/honest_desc.png'),
		src: require('@/assets/honest.gif'),
		go: require('@/assets/honest_go.gif')
	},
	sheep: {
		key: 'sheep',
		desc: require('@/assets/sheep_desc.png'),
		src: require('@/assets/sheep.gif'),
		go: require('@/assets/sheep_go.gif')
	},
	tearful: {
		key: 'tearful',
		desc: require('@/assets/tearful_desc.png'),		
		src: require('@/assets/tearful.gif'),
		go: require('@/assets/tearful_go.gif')
	},
}

export const characterList =  Object.keys(characterMap).map(item => {
	return characterMap[item]
})

window.characterList = characterList
window.characterMap = characterMap