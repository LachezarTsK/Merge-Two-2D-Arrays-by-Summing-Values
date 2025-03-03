
#include <limits>
#include <vector>
using namespace std;

class Solution {

    struct Unit {

        int ID{};
        int value{};
    };

public:
    vector<vector<int>> mergeArrays(const vector<vector<int>>& firstInput, const vector<vector<int>>& secondInput) const {

        int i = 0;
        int j = 0;
        Unit first;
        Unit second;
        vector<vector<int>> mergedArrays;

        while (i < firstInput.size() || j < secondInput.size()) {

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
    }

private:
    void updateUnit(Unit& unit, int index, const vector<vector<int>>& input) const {

        if (index < input.size()) {
            unit.ID = input[index][0];
            unit.value = input[index][1];
        }
        else {
            unit.ID = numeric_limits<int>::max();
        }
    }

    void updateMergedArrays(Unit& unit, vector<vector<int>>& mergedArrays) const {

        if (!mergedArrays.empty() && mergedArrays.back()[0] == unit.ID) {
            mergedArrays.back()[1] += unit.value;
        }
        else {
            mergedArrays.push_back({ unit.ID, unit.value });
        }
    }
};
