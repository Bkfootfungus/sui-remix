module Counter::Main {
    struct Counter has store {
        value: u64,
    }

    public fun new(): Counter {
        Counter { value: 0 }
    }

    public fun increment(counter: &mut Counter) {
        counter.value = counter.value + 1;
    }

    public fun get(counter: &Counter): u64 {
        counter.value
    }
}
