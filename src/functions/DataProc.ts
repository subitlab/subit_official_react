export function random_choose(array: string | any[], n: number) {
    let get_r: number[] = [];
    let get = [];
    while (n--) {
        while (1) {
            let r = Math.floor(Math.random() * (array.length));
            if (!get_r.includes(r)) {
                get_r.push(r);
                get.push(array[r]);
                break;
            }
        }
    }
    return get;
}