def firstRepeatingNumber(nums):
    for i in range(len(nums)):
        if nums[i] in nums[:i]:
            return nums[i]
    return -1


firstRepeatingNumber([1,5,3,4,3,1,6])