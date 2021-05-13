/*arrow function


duodamas "array of strings"
gauti vientisa "string", kuris sudarytas is"
    -zodzio pirmos raides
    -zodzio vidurines raides
    -zodzio paskutines raides

TESTAI:
vientisasTekstas(['labas', 'rytas']) -> 'lbsrts'
vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']) -> 'maonsmsyragts'
vientisasTekstas(['as', 'i', 'ten']) -> 'aasiiiten'

FUNKCIJOS:
function vientisasTekstas - sujungia array i vientisa string
function pirmaRaide('labas') -> '1'
function vidurineRaide('labas') - 'b'
function paskutineRaide('labas') -> 's'
*/

import { pirmaRaide } from "./pirmaRaide.js";
import { vidurineRaide } from "./vidurineRaide.js";
import { paskutineRaide } from "./paskutineRaide.js";


//IMPORT

function vientisasTekstas(words) {
    let answer = '';

    for (let i=0; i < words.length; i++) {
        const word = words[i];
        answer += pirmaRaide(word);
       answer += vidurineRaide(word);
       answer += paskutineRaide(word);
    }
    return answer
}

export { vientisasTekstas }

