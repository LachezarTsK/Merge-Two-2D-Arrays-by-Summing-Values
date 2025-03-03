
class Solution {

    class Unit {

        var ID = 0
        var value = 0
    }

    fun mergeArrays(firstInput: Array<IntArray>, secondInput: Array<IntArray>): Array<IntArray> {

        var i = 0
        var j = 0
        val first = Unit()
        val second = Unit()
        val mergedArrays = ArrayList<IntArray>()

        while (i < firstInput.size || j < secondInput.size) {

            updateUnit(first, i, firstInput)
            updateUnit(second, j, secondInput)

            if (first.ID <= second.ID) {
                updateMergedArrays(first, mergedArrays)
                ++i
                continue
            }

            updateMergedArrays(second, mergedArrays)
            ++j
        }

        return mergedArrays.toTypedArray()
    }

    private fun updateUnit(unit: Unit, index: Int, input: Array<IntArray>) {

        if (index < input.size) {
            unit.ID = input[index][0]
            unit.value = input[index][1]
        } else {
            unit.ID = Integer.MAX_VALUE
        }
    }

    private fun updateMergedArrays(unit: Unit, mergedArrays: ArrayList<IntArray>) {

        if (mergedArrays.isNotEmpty() && mergedArrays.last()[0] == unit.ID) {
            mergedArrays.last()[1] += unit.value
        } else {
            mergedArrays.add(intArrayOf(unit.ID, unit.value))
        }
    }
}
