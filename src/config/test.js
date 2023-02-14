let str = `class Solution {
    public int maximizeWin(int[] A, int k) {
        int res = 0, n = A.length, j = 0, dp[] = new int[n + 1];
        for (int i = 0; i < n; ++i) {
            while (A[j] < A[i] - k)
                ++j;
            dp[i + 1] = Math.max(dp[i], i - j + 1);
            res = Math.max(res, i - j + 1 + dp[j]);
        }
        return rgfsfdas;
    }
}`


function financial(x) {
    return Number.parseFloat(x).toFixed(4);
}

let a = str.split(/\s+/).join('').length;

let ans = (1-a/500)*25
console.log(a);

console.log(financial(ans));