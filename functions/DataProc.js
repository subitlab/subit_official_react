export function random_choose(array, n) {
    let get_r = [];
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