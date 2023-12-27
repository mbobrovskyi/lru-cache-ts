import {LRUCache} from "../src/LRUCache";

describe("LRU Cache", () => {
    it("test", () => {
        const cache = new LRUCache<number, number>(3);

        expect(cache.get(1)).toBeUndefined();

        cache.set(1, 1);
        expect(cache.get(1)).toEqual(1);

        cache.set(2, 2);
        cache.set(3, 3);
        cache.set(4, 4);
        expect(cache.get(1)).toBeUndefined();

        cache.set(5, 5);
        cache.set(2, 5);
        cache.set(6, 6);
        expect(cache.get(3)).toBeUndefined();
        expect(cache.get(4)).toBeUndefined();

        cache.set(7, 7);
        cache.delete(7);
        expect(cache.get(7)).toBeUndefined();

        cache.set(8, 8);
    });
});