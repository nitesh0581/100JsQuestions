var isLongPressedName = function(name, typed) {
    let i = 0;
    let j = 0;
    while (i < typed.length && j <= name.length) {
        if (typed[i] == name[j]) {
            j++;
        } else if (typed[i] != name[j - 1]) {
            return false;
        }
        i++;
    }

    return j == name.length && i==typed.length;
};
//q: https://leetcode.com/problems/long-pressed-name/