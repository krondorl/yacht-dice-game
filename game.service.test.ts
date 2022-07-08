import * as GameService from './game.service';

describe('GameService', () => {
    it('checks isFives', () => {
        expect(GameService.isFives([1,1,1,1,1])).toBe(true);
    });
});