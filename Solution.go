
package main

import "math"

func mergeArrays(firstInput [][]int, secondInput [][]int) [][]int {

    i := 0
    j := 0
    first := &Unit{ID: 0, value: 0}
    second := &Unit{ID: 0, value: 0}
    mergedArrays := make([][]int, 0)

    for i < len(firstInput) || j < len(secondInput) {

        updateUnit(first, i, firstInput)
        updateUnit(second, j, secondInput)

        if first.ID <= second.ID {
            updateMergedArrays(first, &mergedArrays)
            i++
            continue
        }

        updateMergedArrays(second, &mergedArrays)
        j++
    }

    return mergedArrays
}

type Unit struct {

    ID    int
    value int
}

func updateUnit(unit *Unit, index int, input [][]int) {

    if index < len(input) {
        unit.ID = input[index][0]
        unit.value = input[index][1]
    } else {
        unit.ID = math.MaxInt
    }
}

func updateMergedArrays(unit *Unit, mergedArrays *[][]int) {

    if len(*mergedArrays) > 0 && (*mergedArrays)[len(*mergedArrays)-1][0] == unit.ID {
        (*mergedArrays)[len(*mergedArrays)-1][1] += unit.value
    } else {
        *mergedArrays = append((*mergedArrays), []int{unit.ID, unit.value})
    }
}
