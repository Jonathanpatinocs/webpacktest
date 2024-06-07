import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');
    let string = myName('Johny');
    element.textContent = string;

    return element;
}

document.body.appendChild(component());