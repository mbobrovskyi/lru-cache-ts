import type { IList } from "./IList";
import { LinkedListNode } from "./LinkedListNode";

export class LinkedList<TValue = any> implements IList<TValue> {
    private head: LinkedListNode<TValue> | undefined;
    private tail: LinkedListNode<TValue> | undefined;

    public constructor() {
        this.head = this.tail = undefined;
    }

    public getSize(): number {
        let count = 0;

        let head = this.head;

        while (head !== undefined) {
            count++;
            head = head.next
        }

        return count;
    }
    
    public isEmpty():boolean {
        return this.head === undefined;
    }

    public getHead(): LinkedListNode<TValue> | undefined {
        return this.head;
    }

    public getTail(): LinkedListNode<TValue> | undefined {
        return this.tail;
    }

    public prepend(value: TValue): void {
        if (this.isEmpty()) {
            this.head = this.tail = new LinkedListNode<TValue>(value);
            return;
        }

        this.head = new LinkedListNode<TValue>(value, this.head);
    }

    public append(value: TValue): void {
        if (this.isEmpty()) {
            this.head = this.tail = new LinkedListNode<TValue>(value);
            return;
        }

        this.tail = this.tail!.next = new LinkedListNode<TValue>(value);
    }

    public delete(value: TValue): void {
        while (this.head !== undefined) {
            if (this.head.value !== value) {
                break;
            }
            this.deleteHead();
        }

        if (this.isEmpty()) {
            return;
        }

        let head: LinkedListNode<TValue> = this.head!;

        while (head.next !== undefined) {
            if (head.next.value === value) {
                head.next = head.next.next;
            } else {
                head = head.next!;
            }
        }
    }


    public deleteHead(): void {
        if (this.isEmpty()) {
             return;
        }

        this.head = this.head!.next;

        if (this.head === undefined) {
            this.tail = undefined;
        }
    }

    public deleteTail(): void {
        if (this.isEmpty()) {
            return;
        }

        if (this.head) {
            this.head = undefined;
            this.tail = undefined;
            return;
        }

        let head: LinkedListNode<TValue> | undefined = this.head;

        while (head!.next !== this.tail!.value) {
            head = head!.next;
        }

        this.tail = head!.next = undefined;
    }

    public fromArray(arr: any[]): LinkedList<TValue> {
        const list = new LinkedList();

        for (const item of arr) {
            list.append(item);
        }

        return list;
    }

    public  toArray(): TValue[] {
        const arr: TValue[] = [];

        let head = this.head;

        while (head !== undefined) {
            arr.push(head.value);
            head = head.next;
        }

        return arr;
    }

}