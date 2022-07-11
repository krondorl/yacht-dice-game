import 'jest';
import GameService from './game.service';

describe('GameService', () => {
    let gameService = new GameService();
    it('checks isFives', () => {
        expect(gameService.isFives([1,1,1,1,1])).toBe(true);
    });
});