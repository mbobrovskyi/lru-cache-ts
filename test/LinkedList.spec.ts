import {LRUCache} from "../src/LRUCache";
import {LinkedList} from "../src/LinkedList";

describe("Linked List", () => {
    it("test", () => {
        const list = new LinkedList<number>();

        list.prepend(1);
        list.append(2);
        list.append(3);
        list.prepend(0);

        list.delete(3);

        expect(list.getHead()?.value).toEqual(0);
        expect(list.getHead()?.next?.value).toEqual(1);
        expect(list.getHead()?.next?.next?.value).toEqual(2);
        expect(list.getHead()?.next?.next?.value).toEqual(2);
        expect(list.getHead()?.next?.next?.next?.value).toBeUndefined();
    });
});