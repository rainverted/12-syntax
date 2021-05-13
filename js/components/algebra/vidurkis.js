import { dalyba } from './dalyba.js';
import { suma } from './suma.js';

function vidurkis(list) {
    const skaiciuKiekis = list.length;
    let skaiciuSuma = 0;

    for (let i = 0; i < skaiciuKiekis; i++) {
        const skaicius = list[i];
        skaiciuSuma = suma(skaiciuSuma, skaicius);
    }

    return dalyba(skaiciuSuma, skaiciuKiekis);
}

export { vidurkis }