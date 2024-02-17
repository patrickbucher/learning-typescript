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


console.log(nChooseK(["a", "b", "c", "d", "e", "f", "g"], 3));
