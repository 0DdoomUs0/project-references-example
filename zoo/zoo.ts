import { Dog, createDog } from '../animals/index';
import { GeneratedContent } from './generated/generatedindex'

const x = 44;

export function createZoo(): Array<Dog> {

    GeneratedContent();

    console.log(x);
    return [
        createDog()
    ];
}

