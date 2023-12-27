import {LinkedListNode} from "./LinkedListNode";

export interface IList<TValue = any> {
    getSize(): number;
    isEmpty(): boolean;
    getHead(): LinkedListNode<TValue> | undefined;
    getTail(): LinkedListNode<TValue> | undefined;
    prepend(value: TValue): void;
    append(value: TValue): void;
    delete(value: TValue): void;
    deleteHead(): void;
    deleteTail(): void;
    fromArray(arr: TValue[]): void;
    toArray(): TValue[];
}