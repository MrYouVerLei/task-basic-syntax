export function romanToInteger(str) {
    let result = 0;
    let i = 0;
    let prev = 1000;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    while (i < str.length) {
        switch (str[i]) {
            case 'I':
                result += 1;
                prev = 1;
                break;
            case 'V':
                result += comparator(prev, 5);
                prev = 5;
                break;
            case 'X':
                result += comparator(prev, 10);
                prev = 10;
                break;
            case 'L':
                result += comparator(prev, 50);
                prev = 50;
                break;
            case 'C':
                result += comparator(prev, 100);
                prev = 100;
                break;
            case 'D':
                result += comparator(prev, 500);
                prev = 500;
                break;
            case 'M':
                result += comparator(prev, 1000);
                prev = 1000;
                break;
        }
        i++;
    }
    return result;
}

export function comparator(prev, value) {
    let res;
    if (prev < value) {
        res = value - 2 * prev;
    } else {
        res = value;
    }
    return res;
}
