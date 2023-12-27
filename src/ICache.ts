export interface ICache<TKey = void, TValue = any> {
    get(key: TKey): TValue | undefined;
    set(key: TKey, value: TValue): void;
    delete(key: TKey): void;
}