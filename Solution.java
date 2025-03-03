
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private class Unit {

        int ID;
        int value;
    }

    public int[][] mergeArrays(int[][] firstInput, int[][] secondInput) {

        int i = 0;
        int j = 0;
        var first = new Unit();
        var second = new Unit();
        List<int[]> mergedArrays = new ArrayList<>();

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

        return mergedArrays.toArray(int[][]::new);
    }

    private void updateUnit(Unit unit, int index, int[][] input) {

        if (index < input.length) {
            unit.ID = input[index][0];
            unit.value = input[index][1];
        } else {
            unit.ID = Integer.MAX_VALUE;
        }
    }

    private void updateMergedArrays(Unit unit, List<int[]> mergedArrays) {

        if (!mergedArrays.isEmpty() && mergedArrays.getLast()[0] == unit.ID) {
            mergedArrays.getLast()[1] += unit.value;
        } else {
            mergedArrays.add(new int[]{unit.ID, unit.value});
        }
    }
}
