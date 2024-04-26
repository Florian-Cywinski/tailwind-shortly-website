// Validate a URL
const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

linkForm.addEventListener('submit', formSubmit)

function validURL(str) {    // Outputs true if it is a valid URL and false if not - regular expression
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

function formSubmit(e) {
  e.preventDefault()  // To prevent the form to submit to a file and therefor be able to do custom stuff

  if (input.value === '') {
    errMsg.innerHTML = 'Please enter something'
    input.classList.add('border-red')
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = 'Please enter a valid URL'
    input.classList.add('border-red')
  } else {
    errMsg.innerHTML = ''
    input.classList.remove('border-red')
    alert('Success')
  }
}

// Hamburger menu functionallity (for smaller screens)
const btn = document.getElementById('menu-btn') // To target the button for the burger menu
const menu = document.getElementById('menu')    // To target the burger menu itself

btn.addEventListener('click', navToggle)        // To add an event listener to the button

function navToggle() {                          // The function which will run after clicking the button
  btn.classList.toggle('open')                  // The method toggle() add / removes the class of open (transforms the three lines of the burger menu into an X)
  menu.classList.toggle('flex')                 // The method toggle() add / removes the class of flex  (shows the menu)
  menu.classList.toggle('hidden')               // The method toggle() add / removes the class of hidden  (hides the menu)
}