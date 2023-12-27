export class LinkedListNode<TValue = any> {
    public value: TValue;
    public next: LinkedListNode<TValue> | undefined;

    public constructor(value: TValue, next?: LinkedListNode<TValue> | undefined) {
        this.value = value;
        this.next = next || undefined;
    }
}
