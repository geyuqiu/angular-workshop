export class Ringbuffer<T> {
    public buffer: T[] = [];

    constructor(public readonly size: number) {
    }

    add(value: T): void {
        if (this.buffer.length >= this.size)
            this.take();
        this.buffer.push(value);
    }

    take(): T | undefined {
        return this.buffer.shift();
    }

    count(): number {
        return this.buffer.length;
    }

}
