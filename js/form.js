const name = document.getElementById('mininame')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
	let messages = []
	if (name.value === '' || name.value == null) {
		messages.push('You have to pick one')
	}
	
	if (messages.length > 0) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
})