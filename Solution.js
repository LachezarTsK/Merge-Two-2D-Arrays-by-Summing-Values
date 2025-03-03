
/**
 * @param {number[][]} firstInput
 * @param {number[][]} secondInput
 * @return {number[][]}
 */
var mergeArrays = function (firstInput, secondInput) {

    let i = 0;
    let j = 0;
    const first = new Unit();
    const second = new Unit();
    const mergedArrays = new Array();

    while (i < firstInput.length || j < secondInput.length) {

        updateUnit(first, i, firstInput);
        updateUnit(second, j, secondInput);

        if (first.ID <= second.ID) {
            updateMergedArrays(first, mergedArrays);
            ++i;
            continue;
        }

        updateMergedArrays(second, mergedArrays);
        ++j;
    }

    return mergedArrays;
};

class Unit {

    ID = 0;
    value = 0;
}

/**
 * @param {Unit} unit
 * @param {number} index
 * @param {number} input
 * @return {void}
 */
function updateUnit(unit, index, input) {

    if (index < input.length) {
        unit.ID = input[index][0];
        unit.value = input[index][1];
    } else {
        unit.ID = Number.MAX_SAFE_INTEGER;
    }
}

/**
 * @param {Unit} unit
 * @param {number[][]} mergedArrays
 * @return {void}
 */
function updateMergedArrays(unit, mergedArrays) {

    if (mergedArrays.length > 0 && mergedArrays[mergedArrays.length - 1][0] === unit.ID) {
        mergedArrays[mergedArrays.length - 1][1] += unit.value;
    } else {
        mergedArrays.push([unit.ID, unit.value]);
    }
}
