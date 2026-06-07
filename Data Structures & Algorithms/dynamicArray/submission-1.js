class DynamicArray {
    arr = undefined;
    capacity = undefined;
    length = undefined;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.arr = new Array(capacity).fill(0);
        this.capacity = capacity;
        this.length = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.length === this.capacity) {
            this.resize();
        }

        this.arr[this.length] = n; 
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const el = this.arr[this.length - 1];
        this.arr.length = this.arr.length--;
        this.length--;
        return el;
    }

    /**
     * @returns {void}
     */
    resize() {
        const dbl = this.arr.length === 0 ? 1 : 2 * this.arr.length;

        const newArr = new Array(dbl).fill(0);
        for(let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }

        this.arr = newArr;
        this.capacity = dbl;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
