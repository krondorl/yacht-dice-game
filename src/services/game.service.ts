export default class GameService {
    public getRandomDiceNumber(): number {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    public rollDice(): number[] {
        const diceArray: number[] = [];
        for (let n = 1; n <= 5; n++) {
            diceArray.push(this.getRandomDiceNumber());
        }
        diceArray.sort((n1, n2) => n1 - n2);
        return diceArray;
    }
    
    public isOnes(diceArray: number[]): boolean {
        // implement
        return false;
    }
    
    public isTwos(diceArray: number[]): boolean {
        // implement
        return false;
    }
    
    public isThrees(diceArray: number[]): boolean {
        // implement
        return false;
    }
    
    public isFours(diceArray: number[]): boolean {
        // implement
        return false;
    }
    
    public isFives(diceArray: number[]): boolean {
        // implement
        return false;
    }
    
    public isSixes(diceArray: number[]): boolean {
        // implement
        return false;
    }
    
    public isFullHouse(diceArray: number[]): boolean {
        // implement
        return false;
    }
    
    public isFourOfAKind(diceArray: number[]): boolean {
        // implement
        return false;
    }
    
    public isLittleStraight(diceArray: number[]): boolean {
        const compareArray = [1, 2, 3, 4, 5];
        if (JSON.stringify(diceArray) === JSON.stringify(compareArray)) {
            return true;
        }
        return false;
    }
    
    public isBigStraight(diceArray: number[]): boolean {
        const compareArray = [2, 3, 4, 5, 6];
        if (JSON.stringify(diceArray) === JSON.stringify(compareArray)) {
            return true;
        }
        return false;
    }
    
    public isYacht(diceArray: number[]): boolean {
        const checkingSet = new Set<number>();
        diceArray.forEach(diceValue => checkingSet.add(diceValue));
        if (checkingSet.size === 1) {
            return true;
        }
        return false;
    }
}
