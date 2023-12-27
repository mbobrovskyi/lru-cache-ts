import type { ICache } from "./ICache";
import { LinkedList } from "./LinkedList";

export class LRUCache<TKey = string, TValue = any> implements ICache<TKey, TValue> {
    private readonly capacity: number;
    private cache;
    private cacheValues: LinkedList<TKey>;

    public constructor(capacity: number) {
        this.capacity = capacity;
        if (capacity < 0) {
            throw new Error("Capacity should be positive.");
        }

        this.cache = new Map<TKey, TValue>();
        this.cacheValues = new LinkedList<TKey>();
    }

    public get(key: TKey): TValue | undefined {
        const foundValue = this.cache.get(key);
        if (foundValue === undefined) {
            return undefined;
        }

        this.cacheValues.delete(key);
        this.cacheValues.append(key);

        return foundValue;
    }

    public set(key: TKey, value: TValue): void {
        if (value === undefined) {
            return this.delete(key);
        }

        const foundValue = this.cache.get(key);

        if (foundValue === undefined) {
            this.cacheValues.append(key);

            if (this.cacheValues.getSize() > this.capacity) {
                this.cache.delete(this.cacheValues.getHead()!.value);
                this.cacheValues.deleteHead();
            }
        } else {
            this.cacheValues.delete(key);
            this.cacheValues.append(key);
        }

        this.cache.set(key, value);
    }

    public delete(key: TKey): void {
        if (this.cache.get(key)) {
            this.cache.delete(key);
            this.cacheValues.delete(key);
        }
    }

}