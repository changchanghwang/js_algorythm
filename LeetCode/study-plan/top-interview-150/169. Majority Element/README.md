Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 \* 104
-109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?

### 해결방법

내가 푼 방법은 map을 이용해서 각 요소의 개수를 세고 그 중 n/2 보다 큰 요소를 찾는 방법이다.

`Boyer-Moore Voting Algorithm` 알고리즘이라는 것이 있더라..

Boyer-Moore Voting Algorithm 알고리즘은 배열에서 2분의 1 이상을 차지하는 요소를 찾는 알고리즘이다.

1. 주어진 배열에서 가장 많이 등장하는 요소를 찾는다.
2. 배열을 순회하면서 다음과 같이 카운트한다.
   1. 현재 카운트가 0이면 현재 요소를 후보로 지정한다.
   2. 현재 요소가 후보와 같으면 카운트를 1 증가시킨다.
   3. 현재 요소가 후보와 다르면 카운트를 1 감소시킨다.
3. 배열을 순회하면서 카운트를 증가시킨 후보가 가장 많이 등장하는 요소이다.
