import {Ringbuffer} from "../src/ringbuffer";

describe('Ringbuffer', () => {
    it('sets size in constructor', () => {
        const ringbuffer = new Ringbuffer(3)
        expect(ringbuffer.size).toEqual(3);
    })

    // describe('count', () => {
    //     it('returns 1 after one element addition', () => {
    //         const ringbuffer = new Ringbuffer<number>(3);
    //         ringbuffer.add(1);
    //         expect(ringbuffer.count()).toEqual(1)
    //     })
    //     it('returns 2 after two element additions', () => {
    //         const ringbuffer = new Ringbuffer<number>(3);
    //         ringbuffer.add(1);
    //         ringbuffer.add(2);
    //         expect(ringbuffer.count()).toEqual(2)
    //     })
    // })
    //
    // describe('take', () => {
    //     it('returns element which was previously added', () => {
    //         const ringbuffer = new Ringbuffer<number>(3);
    //         ringbuffer.add(1);
    //         expect(ringbuffer.take()).toEqual(1)
    //     })
    //     it('checks ringbuffer size after adding more elements than size', () => {
    //         const ringbuffer = new Ringbuffer<number>(2);
    //         ringbuffer.add(1);
    //         ringbuffer.add(2);
    //         ringbuffer.add(3);
    //         expect(ringbuffer.count()).toEqual(2)
    //         expect(ringbuffer.take()).toEqual(2)
    //     })
    // })
});
