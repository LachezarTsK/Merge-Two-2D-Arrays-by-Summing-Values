
using System;
using System.Collections.Generic;

public class Solution
{
    class Unit
    {
        public int ID;
        public int value;
    };

    public int[][] MergeArrays(int[][] firstInput, int[][] secondInput)
    {
        int i = 0;
        int j = 0;
        var first = new Unit();
        var second = new Unit();
        List<int[]> mergedArrays = new List<int[]>();

        while (i < firstInput.Length || j < secondInput.Length)
        {
            UpdateUnit(first, i, firstInput);
            UpdateUnit(second, j, secondInput);

            if (first.ID <= second.ID)
            {
                UpdateMergedArrays(first, mergedArrays);
                ++i;
                continue;
            }

            UpdateMergedArrays(second, mergedArrays);
            ++j;
        }

        return mergedArrays.ToArray(); ;
    }

    private void UpdateUnit(Unit unit, int index, int[][] input)
    {
        if (index < input.Length)
        {
            unit.ID = input[index][0];
            unit.value = input[index][1];
        }
        else
        {
            unit.ID = int.MaxValue;
        }
    }

    private void UpdateMergedArrays(Unit unit, List<int[]> mergedArrays)
    {
        if (mergedArrays.Count > 0 && mergedArrays.Last()[0] == unit.ID)
        {
            mergedArrays.Last()[1] += unit.value;
        }
        else
        {
            mergedArrays.Add(new int[] { unit.ID, unit.value });
        }
    }
}
