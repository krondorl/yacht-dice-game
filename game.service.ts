export function getRandomDiceNumber(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function rollDice(): number[] {
    const diceArray: number[] = [];
    for (let n = 1; n <= 5; n++) {
        diceArray.push(getRandomDiceNumber());
    }
    diceArray.sort((n1, n2) => n1 - n2);
    return diceArray;
}

export function isOnes(diceArray: number[]): boolean {
    // implement
    return false;
}

export function isTwos(diceArray: number[]): boolean {
    // implement
    return false;
}

export function isThrees(diceArray: number[]): boolean {
    // implement
    return false;
}

export function isFours(diceArray: number[]): boolean {
    // implement
    return false;
}

export function isFives(diceArray: number[]): boolean {
    // implement
    return false;
}

export function isSixes(diceArray: number[]): boolean {
    // implement
    return false;
}

export function isFullHouse(diceArray: number[]): boolean {
    // implement
    return false;
}

export function isFourOfAKind(diceArray: number[]): boolean {
    // implement
    return false;
}

export function isLittleStraight(diceArray: number[]): boolean {
    const compareArray = [1, 2, 3, 4, 5];
    if (JSON.stringify(diceArray) === JSON.stringify(compareArray)) {
        return true;
    }
    return false;
}

export function isBigStraight(diceArray: number[]): boolean {
    const compareArray = [2, 3, 4, 5, 6];
    if (JSON.stringify(diceArray) === JSON.stringify(compareArray)) {
        return true;
    }
    return false;
}

export function isYacht(diceArray: number[]): boolean {
    const checkingSet = new Set<number>();
    diceArray.forEach(diceValue => checkingSet.add(diceValue));
    if (checkingSet.size === 1) {
        return true;
    }
    return false;
}
