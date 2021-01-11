import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import { getWeather } from './js/weatherClient'
import { postData } from './js/weatherClient'
import { updateUI } from './js/weatherClient'



import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    handleSubmit,
    checkForName,
    getWeather,
    postData,
    updateUI
}

console.log(checkForName);

alert("I EXIST");
console.log("CHANGE!!");
