
function mergeArrays(firstInput: number[][], secondInput: number[][]): number[][] {

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


function updateUnit(unit: Unit, index: number, input: number[][]): void {

    if (index < input.length) {
        unit.ID = input[index][0];
        unit.value = input[index][1];
    } else {
        unit.ID = Number.MAX_SAFE_INTEGER;
    }
}

function updateMergedArrays(unit: Unit, mergedArrays: number[][]): void {

    if (mergedArrays.length > 0 && mergedArrays[mergedArrays.length - 1][0] === unit.ID) {
        mergedArrays[mergedArrays.length - 1][1] += unit.value;
    } else {
        mergedArrays.push([unit.ID, unit.value]);
    }
}
