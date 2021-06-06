interface IKeyPair {
    readonly key: number;
    value?: string;
}

let kv1: IKeyPair = { key: 1, value: "John" };

let kv2: IKeyPair = { key: 2 };

let kv3: IKeyPair = { key: 2, age: "20" }; // Compiler error

kv2.key = 3; // Compiler error