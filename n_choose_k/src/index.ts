const nChooseK = <T>(elements: T[], k: number): T[][] => {
    const choices: T[][] = [];
    const limit: number = Math.pow(2, elements.length);
    for (let i = 0; i < limit; i++) {
        let mask: number = i;
        const positions: number[] = [];
        for (let j = 0; j < elements.length; j++) {
            if ((mask & 1) == 1) {
                positions.push(j);
            }
            mask >>= 1;
        }
        if (positions.length == k) {
            const names: T[] = [];
            for (const position of positions) {
                names.push(elements[position]);
            }
            choices.push(names);
        }
    }
    return choices;
};

const nChooseKFunctional = <T>(elements: T[], k: number): T[][] => {
    const oneBitsAtIndices = (x: number): number[] => {
        const oneBitsAt: number[] = [];
        for (let i = 0; x > 0; i++) {
            if ((x & 1) == 1) {
                oneBitsAt.push(i);
            }
            x >>= 1;
        }
        return oneBitsAt;
    }
    return [...Array(Math.pow(2, elements.length)).keys()]
        .map(oneBitsAtIndices)
        .filter(xs => xs.length == k)
        .map(xs => xs.reduce((acc: T[], x: number) => acc.concat([elements[x]]), []));
};

console.log(nChooseK(["a", "b", "c", "d", "e", "f", "g"], 3));
console.log(nChooseKFunctional(["a", "b", "c", "d", "e", "f", "g"], 3));
