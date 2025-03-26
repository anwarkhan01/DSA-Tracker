const dsaData = {
    basicMaths: {
        totalProblems: 7,
        problems: [
            {
                title: "Count Digit",
                difficulty: "Easy",
                description: "Given an integer N, return the number of digits in N.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 12345",
                    output: "5",
                    explanation: "The number 12345 has 5 digits."
                },
                example_2: {
                    input: "N = 7789",
                    output: " 4",
                    explanation: "The number 7789 has 4 digits."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://practice.geeksforgeeks.org/problems/count-digits5716/1"
            },
            {
                title: "Reverse a Number",
                difficulty: "Easy",
                description: "Given an integer N return the reverse of the given number.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 12345",
                    output: "54321",
                    explanation: "The reverse of 12345 is 54321."
                },
                example_2: {
                    input: "N = 7789",
                    output: "9877",
                    explanation: "The reverse of number 7789 is 9877."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/reverse-integer/"
            },
            {
                title: "Check Palindrome",
                difficulty: "Easy",
                description: "Given an integer N, return true if it is a palindrome else return false.",
                note: "",
                problemExplanation: "A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.",
                example_1: {
                    input: "N = 4554",
                    output: "Palindrome Number",
                    explanation: "The reverse of 4554 is 4554 and therefore it is palindrome number"
                },
                example_2: {
                    input: "N = 7789",
                    output: "Not Palindrome",
                    explanation: "The reverse of number 7789 is 9877 and therefore it is not palindrome"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/palindrome-number/"
            },
            {
                title: "GCD or HCF",
                difficulty: "Easy",
                description: "Given two integers N1 and N2, find their greatest common divisor.",
                note: "",
                problemExplanation: "The Greatest Common Divisor of any two integers is the largest number that divides both integers.",
                example_1: {
                    input: "N1 = 9, N2 = 12",
                    output: "3",
                    explanation: "The factors of 9 are 1, 3, and 9; while the factors of 12 are 1, 2, 3, 4, 6, and 12; the common factors are 1,3 out of which 3 is the greatest hence it is the GCD."
                },
                example_2: {
                    input: "N1 = 20, N2 = 15",
                    output: "5",
                    explanation: "The factors of 20: 1, 2, 4 and 5; while the factors of 15 are 1, 3 and 5; the common factors are 1, 5 out of which 5 is the greatest hence it is the GCD."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://practice.geeksforgeeks.org/problems/lcm-and-gcd4516/1"
            },
            {
                title: " Armstrong Number",
                difficulty: "Easy",
                description: "Given an integer N, return true it is an Armstrong number otherwise return false.",
                note: "",
                problemExplanation: "An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.",
                example_1: {
                    input: "N = 153",
                    output: "True",
                    explanation: "13+53+33 = 1 + 125 + 27 = 153"
                },
                example_2: {
                    input: "N = 371",
                    output: "True",
                    explanation: "33+53+13 = 27 + 343 + 1 = 371"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/armstrong-number/"
            },
            {
                title: "Print all Divisors",
                difficulty: "Easy",
                description: "Given an integer N, return all divisors of N.",
                note: "",
                problemExplanation: "A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.",
                example_1: {
                    input: "N = 36",
                    output: "[1, 2, 3, 4, 6, 9, 12, 18, 36]",
                    explanation: "The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36."
                },
                example_2: {
                    input: "N =12",
                    output: "[1, 2, 3, 4, 6, 12]",
                    explanation: "The divisors of 12 are 1, 2, 3, 4, 6, 12."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://practice.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1"
            },
            {
                title: "Check for Prime",
                difficulty: "Easy",
                description: "Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 2",
                    output: "True",
                    explanation: "2 is a prime number because it has two divisors: 1 and 2 (the number itself)."
                },
                example_2: {
                    input: "N =10",
                    output: "False",
                    explanation: "10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1"
            },
        ]
    },
    basicRecursion: {
        totalProblems: 8,
        problems: [
            {
                title: "Print 1 To N Without Loop",
                difficulty: "Easy",
                description: "Print numbers from 1 to n without the help of loops. You only need to write the function printNos() that takes N as parameter and prints number from 1 to N recursively.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "n = 10",
                    output: "1 2 3 4 5 6 7 8 9 10",
                    explanation: ""
                },
                example_2: {
                    input: "n = 5",
                    output: "Output: 1 2 3 4 5",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3K2epHv"
            },
            {
                title: "Print name n times",
                difficulty: "Easy",
                description: "Print name n times without the loop.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "5 ",
                    output: "name name name name name",
                    explanation: ""
                },
                example_2: {
                    input: "",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3y2BiWz"
            },
            {
                title: "Print N to 1 without loop",
                difficulty: "Easy",
                description: "Print numbers from N to 1 (space separated) without the help of loops.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 10",
                    output: "10 9 8 7 6 5 4 3 2 1",
                    explanation: ""
                },
                example_2: {
                    input: "",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3LOkcBn"
            },
            {
                title: "Sum of first n terms",
                difficulty: "Easy",
                description: "Given an integer n, calculate the sum of series 1^3 + 2^3 + 3^3 + 4^3 + … till n-th term.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "n=5",
                    output: "225",
                    explanation: "1^3+2^3+3^3+4^3+5^3=225"
                },
                example_2: {
                    input: "n=7",
                    output: "784",
                    explanation: "1^3+2^3+3^3+4^3+5^3+6^3+7^3=784"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://practice.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1"
            },
            {
                title: "Find all factorial numbers less than or equal to n",
                difficulty: "Easy",
                description: "",
                note: "",
                problemExplanation: "A number n is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 1, 2, 6, 24, 120,",
                example_1: {
                    input: "n = 3",
                    output: "1 2",
                    explanation: "The first factorial number is 1 which is less than equal to n. The second number is 2 which is less than equal to n,but the third factorial number is 6 which is greater than n. So we print only 1 and 2."
                },
                example_2: {
                    input: "n = 6",
                    output: "1 2 6",
                    explanation: "The first three factorial numbers are less than equal to n but the fourth factorial number 24 is greater than n. So we print only first three factorial numbers."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://practice.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0?problemType=functional&difficulty%5B%5D=-1&page=1&query=problemTypefunctionaldifficulty%5B%5D-1page1"
            },
            {
                title: "Reverse a given Array",
                difficulty: "Easy",
                description: "You are given an array. The task is to reverse the array and print it. ",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 5, arr= [5,4,3,2,1]",
                    output: "[1,2,3,4,5]",
                    explanation: "Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on."
                },
                example_2: {
                    input: "N=6 arr = [10,20,30,40]",
                    output: "[40,30,20,10]",
                    explanation: "Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://practice.geeksforgeeks.org/problems/reverse-an-array/0"
            },
            {
                title: "Check if the given String is Palindrome or not",
                difficulty: "Easy",
                description: "Given a string, check if the string is palindrome or not",
                note: "",
                problemExplanation: "A string is said to be palindrome if the reverse of the string is the same as the string.",
                example_1: {
                    input: "Str =  “ABCDCBA”",
                    output: "Palindrome",
                    explanation: "String when reversed is the same as string."
                },
                example_2: {
                    input: "Str = “APARTMENT",
                    output: "Not Palindrome",
                    explanation: "String when reversed is not the same as string."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/valid-palindrome/"
            },
            {
                title: "Print Fibonacci Series up to Nth term",
                difficulty: "Easy",
                description: "Given an integer N. Print the Fibonacci series up to the Nth term.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 5",
                    output: "0 1 1 2 3 5",
                    explanation: "0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)"
                },
                example_2: {
                    input: "6",
                    output: "0 1 1 2 3 5 8",
                    explanation: "0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing)"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/fibonacci-number/"
            },
        ]
    },
    sortingTechniques: {
        totalProblems: 5,
        problems: [
            {
                title: "Selection Sort",
                difficulty: "Easy",
                description: "Given an array of N integers, write a program to implement the Selection sorting algorithm.",
                note: "",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 6, array = [13,46,24,52,20,9]",
                    output: "9,13,20,24,46,52",
                    explanation: "After sorting the array is: 9, 13, 20, 24, 46, 52"
                },
                example_2: {
                    input: "N=5, array = [5,4,3,2,1]",
                    output: "1,2,3,4,5",
                    explanation: "After sorting the array is: 1, 2, 3, 4, 5"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3ppA6YJ"
            },
            {
                title: "Bubble Sort",
                difficulty: "Easy",
                description: "Given an array of N integers, write a program to implement the Bubble Sorting algorithm.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 6, array = [13,46,24,52,20,9]",
                    output: "9,13,20,24,46,52",
                    explanation: "After sorting we get 9,13,20,24,46,52"
                },
                example_2: {
                    input: "N = 5, array = [5,4,3,2,1]",
                    output: "1,2,3,4,5",
                    explanation: "After sorting we get 1,2,3,4,5"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3w6yQx8"
            },
            {
                title: "Insertion Sort",
                difficulty: "Easy",
                description: "Given an array of N integers, write a program to implement the Insertion sorting algorithm.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 6, array = [13,46,24,52,20,9]",
                    output: "9,13,20,24,46,52",
                    explanation: "After sorting we get 9,13,20,24,46,52"
                },
                example_2: {
                    input: "N = 5, array = [5,4,3,2,1]",
                    output: "1,2,3,4,5",
                    explanation: "After sorting we get 1,2,3,4,5"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3JVcqot"
            },
            {
                title: "Merge Sort",
                difficulty: "Easy",
                description: "Given an array of size n, sort the array using Merge Sort.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N=5, arr =[4,2,1,6,7]",
                    output: "1,2,4,6,7",
                    explanation: ""
                },
                example_2: {
                    input: "N = 7, arr ={[3,2,8,5,1,4,23]",
                    output: "1,2,3,4,5,8,23",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3A30Anw"
            },
            {
                title: "Quick Sort",
                difficulty: "Easy",
                description: "Given an array of n integers, sort the array using the Quicksort method.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 5, arr = [4,1,7,9,3]",
                    output: "1 3 4 7 9",
                    explanation: "After sorting the array becomes 1, 3, 4, 7, 9"
                },
                example_2: {
                    input: "N = 8 , arr = [4,6,2,5,7,9,1,3]",
                    output: "1 2 3 4 5 6 7 9",
                    explanation: "After sorting the array becomes 1, 3, 4, 7, 9"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3dsEbIK"
            },
        ]
    },
    arrays: {
        totalProblems: 20,
        problems: [
            {
                title: "Largest Element in Array",
                difficulty: "Easy",
                description: "Given an array, we have to find the largest element in the array.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [1, 8, 7, 56, 90]",
                    output: "90",
                    explanation: "The largest element of given array is 90."
                },
                example_2: {
                    input: "arr = [5, 5, 5, 5]",
                    output: "5",
                    explanation: "The largest element of given array is 5."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3Pld280"
            },
            {
                title: "Second Largest Element in an Array without sorting",
                difficulty: "Easy",
                description: "Given an array arr, return the second largest distinct element from an array. If the second largest element doesn't exist then return -1.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr = [12, 35, 1, 10, 34, 1]",
                    output: "34",
                    explanation: "The largest element of the array is 35 and the second largest element is 34."
                },
                example_2: {
                    input: "arr = [10, 10]",
                    output: "-1",
                    explanation: "The largest element of the array is 10 and the second largest element does not exist so answer is -1."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3pFvBcN"
            },
            {
                title: "Check if an Array is Sorted",
                difficulty: "Easy",
                description: "Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: " N = 5, array = [1,2,3,4,5]",
                    output: "True",
                    explanation: " The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True."
                },
                example_2: {
                    input: "N = 5, array = [5,4,6,7,8]",
                    output: "False",
                    explanation: "The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False."
                },

                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/#:~:text=Input%3A%20nums%20%3D%20%5B2%2C,no%20rotation)%20to%20make%20nums."
            },
            {
                title: "Remove Duplicates from Sorted Array",
                difficulty: "Easy",
                description: "Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.Return k after placing the final result in the first k slots of the array.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr = [1,1,2,2,2,3,3]",
                    output: "arr = [1,2,3,_,_,_,_]",
                    explanation: "Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array."
                },
                example_2: {
                    input: "arr = [1,1,1,2,2,3,3,3,3,4,4]",
                    output: "arr[1,2,3,4,_,_,_,_,_,_,_]",
                    explanation: "Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array."
                },

                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/#:~:text=Input%3A%20nums%20%3D%20%5B0%2C,%2C%203%2C%20and%204%20respectively."
            },
            {
                title: "Left Rotate the Array by One",
                difficulty: "Easy",
                description: "Given an array 'arr' containing 'n' elements, rotate this array left once and return it.Rotating the array left by one means shifting all elements by one place to the left and moving the first element to the last position in the array.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: " a = 5, arr = [1, 2, 3, 4, 5]",
                    output: "[2, 3, 4, 5, 1]",
                    explanation: "Explanation: We moved the 2nd element to the 1st position, and 3rd element to the 2nd position, and 4th element to the 3rd position, and the 5th element to the 4th position, and move the 1st element to the 5th position."
                },
                example_2: {
                    input: " a = 1, arr = [3]",
                    output: "[3]",
                    explanation: "Here only element is present and so the element at first index will be shifted to last index which is also by the way the first index"
                },

                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/rotate-array/"
            },
            {
                title: "Left rotate an array by k places",
                difficulty: "Easy",
                description: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "nums = [1,2,3,4,5,6,7], k = 3",
                    output: "[5,6,7,1,2,3,4]",
                    explanation: "Array is rotated to right by 3 position ."
                },
                example_2: {
                    input: "nums = [-1,-100,3,99], k = 2",
                    output: "[3,99,-1,-100]",
                    explanation: "Array is rotated to right by 2 position."
                },

                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/rotate-array/"
            },
            {
                title: "Move Zeros to end",
                difficulty: "Easy",
                description: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
                note: "that you must do this in-place without making a copy of the array.",
                problemExplanation: "",
                example_1: {
                    input: "nums = [0,1,0,3,12]",
                    output: "[1,3,12,0,0]",
                    explanation: ""
                },
                example_2: {
                    input: "nums = [0]",
                    output: "[0]",
                    explanation: ""
                },

                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/move-zeroes/"
            },
            {
                title: "Linear Search ",
                difficulty: "Easy",
                description: "Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr = 1 2 3 4 5, num = 3",
                    output: "2",
                    explanation: "3 is present in the 2nd index"
                },
                example_2: {
                    input: "arr = 5 4 3 2 1, num = 5",
                    output: "0",
                    explanation: "5 is present in the 0th index"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3KcpHcB"
            },
            {
                title: "Union of Two Sorted Arrays",
                difficulty: "Medium",
                description: "Given two sorted arrays of size n and m respectively, find their union. ",
                note: "",
                problemExplanation: "The Union of two arrays can be defined as the common and distinct elements in the two arrays. Return the elements in sorted order.",
                example_1: {
                    input: "n = 5, arr1 = [1, 2, 3, 4, 5]; m = 5, arr2 = [1, 2, 3, 6, 7] ",
                    output: "1 2 3 4 5 6 7",
                    explanation: "Distinct elements including both the arrays are: 1 2 3 4 5 6 7."
                },
                example_2: {
                    input: "n = 5, arr1 = [2, 2, 3, 4, 5]; m = 5, arr2 = [1, 1, 2, 3, 4]",
                    output: "1 2 3 4 5",
                    explanation: "Distinct elements including both the arrays are: 1 2 3 4 5."
                },
                complexity: {
                    timeComplexity: "O(n+m)",
                    spaceComplexity: "O(n+m)"
                },
                link: "https://bit.ly/3Ap7Onp"
            },
            {
                title: "Find missing number in an array",
                difficulty: "Easy",
                description: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "nums = [3,0,1]",
                    output: "2",
                    explanation: " n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums."
                },
                example_2: {
                    input: "nums = [0,1]",
                    output: "2",
                    explanation: "n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/missing-number/"
            },
            {
                title: "Maximum Consecutive Ones",
                difficulty: "Easy",
                description: "Given a binary array nums, return the maximum number of consecutive 1's in the array.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "nums = [1,1,0,1,1,1]",
                    output: "3",
                    explanation: "There are two consecutive 1's and three consecutive 1's in the array out of which maximum is 3."
                },
                example_2: {
                    input: "nums = [1,0,1,1,0,1]",
                    output: "2",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/max-consecutive-ones/"
            },
            {
                title: "Find the number that appears once, and the other numbers twice",
                difficulty: "Medium",
                description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "nums = [2,2,1]",
                    output: "1",
                    explanation: ""
                },
                example_2: {
                    input: "nums = [4,1,2,1,2]",
                    output: "4",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/single-number/"
            },
            {
                title: "Longest Sub-Array with Sum K",
                difficulty: "Medium",
                description: "Given an array arr containing n integers and an integer k. Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value k.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr = [10, 5, 2, 7, 1, 9], k = 15",
                    output: "4",
                    explanation: "The sub-array is [5, 2, 7, 1]."
                },
                example_2: {
                    input: "arr = [-1, 2, 3], k = 6",
                    output: "0",
                    explanation: "There is no such sub-array with sum 6."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(n)"
                },
                link: "https://practice.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1"
            },
            {
                title: "Two Sum Problem",
                difficulty: "Medium",
                description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "nums = [2,7,11,15], target = 9",
                    output: "[0,1]",
                    explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
                },
                example_2: {
                    input: "arr = [2,6,5,8,11], target = 15",
                    output: "Elements not found",
                    explanation: "There exist no such two numbers whose sum is equal to the target."
                },
                complexity: {
                    timeComplexity: "O(N) + O(N*logN)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/two-sum/"
            },
            {
                title: "Sort an array of 0s, 1s and 2s",
                difficulty: "Medium",
                description: "Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr=[2,0,2,1,1,0] ",
                    output: "[0,0,1,1,2,2]",
                    explanation: ""
                },
                example_2: {
                    input: "arr = [0]",
                    output: "[0]",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3tlM60B"
            },
            {
                title: "Find the Majority Element that occurs more than N/2 times",
                difficulty: "Medium",
                description: "Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [3,2,3]",
                    output: "3",
                    explanation: "When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution."
                },
                example_2: {
                    input: "arr = [2,2,1,1,1,2,2]",
                    output: "7",
                    explanation: "After counting the number of times each element appears and comparing it with half of array size, we get 2 as result."
                },
                complexity: {
                    timeComplexity: "O(2n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3OiPLGG"

            },
            {
                title: "Kadane's Algorithm : Maximum Subarray Sum in an Array",
                difficulty: "Easy",
                description: "Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and returns its sum and prints the subarray.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [-2,1,-3,4,-1,2,1,-5,4]",
                    output: "6",
                    explanation: "[4,-1,2,1] has the largest sum = 6."
                },
                example_2: {
                    input: "arr = [1] ",
                    output: "1",
                    explanation: "Array has only one element and which is giving positive sum of 1."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/maximum-subarray/"

            },
            {
                title: "4 Sum | Find Quads that add up to a target value",
                difficulty: "Hard",
                description: "Given an array of N integers, your task is to find unique quads that add up to give a target value. In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [1,0,-1,0,-2,2], target = 0",
                    output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]",
                    explanation: "We have to find unique quadruplets from the array such that the sum of those elements is equal to the target sum given that is 0. The result obtained is such that the sum of the quadruplets yields 0."
                },
                example_2: {
                    input: "arr = [4,3,3,4,4,2,1,2,1,1], target = 9",
                    output: " [[1,1,3,4],[1,2,2,4],[1,2,3,3]]",
                    explanation: "The sum of all the quadruplets is equal to the target i.e. 9."
                },
                complexity: {
                    timeComplexity: "O(n^3)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3Bsovy2"
            },
            {
                title: "Count the number of subarrays with given xor K",
                difficulty: "Hard",
                description: "Given an array of integers A and an integer B. Find the total number of subarrays having bitwise XOR of all elements equal to k.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [4, 2, 2, 6, 4] , k = 6",
                    output: "4",
                    explanation: "The subarrays having XOR of their elements as 6 are  [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]"
                },
                example_2: {
                    input: "arr = [5, 6, 7, 8, 9], k = 5",
                    output: "2",
                    explanation: "The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(n)"
                },
                link: "https://bit.ly/42tgQvf"
            },
            {
                title: "Find the repeating and missing numbers",
                difficulty: "Hard",
                description: "You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [3,1,2,5,3]",
                    output: "[3,4]",
                    explanation: "A = 3 , B = 4 Since 3 is appearing twice and 4 is missing"
                },
                example_2: {
                    input: "arr = [3,1,2,5,4,6,7,5]",
                    output: "[5,8]",
                    explanation: "A = 5 , B = 8 Since 5 is appearing twice and 8 is missing"
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3MC5iAx"
            },
            {
                title: "Count inversions in an array",
                difficulty: "Hard",
                description: "Given an array of N integers, count the inversion of the array (using merge-sort).",
                note: "What is an inversion of an array? Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i]",
                problemExplanation: "",
                example_1: {
                    input: "arr= [1,2,3,4,5], N = 5",
                    output: "0",
                    explanation: "we have a sorted array and the sorted array has 0 inversions as for i < j you will never find a pair such that A[j] < A[i]. More clear example: 2 has index 1 and 5 has index 4 now 1 < 5 but 2 < 5 so this is not an inversion."
                },
                example_2: {
                    input: "arr = [5,4,3,2,1], N = 5",
                    output: "10",
                    explanation: " we have a reverse sorted array and we will get the maximum inversions as for i < j we will always find a pair such that A[j] < A[i]. Example: 5 has index 0 and 3 has index 2 now (5,3) pair is inversion as 0 < 2 and 5 > 3 which will satisfy out conditions and for reverse sorted array we will get maximum inversions and that is (n)*(n-1) / 2.For above given array there is 4 + 3 + 2 + 1 = 10 inversions."
                },
                complexity: {
                    timeComplexity: "O(n*logn)",
                    spaceComplexity: "O(n)"
                },
                link: "https://www.codingninjas.com/codestudio/problems/number-of-inversions_6840276"
            },
            {
                title: "Count Reverse Pairs",
                difficulty: "Hard",
                description: "Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [1,3,2,3,1], N = 5",
                    output: "2",
                    explanation: "The pairs are (3, 1) and (3, 1) as from both the pairs the condition arr[i] > 2*arr[j] is satisfied."
                },
                example_2: {
                    input: "arr = [3,2,1,4], N = 4",
                    output: "1",
                    explanation: "There is only 1 pair  ( 3 , 1 ) that satisfy the condition arr[i] > 2*arr[j]"
                },
                complexity: {
                    timeComplexity: "O(2*nlogn)",
                    spaceComplexity: "O(n)"
                },
                link: "https://www.codingninjas.com/codestudio/problems/team-contest_6840309"
            },
        ]
    },
    binarySearch: {
        totalProblems: 11,
        problems: [
            {
                title: "Implement Lower Bound",
                difficulty: "Easy",
                description: "Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [1,2,2,3],  N = 4, x = 2",
                    output: "1",
                    explanation: "Index 1 is the smallest index such that arr[1] >= x."
                },
                example_2: {
                    input: "arr = [3,5,8,15,19],  N = 5, x = 9",
                    output: "3",
                    explanation: "Index 3 is the smallest index such that arr[3] >= x."
                },
                complexity: {
                    timeComplexity: "O(logn)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/codestudio/problems/lower-bound_8165382"
            },
            {
                title: "Search Insert Position",
                difficulty: "Easy",
                description: "You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.",
                note: "If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.",
                problemExplanation: "",
                example_1: {
                    input: "arr= [1,2,4,7], x = 6",
                    output: "3",
                    explanation: "6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), the array will still be sorted. {1,2,4,6,7}."
                },
                example_2: {
                    input: "arr = [1,2,4,7], x = 2",
                    output: "1",
                    explanation: "2 is present in the array and so we will return its index i.e. 1."
                },
                complexity: {
                    timeComplexity: "O(logn)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/codestudio/problems/algorithm-to-find-best-insert-position-in-sorted-array_839813?leftPanelTab=0"
            },
            {
                title: "Floor and Ceil in Sorted Array",
                difficulty: "Medium",
                description: "You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].The floor of x is the largest element in the array which is smaller than or equal to x.The ceiling of x is the smallest element in the array greater than or equal to x.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [3, 4, 4, 7, 8, 10], n = 6, x= 5",
                    output: "4 7",
                    explanation: "The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7."
                },
                example_2: {
                    input: "arr = [3, 4, 4, 7, 8, 10], n = 6, x= 8",
                    output: "8 8",
                    explanation: "The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8."
                },
                complexity: {
                    timeComplexity: "O(logn)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/codestudio/problems/ceiling-in-a-sorted-array_1825401?leftPanelTab=0"
            },
            {
                title: "Search Element in a Rotated Sorted Array I",
                difficulty: "Medium",
                description: "Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [4,5,6,7,0,1,2,3], k = 0",
                    output: "4",
                    explanation: "Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array."
                },
                example_2: {
                    input: "arr = [4,5,6,7,0,1,2], k = 3",
                    output: "-1",
                    explanation: "Here, the target is 3. Since 3 is not present in the given rotated sorted array. Thus, we get the output as -1."
                },
                complexity: {
                    timeComplexity: "O(logn)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3MrHDlT"
            },
            {
                title: "Search Element in Rotated Sorted Array II",
                difficulty: "Medium",
                description: " Given an integer array arr of size N, sorted in ascending order (may contain duplicate values) and a target value k. Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False. ",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3",
                    output: "True",
                    explanation: "The element 3 is present in the array. So, the answer is True."
                },
                example_2: {
                    input: "arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10",
                    output: "False",
                    explanation: "The element 10 is not present in the array. So, the answer is False."
                },
                complexity: {
                    timeComplexity: "O(logn)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3M4pMAm"
            },
            {
                title: "Minimum in Rotated Sorted Array",
                difficulty: "Medium",
                description: "Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [4,5,6,7,0,1,2,3]",
                    output: "0",
                    explanation: "Here, the element 0 is the minimum element in the array."
                },
                example_2: {
                    input: "arr = [3,4,5,1,2]",
                    output: "1",
                    explanation: "Here, the element 1 is the minimum element in the array."
                },
                complexity: {
                    timeComplexity: "O(logn)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/42ChjLM"
            },
            {
                title: "Peak element in Array",
                difficulty: "Hard",
                description: "Given an array of length N. Peak element is defined as the element greater than both of its neighbors. Formally, if 'arr[i]' is the peak element, 'arr[i - 1]' < 'arr[i]' and 'arr[i + 1]' < 'arr[i]'. Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.",
                note: "For the first element, the previous element should be considered as negative infinity as well as for the last element, the next element should be considered as negative infinity.",
                problemExplanation: "",
                example_1: {
                    input: "arr= [1,2,3,4,5,6,7,8,5,1]",
                    output: "7",
                    explanation: "In this example, there is only 1 peak that is at index 7."
                },
                example_2: {
                    input: "arr = [1,2,1,3,5,6,4]",
                    output: "1",
                    explanation: "In this example, there are 2 peak numbers that are at indices 1 and 5. We can consider any of them."
                },
                complexity: {
                    timeComplexity: "O(logn)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3MsMNOG"
            },
            {
                title: "Koko Eating Bananas",
                difficulty: "Hard",
                description: "A monkey is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes the time (in hours) for all the bananas to be eaten.",
                note: "Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.",
                problemExplanation: "ind the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.",
                example_1: {
                    input: "arr= [7, 15, 6, 3],  N = 4,  h = 8",
                    output: "5",
                    explanation: "If Koko eats 5 bananas/hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly. So, he will take 8 hours to complete all the piles. "
                },
                example_2: {
                    input: "arr = [25, 12, 8, 14, 19], N = 5, h = 5",
                    output: "25",
                    explanation: "If Koko eats 25 bananas/hr, he will take 1, 1, 1, 1, and 1 hour to eat the piles accordingly. So, he will take 5 hours to complete all the piles."
                },
                complexity: {
                    timeComplexity: "O(N * log(max(a[]))), where max(a[]) ",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/41ExJ4K"
            },
            {
                title: "Minimum days to make M bouquets",
                difficulty: "Hard",
                description: "You are given 'N’ roses and you are also given an array 'arr'  where 'arr[i]'  denotes that the 'ith' rose will bloom on the 'arr[i]th' day.You can only pick already bloomed roses that are adjacent to make a bouquet.You are also told that you require exactly 'k' adjacent bloomed roses to make a single bouquet.",
                note: "Find the minimum number of days required to make at least ‘m' bouquets each containing 'k' roses. Return -1 if it is not possible.",
                problemExplanation: "",
                example_1: {
                    input: "arr= [7, 7, 7, 7, 13, 11, 12, 7], N = 8, m = 2, k = 3",
                    output: "12",
                    explanation: "On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers."
                },
                example_2: {
                    input: "arr = [1, 10, 3, 10, 2],  N = 5,  m = 3, k = 2",
                    output: "-1",
                    explanation: "If we want to make 3 bouquets of 2 flowers each, we need at least 6 flowers. But we are given only 5 flowers, so, we cannot make the bouquets."
                },
                complexity: {
                    timeComplexity: "O(log(max(arr[])-min(arr[])+1) * N)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3W84GWq"
            },
            {
                title: "Capacity to Ship Packages within D Days",
                difficulty: "Easy",
                description: "ou are the owner of a Shipment company. You use conveyor belts to ship packages from one port to another. The packages must be shipped within 'd' days.",
                note: "The weights of the packages are given in an array 'of weights'. The packages are loaded on the conveyor belts every day in the same order as they appear in the array. The loaded weights must not exceed the maximum weight capacity of the ship.Find out the least- weight capacity so that you can ship all the packages within 'd' days.",
                problemExplanation: "",
                example_1: {
                    input: "arr= [5,4,5,2,3,4,5,6], N = 5, d = 5",
                    output: "9",
                    explanation: ""
                },
                example_2: {
                    input: "arr = [1,2,3,4,5,6,7,8,9,10],  N = 10, d = 1",
                    output: "55",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: " O(N * log(sum(weights[]) - max(weights[]) + 1))",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3pJg6n4"
            },
            {
                title: "Kth Missing Positive Number",
                difficulty: "Hard",
                description: "You are given a strictly increasing array ‘vec’ and a positive integer 'k'. Find the 'kth' positive integer missing from 'vec'.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= [4,7,9,10], k = 1",
                    output: "1",
                    explanation: "The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 1, the first missing element is 1."
                },
                example_2: {
                    input: "arr = [4,7,9,10], k = 4",
                    output: "5",
                    explanation: "The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 4, the fourth missing element is 5."
                },
                complexity: {
                    timeComplexity: "O(logN)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3W0Irlb"
            },
        ]
    },
    strings: {
        totalProblems: 7,
        problems: [
            {
                title: " Remove Outermost Parentheses",
                difficulty: "Easy",
                description: "Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s",
                note: "Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.",
                problemExplanation: "",
                example_1: {
                    input: `s = "(()())(())"`,
                    output: `"()()()"`,
                    explanation: `The input string is "(()())(())", with primitive decomposition "(()()) " + "(()) ".After removing outer parentheses of each part, this is "()()" + "()" = "()()()".`
                },
                example_2: {
                    input: `s = "(()())(())(()(()))"`,
                    output: `"()()()()(())"`,
                    explanation: `The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".`
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/remove-outermost-parentheses/"
            },
            {
                title: " Reverse Words in a String",
                difficulty: "Medium",
                description: "Return a string of the words in reverse order concatenated by a single space. ",
                note: "that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.",
                problemExplanation: "A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.",
                example_1: {
                    input: `s = "  hello world  "`,
                    output: `"world hello"`,
                    explanation: "Your reversed string should not contain leading or trailing spaces."
                },
                example_2: {
                    input: `s = "the sky is blue"`,
                    output: "blue is sky the",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: ""
            },
            {
                title: "Rotate String",
                difficulty: "Medium",
                description: "Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.",
                note: "A shift on s consists of moving the leftmost character of s to the rightmost position.",
                problemExplanation: "",
                example_1: {
                    input: `s = "abcde", goal = "cdeab"`,
                    output: "true",
                    explanation: ""
                },
                example_2: {
                    input: `s = "abcde", goal = "abced"`,
                    output: "false",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/rotate-string/"
            },
            {
                title: "Valid Anagram",
                difficulty: "Easy",
                description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: `s = "anagram", t = "nagaram"`,
                    output: "true",
                    explanation: ""
                },
                example_2: {
                    input: `s = "rat", t = "car"`,
                    output: "false",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: ""
            },
            {
                title: "String to Integer (atoi)",
                difficulty: "Easy",
                description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: `s = "42"`,
                    output: "42",
                    explanation: `The underlined characters are what is read in and the caret is the current reader position.
                    Step 1: "42" (no characters read because there is no leading whitespace)
                    ^
                    Step 2: "42" (no characters read because there is neither a '-' nor '+')
                    ^
                    Step 3: "42" ("42" is read in)
                    ^`
                },
                example_2: {
                    input: ` s = " -042"`,
                    output: "-42",
                    explanation: `Step 1: "   -042" (leading whitespace is read and ignored)
                                ^
                                Step 2: "   -042" ('-' is read, so the result should be negative)
                                ^
                                Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
                                ^`
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/string-to-integer-atoi/"
            },
            {
                title: "Count number of substrings",
                difficulty: "Medium",
                description: "Given a string of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly k distinct characters. ",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: `S = "aba", K = 2`,
                    output: "3",
                    explanation: `The substrings are: "ab", "ba" and "aba".`
                },
                example_2: {
                    input: `S = "abaaca", K = 1`,
                    output: "7",
                    explanation: `The substrings are: "a", "b", "a", "aa", "a", "c", "a".`
                },
                complexity: {
                    timeComplexity: "O(|S|).",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3CfQfYi"
            },
            {
                title: "Longest Palindromic Substring",
                difficulty: "Medium",
                description: "Given a string s, return the longest palindromic substring in s.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: ` s = "babad"`,
                    output: `"bab"`,
                    explanation: `"aba" is also a valid answer.`
                },
                example_2: {
                    input: `s = "cbbd"`,
                    output: `"bb"`,
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/longest-palindromic-substring/"
            },
        ]
    },
    linkedList: {
        totalProblems: 10,
        problems: [
            {
                title: "Insert at the head of a Linked List",
                difficulty: "Easy",
                description: "Given a linked list and an integer value val, insert a new node with that value at the beginning (before the head) of the list and return the updated linked list.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "0->1->2, val = 5",
                    output: " 5->0->1->2",
                    explanation: "We need to insert the value 5 before the head of the given Linked List."
                },
                example_2: {
                    input: "12->5->8->7, val = 100",
                    output: "100->12->5->8->7",
                    explanation: "Again, we need to insert the value 100 before the head of the Linked List."
                },
                complexity: {
                    timeComplexity: "O(1)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3w9pEIt"
            },
            {
                title: "Delete Last Node of Linked List",
                difficulty: "Medium",
                description: "Given a linked list, delete the tail of the linked list and print the updated linked list.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "0->1->2 ",
                    output: "0->1",
                    explanation: "The tail of the list is the last node. After removing the tail, and updating the linked list, this result is what we get."
                },
                example_2: {
                    input: "12->5->8->7",
                    output: "12->5->8",
                    explanation: "Again, after deleting the tail and updating the linked list, the list ends at the second last node, which is the new tail."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/delete-node-in-a-linked-list/"
            },
            {
                title: "Introduction to Doubly Linked List",
                difficulty: "Easy",
                description: "In the realm of data structures, it's essential to grasp the intricacies of doubly linked lists. These data structures are characterized by their ability to efficiently navigate in both forward and backward directions. Before diving into the depths of doubly linked lists, it's beneficial to recap our understanding of linked lists, and their precursor.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= ",
                    output: "",
                    explanation: ""
                },
                example_2: {
                    input: "arr = ",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/studio/problems/introduction-to-doubly-linked-list_8160413"
            },
            {
                title: "Delete Last Node of a Doubly Linked List",
                difficulty: "Medium",
                description: "Given a Doubly Linked List. Delete the last of a Doubly Linked List.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "DLL: 1 <-> 3 <-> 4 <-> 1",
                    output: "DLL: 1 <-> 3 <-> 4",
                    explanation: "After deleting the tail node we will get a doubly linked list. The node at the end of the doubly linked list will no longer be a part of it."
                },
                example_2: {
                    input: "DLL: 7 <-> 5",
                    output: "DLL: 7",
                    explanation: "7 will be the only node left after we delete the tail node of the doubly linked list."
                },
                complexity: {
                    timeComplexity: "O(1)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/studio/problems/delete-last-node-of-a-doubly-linked-list_8160469"
            },
            {
                title: "Reverse a Doubly Linked List",
                difficulty: "Medium",
                description: "Given a doubly linked list of size ‘N’ consisting of positive integers, your task is to reverse it and return the head of the modified doubly linked list.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "DLL: 1 <-> 2 <-> 3 <-> 4",
                    output: "DLL: 4 <-> 3 <-> 2 <-> 1",
                    explanation: "The doubly linked list is reversed and its last node is returned at the new head pointer."
                },
                example_2: {
                    input: "DLL: 10 <-> 20 <-> 30",
                    output: " DLL: 30 <-> 20 <-> 10",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/studio/problems/reverse-a-doubly-linked-list_1116098"
            },
            {
                title: "Detect a Cycle in a Linked List",
                difficulty: "Medium",
                description: "",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "LL: 1 2 3 4 5",
                    output: "True",
                    explanation: "The last node with the value of 5 has its 'next' pointer pointing back to a previous node with the value of 3. This has resulted in a loop, hence we return true."
                },
                example_2: {
                    input: "LL: 1 2 3 4 9 9",
                    output: "False",
                    explanation: "In this example, the linked list does not have a loop hence returns false."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/studio/problems/cycle-detection-in-a-singly-linked-list_628974"
            },
            {
                title: "Reverse Linked List in groups of Size K",
                difficulty: "Hard",
                description: "Given the head of a singly linked list of `n` nodes and an integer `k`, where k is less than or equal to `n`. Your task is to reverse the order of each group of `k` consecutive nodes, if `n` is not divisible by `k`, then the last group of remaining nodes should remain unchanged.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "LL: 1  2  3  4  5  6  7  8  9  10, K = 3",
                    output: "3  2  1  6  5  4  9  8  7  10",
                    explanation: ""
                },
                example_2: {
                    input: "LL: 5  4  3  7  9  2, K = 4",
                    output: " 7 3 4 5 9 2",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(2n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/studio/problems/reverse-list-in-k-groups_983644"
            },
            {
                title: "Sort a Linked List",
                difficulty: "Medium",
                description: "Given a linked list, sort its nodes based on the data value in them. Return the head of the sorted linked list.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "Linked List: 3 4 2 1 5",
                    output: "Sorted List: 1 2 3 4 5",
                    explanation: "The input linked list when sorted from [3, 4, 2, 1, 5] results in a linked list with values: [1, 2, 3, 4, 5]."
                },
                example_2: {
                    input: "List: 40 20 60 10 50 30",
                    output: "Sorted List: 10 20 30 40 50 60",
                    explanation: "The input linked list when sorted from [40, 20, 60, 10, 50, 30] results in a linked list with values: [10, 20, 30, 40, 50, 60]."
                },
                complexity: {
                    timeComplexity: "O(nlogn)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/sort-list/"
            },
            {
                title: "Remove N-th node from the end of a Linked List",
                difficulty: "Medium",
                description: "Given a linked list and an integer N, the task is to delete the Nth node from the end of the linked list and print the updated linked list.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "5->1->2, N=2",
                    output: "5->2",
                    explanation: "The 2nd node from the end of the linked list is 1. Therefore, we get this result after removing 1 from the linked list."
                },
                example_2: {
                    input: "1->2->3->4->5, N=3",
                    output: "1->2->4->5",
                    explanation: "The 3rd node from the end is 3, therefore, we remove 3 from the linked list."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/studio/problems/delete-kth-node-from-end_799912"
            },
            {
                title: "Segregate even and odd nodes in LinkedList ",
                difficulty: "Medium",
                description: " Segregate even and odd nodes in LinkedList",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "1→2→3→4→5→6→Null",
                    output: "2→4→6→1→3→5→Null",
                    explanation: ""
                },
                example_2: {
                    input: "1→3→5→Null",
                    output: "1→3→5→Null",
                    explanation: "As there are no Even Nodes in LinkedList, The Modified LinkedList is same as Original LinkedList."
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/odd-even-linked-list/"
            },
        ]
    },
    recursion: {
        totalProblems: 15,
        problems: [
            {
                "title": "Factorial of a Number",
                "difficulty": "Easy",
                "description": "Calculate the factorial of a given non-negative integer.",
                "note": "Use a recursive approach to calculate the factorial.",
                "problemExplanation": "Given a non-negative integer n, return n! (n factorial).",
                "example_1": {
                    "input": "n = 5",
                    "output": "120",
                    "explanation": "5! = 5 * 4 * 3 * 2 * 1 = 120."
                },
                "example_2": {
                    "input": "n = 0",
                    "output": "1",
                    "explanation": "0! = 1 by definition."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Fibonacci Sequence",
                "difficulty": "Easy",
                "description": "Find the nth Fibonacci number.",
                "note": "Use recursion to generate Fibonacci numbers.",
                "problemExplanation": "The Fibonacci sequence is defined as F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2).",
                "example_1": {
                    "input": "n = 6",
                    "output": "8",
                    "explanation": "The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8."
                },
                "example_2": {
                    "input": "n = 10",
                    "output": "55",
                    "explanation": "The 10th Fibonacci number is 55."
                },
                "complexity": {
                    "timeComplexity": "O(2^n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Sum of Array Elements",
                "difficulty": "Easy",
                "description": "Calculate the sum of elements in an array using recursion.",
                "note": "Use recursion to sum the elements of the array.",
                "problemExplanation": "Given an array of integers, return the sum of its elements.",
                "example_1": {
                    "input": "arr = [1, 2, 3, 4]",
                    "output": "10",
                    "explanation": "1 + 2 + 3 + 4 = 10."
                },
                "example_2": {
                    "input": "arr = [5, 10, 15]",
                    "output": "30",
                    "explanation": "5 + 10 + 15 = 30."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Reverse a String",
                "difficulty": "Easy",
                "description": "Reverse a given string using recursion.",
                "note": "Implement the function recursively.",
                "problemExplanation": "Given a string, return the reversed string.",
                "example_1": {
                    "input": "s = 'hello'",
                    "output": "'olleh'",
                    "explanation": "The reverse of 'hello' is 'olleh'."
                },
                "example_2": {
                    "input": "s = 'abcd'",
                    "output": "'dcba'",
                    "explanation": "The reverse of 'abcd' is 'dcba'."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Tower of Hanoi",
                "difficulty": "Medium",
                "description": "Solve the Tower of Hanoi problem.",
                "note": "Use recursion to move the disks between the rods.",
                "problemExplanation": "Given n disks, move them from the source rod to the target rod following the rules.",
                "example_1": {
                    "input": "n = 2",
                    "output": "Move disk 1 from A to C, Move disk 2 from A to B, Move disk 1 from C to B.",
                    "explanation": "The steps to solve the Tower of Hanoi for 2 disks."
                },
                "example_2": {
                    "input": "n = 3",
                    "output": "Move disk 1 from A to B, Move disk 2 from A to C, Move disk 1 from B to C, Move disk 3 from A to B, Move disk 1 from C to A, Move disk 2 from C to B, Move disk 1 from A to B.",
                    "explanation": "The steps to solve the Tower of Hanoi for 3 disks."
                },
                "complexity": {
                    "timeComplexity": "O(2^n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Generate Parentheses",
                "difficulty": "Medium",
                "description": "Generate all combinations of well-formed parentheses.",
                "note": "Use recursion to generate valid combinations.",
                "problemExplanation": "Given n pairs of parentheses, return all combinations of well-formed parentheses.",
                "example_1": {
                    "input": "n = 3",
                    "output": "['((()))', '(()())', '(())()', '()(())', '()()()']",
                    "explanation": "All valid combinations of 3 pairs of parentheses."
                },
                "example_2": {
                    "input": "n = 2",
                    "output": "['(())', '()()']",
                    "explanation": "All valid combinations of 2 pairs of parentheses."
                },
                "complexity": {
                    "timeComplexity": "O(4^n / sqrt(n))",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Permutations of a String",
                "difficulty": "Medium",
                "description": "Generate all permutations of a given string.",
                "note": "Use recursion to create permutations.",
                "problemExplanation": "Given a string, return all its permutations.",
                "example_1": {
                    "input": "s = 'abc'",
                    "output": "['abc', 'acb', 'bac', 'bca', 'cab', 'cba']",
                    "explanation": "All permutations of the string 'abc'."
                },
                "example_2": {
                    "input": "s = 'ab'",
                    "output": "['ab', 'ba']",
                    "explanation": "All permutations of the string 'ab'."
                },
                "complexity": {
                    "timeComplexity": "O(n!)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Combination Sum",
                "difficulty": "Medium",
                "description": "Find all unique combinations of numbers that sum to a target.",
                "note": "Use recursion to explore combinations.",
                "problemExplanation": "Given an array of candidates and a target, return all unique combinations where the candidate numbers sum to the target.",
                "example_1": {
                    "input": "candidates = [2, 3, 6, 7], target = 7",
                    "output": "[[7], [2, 2, 3]]",
                    "explanation": "The combinations that sum to 7 are [7] and [2, 2, 3]."
                },
                "example_2": {
                    "input": "candidates = [1, 2, 3], target = 4",
                    "output": "[[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]",
                    "explanation": "The combinations that sum to 4 are [1, 1, 1, 1], [1, 1, 2], [1, 3], and [2, 2]."
                },
                "complexity": {
                    "timeComplexity": "O(2^n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Balanced Parentheses",
                "difficulty": "Easy",
                "description": "Check if a string of parentheses is balanced.",
                "note": "Use recursion to validate parentheses.",
                "problemExplanation": "Given a string of parentheses, return true if it is balanced, otherwise false.",
                "example_1": {
                    "input": "s = '()()'",
                    "output": "true",
                    "explanation": "The parentheses are balanced."
                },
                "example_2": {
                    "input": "s = '(()'",
                    "output": "false",
                    "explanation": "The parentheses are not balanced."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Count Vowels in a String",
                "difficulty": "Easy",
                "description": "Count the number of vowels in a given string using recursion.",
                "note": "Use a recursive function to count vowels.",
                "problemExplanation": "Given a string, return the count of vowels (a, e, i, o, u).",
                "example_1": {
                    "input": "s = 'hello world'",
                    "output": "3",
                    "explanation": "The vowels are e, o, o."
                },
                "example_2": {
                    "input": "s = 'abcd'",
                    "output": "1",
                    "explanation": "The only vowel is a."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Subsets of a Set",
                "difficulty": "Medium",
                "description": "Generate all subsets of a given set.",
                "note": "Use recursion to create subsets.",
                "problemExplanation": "Given a set of distinct integers, return all possible subsets.",
                "example_1": {
                    "input": "nums = [1, 2, 3]",
                    "output": "[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]",
                    "explanation": "All subsets of [1, 2, 3]."
                },
                "example_2": {
                    "input": "nums = [0]",
                    "output": "[[], [0]]",
                    "explanation": "All subsets of [0]."
                },
                "complexity": {
                    "timeComplexity": "O(2^n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Find the Greatest Common Divisor (GCD)",
                "difficulty": "Easy",
                "description": "Find the GCD of two integers using recursion.",
                "note": "Use the Euclidean algorithm recursively.",
                "problemExplanation": "Given two integers, return their greatest common divisor.",
                "example_1": {
                    "input": "a = 48, b = 18",
                    "output": "6",
                    "explanation": "The GCD of 48 and 18 is 6."
                },
                "example_2": {
                    "input": "a = 56, b = 98",
                    "output": "14",
                    "explanation": "The GCD of 56 and 98 is 14."
                },
                "complexity": {
                    "timeComplexity": "O(log(min(a, b)))",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "String Length Calculation",
                "difficulty": "Easy",
                "description": "Calculate the length of a string using recursion.",
                "note": "Implement the function recursively.",
                "problemExplanation": "Given a string, return its length without using built-in functions.",
                "example_1": {
                    "input": "s = 'hello'",
                    "output": "5",
                    "explanation": "The length of 'hello' is 5."
                },
                "example_2": {
                    "input": "s = 'abcd'",
                    "output": "4",
                    "explanation": "The length of 'abcd' is 4."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            }

        ]
    },
    BitManipulation: {
        totalProblems: 25,
        problems: [
            {
                "title": "Count Set Bits",
                "difficulty": "Easy",
                "description": "Count the number of set bits (1s) in an integer.",
                "note": "Use bit manipulation to count the set bits.",
                "problemExplanation": "Given an integer n, return the number of set bits in its binary representation.",
                "example_1": {
                    "input": "n = 5",
                    "output": "2",
                    "explanation": "The binary representation of 5 is 101, which has 2 set bits."
                },
                "example_2": {
                    "input": "n = 7",
                    "output": "3",
                    "explanation": "The binary representation of 7 is 111, which has 3 set bits."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Power of Two",
                "difficulty": "Easy",
                "description": "Check if a number is a power of two.",
                "note": "Use bit manipulation to determine if the number is a power of two.",
                "problemExplanation": "Given an integer n, return true if n is a power of two, else false.",
                "example_1": {
                    "input": "n = 4",
                    "output": "true",
                    "explanation": "4 is 2^2, hence it is a power of two."
                },
                "example_2": {
                    "input": "n = 6",
                    "output": "false",
                    "explanation": "6 is not a power of two."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Swap Two Numbers Without Using Temporary Variable",
                "difficulty": "Easy",
                "description": "Swap two integers without using a temporary variable.",
                "note": "Use bitwise XOR to swap the numbers.",
                "problemExplanation": "Given two integers a and b, swap them without using a temporary variable.",
                "example_1": {
                    "input": "a = 5, b = 10",
                    "output": "a = 10, b = 5",
                    "explanation": "After swapping, a becomes 10 and b becomes 5."
                },
                "example_2": {
                    "input": "a = 15, b = 20",
                    "output": "a = 20, b = 15",
                    "explanation": "After swapping, a becomes 20 and b becomes 15."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Check if Two Integers Have Opposite Signs",
                "difficulty": "Easy",
                "description": "Determine if two integers have opposite signs.",
                "note": "Use bit manipulation to check the sign bit.",
                "problemExplanation": "Given two integers a and b, return true if they have opposite signs, else false.",
                "example_1": {
                    "input": "a = 5, b = -5",
                    "output": "true",
                    "explanation": "5 and -5 have opposite signs."
                },
                "example_2": {
                    "input": "a = 10, b = 20",
                    "output": "false",
                    "explanation": "10 and 20 have the same sign."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Find the Only Non-Repeating Element in an Array",
                "difficulty": "Medium",
                "description": "Find the element that appears only once in an array where every other element appears twice.",
                "note": "Use XOR to find the non-repeating element.",
                "problemExplanation": "Given an array of integers, find the element that appears only once.",
                "example_1": {
                    "input": "arr = [4, 1, 2, 1, 2]",
                    "output": "4",
                    "explanation": "4 appears only once, while 1 and 2 appear twice."
                },
                "example_2": {
                    "input": "arr = [2, 2, 1]",
                    "output": "1",
                    "explanation": "1 appears only once, while 2 appears twice."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Find the Missing Number in an Array",
                "difficulty": "Medium",
                "description": "Find the missing number in an array of size n containing numbers from 0 to n.",
                "note": "Use bit manipulation to find the missing number.",
                "problemExplanation": "Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one number missing.",
                "example_1": {
                    "input": "arr = [3, 0, 1]",
                    "output": "2",
                    "explanation": "The missing number is 2."
                },
                "example_2": {
                    "input": "arr = [9, 6, 4, 2, 3, 5, 7, 0, 8]",
                    "output": "1",
                    "explanation": "The missing number is 1."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Longest Substring with At Most K Distinct Characters",
                "difficulty": "Medium",
                "description": "Find the length of the longest substring with at most K distinct characters.",
                "note": "Use bit manipulation to keep track of characters.",
                "problemExplanation": "Given a string and an integer K, return the length of the longest substring that contains at most K distinct characters.",
                "example_1": {
                    "input": "s = 'eceba', k = 2",
                    "output": "3",
                    "explanation": "The longest substring is 'ece' which has 3 characters."
                },
                "example_2": {
                    "input": "s = 'aa', k = 1",
                    "output": "2",
                    "explanation": "The longest substring is 'aa' which has 2 characters."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Reverse Bits of a Number",
                "difficulty": "Medium",
                "description": "Reverse the bits of a given 32-bit unsigned integer.",
                "note": "Use bit manipulation to reverse the bits.",
                "problemExplanation": "Given a 32-bit unsigned integer, reverse its bits and return the result.",
                "example_1": {
                    "input": "n = 43261596",
                    "output": "964176192",
                    "explanation": "The binary representation of 43261596 is 00000010100101000001111010011100. After reversing, it becomes 00111001011110000010100101000000."
                },
                "example_2": {
                    "input": "n = 4294967293",
                    "output": "3221225471",
                    "explanation": "The binary representation of 4294967293 is 11111111111111111111111111111101. After reversing, it becomes 10111111111111111111111111111111."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Add Binary",
                "difficulty": "Easy",
                "description": "Add two binary numbers represented as strings.",
                "note": "Use bit manipulation to add binary numbers.",
                "problemExplanation": "Given two binary strings a and b, return their sum as a binary string.",
                "example_1": {
                    "input": "a = '11', b = '1'",
                    "output": "'100'",
                    "explanation": "'11' + '1' = '100'."
                },
                "example_2": {
                    "input": "a = '1010', b = '1011'",
                    "output": "'10101'",
                    "explanation": "'1010' + '1011' = '10101'."
                },
                "complexity": {
                    "timeComplexity": "O(max(m, n))",
                    "spaceComplexity": "O(max(m, n))"
                },
                "link": ""
            },
            {
                "title": "Hamming Distance",
                "difficulty": "Easy",
                "description": "Calculate the Hamming distance between two integers.",
                "note": "Use bit manipulation to find the Hamming distance.",
                "problemExplanation": "Given two integers x and y, return the Hamming distance between them.",
                "example_1": {
                    "input": "x = 1, y = 4",
                    "output": "2",
                    "explanation": "The binary representations are '01' and '100', which differ in 2 bits."
                },
                "example_2": {
                    "input": "x = 3, y = 1",
                    "output": "1",
                    "explanation": "The binary representations are '11' and '01', which differ in 1 bit."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Find Complement of a Number",
                "difficulty": "Easy",
                "description": "Find the complement of a given integer.",
                "note": "Use bit manipulation to find the complement.",
                "problemExplanation": "Given a positive integer n, return its complement.",
                "example_1": {
                    "input": "n = 5",
                    "output": "2",
                    "explanation": "The binary representation of 5 is '101', and its complement is '010', which is 2."
                },
                "example_2": {
                    "input": "n = 1",
                    "output": "0",
                    "explanation": "The binary representation of 1 is '1', and its complement is '0'."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Single Number II",
                "difficulty": "Medium",
                "description": "Find the number that appears once in an array where every other number appears three times.",
                "note": "Use bit manipulation to solve the problem.",
                "problemExplanation": "Given an integer array, find the element that appears exactly once.",
                "example_1": {
                    "input": "arr = [2, 2, 3, 2]",
                    "output": "3",
                    "explanation": "3 appears once while 2 appears three times."
                },
                "example_2": {
                    "input": "arr = [0, 1, 0, 1, 0, 1, 99]",
                    "output": "99",
                    "explanation": "99 appears once while 0 and 1 appear three times."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Find Unique Binary String",
                "difficulty": "Medium",
                "description": "Find a binary string of length n that is different from all binary strings in a given list.",
                "note": "Use bit manipulation to find the unique binary string.",
                "problemExplanation": "Given an array of binary strings, find a binary string of the same length that is not in the array.",
                "example_1": {
                    "input": "arr = ['00', '01']",
                    "output": "'10'",
                    "explanation": "The binary string '10' is not in the array."
                },
                "example_2": {
                    "input": "arr = ['01', '10']",
                    "output": "'00'",
                    "explanation": "'00' is not in the array."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Total Hamming Distance",
                "difficulty": "Medium",
                "description": "Calculate the total Hamming distance between all pairs of integers in an array.",
                "note": "Use bit manipulation to calculate the total Hamming distance.",
                "problemExplanation": "Given an integer array, return the total Hamming distance between all pairs.",
                "example_1": {
                    "input": "arr = [4, 14, 2]",
                    "output": "6",
                    "explanation": "The total Hamming distance is 6."
                },
                "example_2": {
                    "input": "arr = [1, 2, 3]",
                    "output": "4",
                    "explanation": "The total Hamming distance is 4."
                },
                "complexity": {
                    "timeComplexity": "O(n * 32)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Maximum XOR of Two Numbers in an Array",
                "difficulty": "Medium",
                "description": "Find the maximum XOR of two numbers in an array.",
                "note": "Use bit manipulation to find the maximum XOR.",
                "problemExplanation": "Given an integer array, find the maximum XOR of any two elements.",
                "example_1": {
                    "input": "arr = [3, 10, 5, 25, 2, 8]",
                    "output": "28",
                    "explanation": "The maximum XOR is obtained between 5 and 25."
                },
                "example_2": {
                    "input": "arr = [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]",
                    "output": "127",
                    "explanation": "The maximum XOR is obtained between 70 and 53."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Kth Bit from the End",
                "difficulty": "Easy",
                "description": "Find the Kth bit from the end of a number's binary representation.",
                "note": "Use bit manipulation to find the Kth bit.",
                "problemExplanation": "Given an integer n and an integer k, return the Kth bit from the end in the binary representation of n.",
                "example_1": {
                    "input": "n = 23, k = 2",
                    "output": "1",
                    "explanation": "The binary representation of 23 is '10111', and the 2nd bit from the end is '1'."
                },
                "example_2": {
                    "input": "n = 7, k = 1",
                    "output": "1",
                    "explanation": "The binary representation of 7 is '111', and the 1st bit from the end is '1'."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Sum of Two Integers",
                "difficulty": "Easy",
                "description": "Calculate the sum of two integers without using the '+' operator.",
                "note": "Use bit manipulation to perform the addition.",
                "problemExplanation": "Given two integers a and b, return their sum without using the '+' operator.",
                "example_1": {
                    "input": "a = 1, b = 2",
                    "output": "3",
                    "explanation": "The sum of 1 and 2 is 3."
                },
                "example_2": {
                    "input": "a = 5, b = 10",
                    "output": "15",
                    "explanation": "The sum of 5 and 10 is 15."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Find Minimum in Rotated Sorted Array",
                "difficulty": "Medium",
                "description": "Find the minimum element in a rotated sorted array.",
                "note": "Use bit manipulation to find the minimum.",
                "problemExplanation": "Given a rotated sorted array, find the minimum element in it.",
                "example_1": {
                    "input": "arr = [3, 4, 5, 1, 2]",
                    "output": "1",
                    "explanation": "1 is the minimum element in the array."
                },
                "example_2": {
                    "input": "arr = [4, 5, 6, 7, 0, 1, 2]",
                    "output": "0",
                    "explanation": "0 is the minimum element in the array."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Convert a Number to Hexadecimal",
                "difficulty": "Easy",
                "description": "Convert a given integer to its hexadecimal representation.",
                "note": "Use bit manipulation to convert to hexadecimal.",
                "problemExplanation": "Given an integer num, return its hexadecimal string representation.",
                "example_1": {
                    "input": "num = 26",
                    "output": "'1a'",
                    "explanation": "The hexadecimal representation of 26 is '1a'."
                },
                "example_2": {
                    "input": "num = -1",
                    "output": "'ffffffff'",
                    "explanation": "The hexadecimal representation of -1 is 'ffffffff'."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Power of Two",
                "difficulty": "Easy",
                "description": "Check if a given number is a power of two.",
                "note": "Use bit manipulation to check for power of two.",
                "problemExplanation": "Given an integer n, return true if it is a power of two, and false otherwise.",
                "example_1": {
                    "input": "n = 16",
                    "output": "true",
                    "explanation": "16 is a power of two (2^4)."
                },
                "example_2": {
                    "input": "n = 18",
                    "output": "false",
                    "explanation": "18 is not a power of two."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Count Bits",
                "difficulty": "Easy",
                "description": "Count the number of 1 bits in the binary representation of a number.",
                "note": "Use bit manipulation to count the bits.",
                "problemExplanation": "Given an integer n, return the number of 1 bits it has.",
                "example_1": {
                    "input": "n = 11",
                    "output": "3",
                    "explanation": "The binary representation of 11 is '1011', which has 3 ones."
                },
                "example_2": {
                    "input": "n = 128",
                    "output": "1",
                    "explanation": "The binary representation of 128 is '10000000', which has 1 one."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Number of 1 Bits",
                "difficulty": "Easy",
                "description": "Count the number of 1 bits in the binary representation of a number.",
                "note": "Use bit manipulation to count the bits.",
                "problemExplanation": "Given an integer n, return the number of 1 bits it has.",
                "example_1": {
                    "input": "n = 11",
                    "output": "3",
                    "explanation": "The binary representation of 11 is '1011', which has 3 ones."
                },
                "example_2": {
                    "input": "n = 128",
                    "output": "1",
                    "explanation": "The binary representation of 128 is '10000000', which has 1 one."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Reverse Bits",
                "difficulty": "Easy",
                "description": "Reverse the bits of a given 32 bits unsigned integer.",
                "note": "Use bit manipulation to reverse the bits.",
                "problemExplanation": "Given a 32 bits unsigned integer n, return the integer with its bits reversed.",
                "example_1": {
                    "input": "n = 43261596",
                    "output": "964176192",
                    "explanation": "The binary representation of 43261596 is '10100111010110110111100101101000' which reversed is '00011010010111100101111010100100' which is 964176192."
                },
                "example_2": {
                    "input": "n = 4294967293",
                    "output": "3221225471",
                    "explanation": "The binary representation of 4294967293 is '11111111111111111111111111111101' which reversed is '10111111111111111111111111111111' which is 3221225471."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Counting Bits",
                "difficulty": "Medium",
                "description": "Given a non negative integer n, return an array count of length n + 1 such that count[i] is the number of 1's in the binary representation of i.",
                "note": "Use bit manipulation to count the bits.",
                "problemExplanation": "For each number i in the range 0 to n, count the number of 1 bits in its binary representation.",
                "example_1": {
                    "input": "n = 5",
                    "output": "[0, 1, 1, 2, 1, 2]",
                    "explanation": "0 has 0 ones, 1 has 1 one, 2 has 1 one, 3 has 2 ones, 4 has 1 one, 5 has 2 ones."
                },
                "example_2": {
                    "input": "n = 2",
                    "output": "[0, 1, 1]",
                    "explanation": "0 has 0 ones, 1 has 1 one, 2 has 1 one."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Binary Number with Alternating Bits",
                "difficulty": "Easy",
                "description": "Check if a given binary number has alternating bits.",
                "note": "Use bit manipulation to check for alternating bits.",
                "problemExplanation": "Given an integer n, return true if it has alternating bits, and false otherwise.",
                "example_1": {
                    "input": "n = 5",
                    "output": "true",
                    "explanation": "The binary representation of 5 is '101', which has alternating bits."
                },
                "example_2": {
                    "input": "n = 7",
                    "output": "false",
                    "explanation": "The binary representation of 7 is '111', which does not have alternating bits."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Number Complement",
                "difficulty": "Easy",
                "description": "Find the complement of a given integer.",
                "note": "Use bit manipulation to find the complement.",
                "problemExplanation": "Given a positive integer n, return its complement.",
                "example_1": {
                    "input": "n = 5",
                    "output": "2",
                    "explanation": "The binary representation of 5 is '101', and its complement is '010', which is 2."
                },
                "example_2": {
                    "input": "n = 1",
                    "output": "0",
                    "explanation": "The binary representation of 1 is '1', and its complement is '0'."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Sum of Two Integers Without Plus",
                "difficulty": "Medium",
                "description": "Calculate the sum of two integers without using the '+' operator.",
                "note": "Use bit manipulation to perform the addition.",
                "problemExplanation": "Given two integers a and b, return their sum without using the '+' operator.",
                "example_1": {
                    "input": "a = 1, b = 2",
                    "output": "3",
                    "explanation": "The sum of 1 and 2 is 3."
                },
                "example_2": {
                    "input": "a = 5, b = 10",
                    "output": "15",
                    "explanation": "The sum of 5 and 10 is 15."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Convert Binary Number in a Linked List to Integer",
                "difficulty": "Easy",
                "description": "Convert a binary number represented as a linked list to an integer.",
                "note": "Use bit manipulation to convert the binary number.",
                "problemExplanation": "Given a linked list where each node represents a binary digit, convert it to an integer.",
                "example_1": {
                    "input": "head = [1,0,1]",
                    "output": "5",
                    "explanation": "The binary number is '101', which is 5 in decimal."
                },
                "example_2": {
                    "input": "head = [0]",
                    "output": "0",
                    "explanation": "The binary number is '0', which is 0 in decimal."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
        ]
    },
    stackandQueues: {
        totalProblems: 30,
        problems: [
            {
                "title": "Valid Parentheses",
                "difficulty": "Easy",
                "description": "Check if the input string has valid parentheses.",
                "problemExplanation": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
                "example_1": {
                    "input": "s = '()[]{}'",
                    "output": "true",
                    "explanation": "All parentheses are matched."
                },
                "example_2": {
                    "input": "s = '(]'",
                    "output": "false",
                    "explanation": "Parentheses are not matched."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Min Stack",
                "difficulty": "Easy",
                "description": "Design a stack that supports push, pop, top, and retrieving the minimum element.",
                "problemExplanation": "Implement a stack that supports the following operations: push, pop, top, and getMin.",
                "example_1": {
                    "input": "push(-2), push(0), push(-3), getMin()",
                    "output": "-3",
                    "explanation": "Minimum element is -3."
                },
                "example_2": {
                    "input": "pop(), top(), getMin()",
                    "output": "0",
                    "explanation": "Top element after popping is 0."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Evaluate Reverse Polish Notation",
                "difficulty": "Medium",
                "description": "Evaluate the value of an expression in Reverse Polish Notation.",
                "problemExplanation": "You are given an array of strings tokens that represents an expression in Reverse Polish Notation.",
                "example_1": {
                    "input": "tokens = ['2', '1', '+', '3', '*']",
                    "output": "9",
                    "explanation": "The result is (2 + 1) * 3 = 9."
                },
                "example_2": {
                    "input": "tokens = ['4', '13', '5', '/', '+']",
                    "output": "6",
                    "explanation": "The result is 4 + (13 / 5) = 6."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Daily Temperatures",
                "difficulty": "Medium",
                "description": "Given a list of daily temperatures, return a list of days until a warmer temperature.",
                "problemExplanation": "For each day, calculate how many days you have to wait until a warmer temperature.",
                "example_1": {
                    "input": "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]",
                    "output": "[1, 1, 4, 2, 1, 1, 0, 0]",
                    "explanation": "Each element represents days until a warmer temperature."
                },
                "example_2": {
                    "input": "temperatures = [30, 40, 50, 60]",
                    "output": "[1, 1, 1, 0]",
                    "explanation": "Each day has a corresponding wait time until a warmer day."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Largest Rectangle in Histogram",
                "difficulty": "Hard",
                "description": "Find the largest rectangle that can be formed in a histogram.",
                "problemExplanation": "Given an array of integers representing the heights of bars in a histogram, find the area of the largest rectangle that can be formed.",
                "example_1": {
                    "input": "heights = [2, 1, 5, 6, 2, 3]",
                    "output": "10",
                    "explanation": "The largest rectangle has an area of 10."
                },
                "example_2": {
                    "input": "heights = [2, 4]",
                    "output": "4",
                    "explanation": "The largest rectangle has an area of 4."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Implement Queue using Stacks",
                "difficulty": "Easy",
                "description": "Implement a queue using two stacks.",
                "problemExplanation": "Use two stacks to simulate the behavior of a queue.",
                "example_1": {
                    "input": "enqueue(1), enqueue(2), dequeue()",
                    "output": "1",
                    "explanation": "First element dequeued is 1."
                },
                "example_2": {
                    "input": "enqueue(3), dequeue()",
                    "output": "2",
                    "explanation": "Second element dequeued is 2."
                },
                "complexity": {
                    "timeComplexity": "O(1) amortized",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Implement Stack using Queues",
                "difficulty": "Easy",
                "description": "Implement a stack using two queues.",
                "problemExplanation": "Use two queues to simulate the behavior of a stack.",
                "example_1": {
                    "input": "push(1), push(2), top()",
                    "output": "2",
                    "explanation": "Top element of the stack is 2."
                },
                "example_2": {
                    "input": "pop()",
                    "output": "2",
                    "explanation": "Popped element is 2."
                },
                "complexity": {
                    "timeComplexity": "O(1) amortized",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Next Greater Element I",
                "difficulty": "Easy",
                "description": "Find the next greater element for each element in an array.",
                "problemExplanation": "You are given two arrays: nums1 and nums2. For each element in nums1, find the next greater element in nums2.",
                "example_1": {
                    "input": "nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]",
                    "output": "[-1, 3, -1]",
                    "explanation": "For each element in nums1, the next greater element is found."
                },
                "example_2": {
                    "input": "nums1 = [2, 4], nums2 = [1, 2, 3, 4]",
                    "output": "[3, -1]",
                    "explanation": "Next greater for 2 is 3, and for 4 is -1."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Binary Search Tree Iterator",
                "difficulty": "Medium",
                "description": "Implement an iterator over a binary search tree (BST).",
                "problemExplanation": "The BST iterator should return the next smallest number in the BST.",
                "example_1": {
                    "input": "BST = [7, 3, 15, null, null, 9, 20]",
                    "output": "3, 7, 9, 15, 20",
                    "explanation": "The iterator returns the numbers in sorted order."
                },
                "example_2": {
                    "input": "next()",
                    "output": "7",
                    "explanation": "Next smallest number is 7."
                },
                "complexity": {
                    "timeComplexity": "O(1) for next, O(h) for hasNext",
                    "spaceComplexity": "O(h)"
                },
                "link": ""
            },
            {
                "title": "Reconstruct Itinerary",
                "difficulty": "Medium",
                "description": "Given a list of airline tickets, reconstruct the itinerary in order.",
                "problemExplanation": "Each ticket is represented by a pair of departure and arrival airports.",
                "example_1": {
                    "input": "tickets = [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']]",
                    "output": "['JFK', 'MUC', 'LHR', 'SFO', 'SJC']",
                    "explanation": "The itinerary follows the order of tickets."
                },
                "example_2": {
                    "input": "tickets = [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']]",
                    "output": "['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']",
                    "explanation": "The itinerary follows the order of tickets."
                },
                "complexity": {
                    "timeComplexity": "O(n log n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Stack of Boxes",
                "difficulty": "Medium",
                "description": "Given a stack of boxes, find the largest height of a stack that can be created.",
                "problemExplanation": "Each box has a width, height, and depth. A box can be placed on top of another box if it is strictly larger in all dimensions.",
                "example_1": {
                    "input": "boxes = [[1, 2, 3], [3, 4, 5], [2, 3, 4]]",
                    "output": "6",
                    "explanation": "The maximum height of the stack is 6."
                },
                "example_2": {
                    "input": "boxes = [[4, 3, 2], [1, 2, 3], [2, 4, 5]]",
                    "output": "7",
                    "explanation": "The maximum height of the stack is 7."
                },
                "complexity": {
                    "timeComplexity": "O(n^2)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Kth Largest Element in a Stream",
                "difficulty": "Medium",
                "description": "Design a class to find the k-th largest element in a stream of integers.",
                "problemExplanation": "Implement a KthLargest class with a constructor that takes an integer k and a stream of integers.",
                "example_1": {
                    "input": "KthLargest(3, [4, 5, 8, 2])",
                    "output": "4",
                    "explanation": "K-th largest element is 4."
                },
                "example_2": {
                    "input": "add(3)",
                    "output": "4",
                    "explanation": "After adding 3, the k-th largest remains 4."
                },
                "complexity": {
                    "timeComplexity": "O(n log k)",
                    "spaceComplexity": "O(k)"
                },
                "link": ""
            },
            {
                "title": "Check if a String Has All Unique Characters",
                "difficulty": "Easy",
                "description": "Determine if a string has all unique characters.",
                "problemExplanation": "Check if the input string has all unique characters.",
                "example_1": {
                    "input": "s = 'abcde'",
                    "output": "true",
                    "explanation": "All characters are unique."
                },
                "example_2": {
                    "input": "s = 'hello'",
                    "output": "false",
                    "explanation": "Character 'l' is repeated."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Sliding Window Maximum",
                "difficulty": "Hard",
                "description": "Find the maximum value in each sliding window of size k.",
                "problemExplanation": "Given an array and an integer k, return the maximum value for each window of size k.",
                "example_1": {
                    "input": "nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3",
                    "output": "[3, 3, 5, 5, 6, 7]",
                    "explanation": "Maximums for each window are returned."
                },
                "example_2": {
                    "input": "nums = [1], k = 1",
                    "output": "[1]",
                    "explanation": "Only one window exists."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(k)"
                },
                "link": ""
            },
            {
                "title": "Palindrome Linked List",
                "difficulty": "Easy",
                "description": "Determine if a linked list is a palindrome.",
                "problemExplanation": "Check if the linked list reads the same backward as forward.",
                "example_1": {
                    "input": "head = [1, 2, 2, 1]",
                    "output": "true",
                    "explanation": "The linked list is a palindrome."
                },
                "example_2": {
                    "input": "head = [1, 2]",
                    "output": "false",
                    "explanation": "The linked list is not a palindrome."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Maximal Rectangle",
                "difficulty": "Hard",
                "description": "Find the largest rectangle containing only 1's in a 2D binary matrix.",
                "problemExplanation": "Given a binary matrix filled with 0's and 1's, find the area of the largest rectangle containing only 1's.",
                "example_1": {
                    "input": "matrix = [['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]",
                    "output": "6",
                    "explanation": "The maximal rectangle has an area of 6."
                },
                "example_2": {
                    "input": "matrix = [['0']]",
                    "output": "0",
                    "explanation": "No rectangle can be formed."
                },
                "complexity": {
                    "timeComplexity": "O(m * n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Perfect Squares",
                "difficulty": "Medium",
                "description": "Given a positive integer n, return the least number of perfect square numbers that sum to n.",
                "problemExplanation": "You need to find the minimum number of perfect square numbers that sum up to n.",
                "example_1": {
                    "input": "n = 12",
                    "output": "3",
                    "explanation": "12 = 4 + 4 + 4."
                },
                "example_2": {
                    "input": "n = 13",
                    "output": "2",
                    "explanation": "13 = 4 + 9."
                },
                "complexity": {
                    "timeComplexity": "O(n * sqrt(n))",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Car Fleet",
                "difficulty": "Medium",
                "description": "You are driving a car from a starting position to a target destination. Each car has a speed and a starting position.",
                "problemExplanation": "Calculate the number of car fleets that will arrive at the destination.",
                "example_1": {
                    "input": "target = 12, position = [10, 8, 0, 5, 3], speed = [2, 4, 1, 1, 3]",
                    "output": "3",
                    "explanation": "Three fleets will arrive at the target."
                },
                "example_2": {
                    "input": "target = 100, position = [0, 2, 4], speed = [4, 2, 1]",
                    "output": "1",
                    "explanation": "Only one fleet will arrive at the target."
                },
                "complexity": {
                    "timeComplexity": "O(n log n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Design Circular Queue",
                "difficulty": "Medium",
                "description": "Design and implement a circular queue.",
                "problemExplanation": "Implement a circular queue with the required operations: enqueue, dequeue, front, and rear.",
                "example_1": {
                    "input": "MyCircularQueue(3), enqueue(1), enqueue(2), enqueue(3), dequeue(), enqueue(4)",
                    "output": "true",
                    "explanation": "Queue operations are performed successfully."
                },
                "example_2": {
                    "input": "dequeue()",
                    "output": "true",
                    "explanation": "Dequeued element successfully."
                },
                "complexity": {
                    "timeComplexity": "O(1)",
                    "spaceComplexity": "O(k)"
                },
                "link": ""
            },
            {
                "title": "Intersection of Two Arrays II",
                "difficulty": "Easy",
                "description": "Given two arrays, return their intersection.",
                "problemExplanation": "Each element in the result should appear as many times as it shows in both arrays.",
                "example_1": {
                    "input": "nums1 = [1, 2, 2, 1], nums2 = [2, 2]",
                    "output": "[2, 2]",
                    "explanation": "Both arrays contain two '2's."
                },
                "example_2": {
                    "input": "nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]",
                    "output": "[9, 4]",
                    "explanation": "Both arrays contain one '9' and one '4'."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Word Search",
                "difficulty": "Medium",
                "description": "Given a 2D board and a word, determine if the word exists in the grid.",
                "problemExplanation": "Words can be constructed from letters of sequentially adjacent cells.",
                "example_1": {
                    "input": "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED'",
                    "output": "true",
                    "explanation": "The word exists in the grid."
                },
                "example_2": {
                    "input": "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCB'",
                    "output": "false",
                    "explanation": "The word does not exist in the grid."
                },
                "complexity": {
                    "timeComplexity": "O(m * n)",
                    "spaceComplexity": "O(m * n)"
                },
                "link": ""
            },
            {
                "title": "Course Schedule",
                "difficulty": "Medium",
                "description": "You need to determine if you can finish all courses given prerequisites.",
                "problemExplanation": "Courses can be completed if there are no cycles in the prerequisites.",
                "example_1": {
                    "input": "numCourses = 2, prerequisites = [[1, 0]]",
                    "output": "true",
                    "explanation": "All courses can be completed."
                },
                "example_2": {
                    "input": "numCourses = 2, prerequisites = [[1, 0], [0, 1]]",
                    "output": "false",
                    "explanation": "Cycle exists; cannot complete all courses."
                },
                "complexity": {
                    "timeComplexity": "O(V + E)",
                    "spaceComplexity": "O(V)"
                },
                "link": ""
            },
            {
                "title": "Combination Sum IV",
                "difficulty": "Medium",
                "description": "Given an integer array and a target, return the number of possible combinations that add up to the target.",
                "problemExplanation": "Use dynamic programming to find the number of ways to achieve the target sum.",
                "example_1": {
                    "input": "nums = [1, 2, 3], target = 4",
                    "output": "7",
                    "explanation": "Possible combinations are: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 1+3, 3+1, 2+2."
                },
                "example_2": {
                    "input": "nums = [9], target = 3",
                    "output": "0",
                    "explanation": "No combination can sum to 3."
                },
                "complexity": {
                    "timeComplexity": "O(n * target)",
                    "spaceComplexity": "O(target)"
                },
                "link": ""
            },
            {
                "title": "Word Ladder II",
                "difficulty": "Hard",
                "description": "Find all shortest transformation sequences from beginWord to endWord.",
                "problemExplanation": "A transformation sequence is a sequence of words such that only one letter changes at a time.",
                "example_1": {
                    "input": "beginWord = 'hit', endWord = 'cog', wordList = ['hot', 'dot', 'dog', 'lot', 'log']",
                    "output": "[['hit', 'hot', 'dot', 'dog', 'cog'], ['hit', 'hot', 'lot', 'log', 'cog']]",
                    "explanation": "Two valid transformation sequences exist."
                },
                "example_2": {
                    "input": "beginWord = 'hit', endWord = 'cog', wordList = ['hot', 'dot', 'dog']",
                    "output": "[]",
                    "explanation": "No valid transformation sequence exists."
                },
                "complexity": {
                    "timeComplexity": "O(n * L * 26^L)",
                    "spaceComplexity": "O(n * L)"
                },
                "link": ""
            },
            {
                "title": "Insert Interval",
                "difficulty": "Medium",
                "description": "Insert a new interval into a set of non-overlapping intervals.",
                "problemExplanation": "Return the set of intervals after inserting a new interval.",
                "example_1": {
                    "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
                    "output": "[[1,5],[6,9]]",
                    "explanation": "Merged the intervals."
                },
                "example_2": {
                    "input": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
                    "output": "[[1,2],[3,10],[12,16]]",
                    "explanation": "Merged overlapping intervals."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            }


        ]
    },
    heaps: {
        totalProblems: 8,
        problems: [
            {
                "title": "Find the Kth Largest Element",
                "difficulty": "Medium",
                "description": "Find the Kth largest element in an array of integers.",
                "note": "Use a min-heap of size K to solve the problem efficiently.",
                "problemExplanation": "Given an array and an integer K, return the Kth largest element in the array.",
                "example_1": {
                    "input": "arr = [3, 2, 1, 5, 6, 4], K = 2",
                    "output": "5",
                    "explanation": "The 2nd largest element is 5."
                },
                "example_2": {
                    "input": "arr = [7, 10, 4, 3, 20, 15], K = 3",
                    "output": "10",
                    "explanation": "The 3rd largest element is 10."
                },
                "complexity": {
                    "timeComplexity": "O(N log K)",
                    "spaceComplexity": "O(K)"
                },
                "link": ""
            },
            {
                "title": "Merge K Sorted Lists",
                "difficulty": "Hard",
                "description": "Merge K sorted linked lists into one sorted list.",
                "note": "Utilize a min-heap to keep track of the smallest elements from each list.",
                "problemExplanation": "Given K sorted linked lists, merge them into a single sorted linked list.",
                "example_1": {
                    "input": "lists = [[1, 4, 5], [1, 3, 4], [2, 6]]",
                    "output": "[1, 1, 2, 3, 4, 4, 5, 6]",
                    "explanation": "The merged sorted list contains all elements in sorted order."
                },
                "example_2": {
                    "input": "lists = [[2, 5, 7], [3, 6], [8, 9, 10]]",
                    "output": "[2, 3, 5, 6, 7, 8, 9, 10]",
                    "explanation": "Merge all lists to form a single sorted list."
                },
                "complexity": {
                    "timeComplexity": "O(N log K)",
                    "spaceComplexity": "O(K)"
                },
                "link": ""
            },
            {
                "title": "Top K Frequent Elements",
                "difficulty": "Medium",
                "description": "Find the K most frequent elements in an array.",
                "note": "Use a min-heap to keep track of the top K frequent elements.",
                "problemExplanation": "Given an array of integers, return the K most frequent elements.",
                "example_1": {
                    "input": "arr = [1, 1, 1, 2, 2, 3], K = 2",
                    "output": "[1, 2]",
                    "explanation": "1 appears 3 times and 2 appears 2 times."
                },
                "example_2": {
                    "input": "arr = [4, 4, 4, 6, 6, 5], K = 1",
                    "output": "[4]",
                    "explanation": "4 is the most frequent element."
                },
                "complexity": {
                    "timeComplexity": "O(N log K)",
                    "spaceComplexity": "O(N)"
                },
                "link": ""
            },
            {
                "title": "Sort an Almost Sorted Array",
                "difficulty": "Medium",
                "description": "Sort an array where each element is at most K positions away from its sorted position.",
                "note": "Use a min-heap to maintain a window of K+1 elements.",
                "problemExplanation": "Given an array and an integer K, sort the array where each element is at most K positions away.",
                "example_1": {
                    "input": "arr = [6, 5, 3, 2, 8, 10, 9], K = 3",
                    "output": "[2, 3, 5, 6, 8, 9, 10]",
                    "explanation": "The array is sorted with elements in the correct order."
                },
                "example_2": {
                    "input": "arr = [3, 2, 1, 5, 6, 4], K = 2",
                    "output": "[1, 2, 3, 4, 5, 6]",
                    "explanation": "Sort the array while considering the distance constraint."
                },
                "complexity": {
                    "timeComplexity": "O(N log K)",
                    "spaceComplexity": "O(K)"
                },
                "link": ""
            },
            {
                "title": "Find the Median from Data Stream",
                "difficulty": "Hard",
                "description": "Design a data structure that supports finding the median of a data stream efficiently.",
                "note": "Use two heaps to manage the lower and upper halves of the data.",
                "problemExplanation": "Maintain a data stream and return the median of the elements added so far.",
                "example_1": {
                    "input": "arr = [1, 2, 3]",
                    "output": "2",
                    "explanation": "The median of [1, 2, 3] is 2."
                },
                "example_2": {
                    "input": "arr = [5, 10, 15, 20]",
                    "output": "12.5",
                    "explanation": "The median of [5, 10, 15, 20] is (10+15)/2 = 12.5."
                },
                "complexity": {
                    "timeComplexity": "O(log N)",
                    "spaceComplexity": "O(N)"
                },
                "link": ""
            },
            {
                "title": "K Closest Points to Origin",
                "difficulty": "Medium",
                "description": "Find the K points that are closest to the origin in a 2D plane.",
                "note": "Use a max-heap to track the K closest points.",
                "problemExplanation": "Given a list of points in a 2D plane, return the K closest points to the origin.",
                "example_1": {
                    "input": "points = [[1, 3], [-2, 2], [5, 8], [0, 1]], K = 2",
                    "output": "[[-2, 2], [0, 1]]",
                    "explanation": "The closest points to the origin are (-2,2) and (0,1)."
                },
                "example_2": {
                    "input": "points = [[3, 3], [5, -1], [-2, 4]], K = 1",
                    "output": "[[3, 3]]",
                    "explanation": "The closest point to the origin is (3,3)."
                },
                "complexity": {
                    "timeComplexity": "O(N log K)",
                    "spaceComplexity": "O(K)"
                },
                "link": ""
            },
            {
                "title": "Connect Ropes to Minimize Cost",
                "difficulty": "Easy",
                "description": "Connect ropes with different lengths to minimize the total cost.",
                "note": "Use a min-heap to always connect the smallest ropes first.",
                "problemExplanation": "Given an array of rope lengths, connect the ropes with the minimum total cost.",
                "example_1": {
                    "input": "arr = [4, 3, 2, 6]",
                    "output": "29",
                    "explanation": "Connect ropes in the order 2+3=5, 5+4=9, 9+6=15."
                },
                "example_2": {
                    "input": "arr = [1, 2, 3, 4, 5]",
                    "output": "33",
                    "explanation": "Total cost of connecting ropes is minimized using a min-heap."
                },
                "complexity": {
                    "timeComplexity": "O(N log N)",
                    "spaceComplexity": "O(N)"
                },
                "link": ""
            },
            {
                "title": "Rearrange String K Distance Apart",
                "difficulty": "Hard",
                "description": "Rearrange a string so that the same characters are at least K distance apart.",
                "note": "Use a max-heap to order characters by frequency.",
                "problemExplanation": "Given a string, rearrange it such that no two identical characters are less than K distance apart.",
                "example_1": {
                    "input": "s = 'aabbcc', K = 2",
                    "output": "'abcabc'",
                    "explanation": "Characters are rearranged to maintain the K distance constraint."
                },
                "example_2": {
                    "input": "s = 'aaabc', K = 2",
                    "output": "'abaca'",
                    "explanation": "The string is rearranged while keeping characters 2 units apart."
                },
                "complexity": {
                    "timeComplexity": "O(N log N)",
                    "spaceComplexity": "O(N)"
                },
                "link": ""
            },


        ]
    },
    greedyAlgo: {
        totalProblems: 8,
        problems: [
            {
                "title": "Activity Selection Problem",
                "difficulty": "Easy",
                "description": "Find the maximum number of non-overlapping activities that can be performed, given their start and finish times.",
                "note": "Select activities in increasing order of their finish times.",
                "problemExplanation": "You are given the start and finish times of multiple activities. The goal is to select the maximum number of activities that don't overlap.",
                "example_1": {
                    "input": "arr = [(1, 4), (3, 5), (0, 6), (5, 7), (8, 9), (5, 9)]",
                    "output": "4",
                    "explanation": "The selected activities are (1, 4), (5, 7), (8, 9)."
                },
                "example_2": {
                    "input": "arr = [(10, 20), (12, 25), (20, 30)]",
                    "output": "2",
                    "explanation": "The selected activities are (10, 20) and (20, 30)."
                },
                "complexity": {
                    "timeComplexity": "O(n log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Fractional Knapsack Problem",
                "difficulty": "Medium",
                "description": "Find the maximum value of items that can be put in a knapsack of capacity W, allowing fractional parts of items.",
                "note": "Use a greedy strategy by taking items with the highest value-to-weight ratio first.",
                "problemExplanation": "Given weights and values of items, determine the maximum value achievable with a given weight capacity.",
                "example_1": {
                    "input": "weights = [10, 20, 30], values = [60, 100, 120], W = 50",
                    "output": "240.0",
                    "explanation": "Take the entire item 2 and a fraction of item 3."
                },
                "example_2": {
                    "input": "weights = [5, 10, 15], values = [10, 20, 30], W = 15",
                    "output": "30.0",
                    "explanation": "Take items with the best value-to-weight ratio."
                },
                "complexity": {
                    "timeComplexity": "O(n log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Minimum Number of Coins",
                "difficulty": "Easy",
                "description": "Find the minimum number of coins required to make a certain amount of change, using a set of denominations.",
                "note": "The denominations should be sorted in descending order.",
                "problemExplanation": "Given an amount and available denominations, select the minimum number of coins needed.",
                "example_1": {
                    "input": "denominations = [1, 5, 10, 25], amount = 30",
                    "output": "2",
                    "explanation": "Use one 25-cent coin and one 5-cent coin."
                },
                "example_2": {
                    "input": "denominations = [1, 2, 5], amount = 11",
                    "output": "3",
                    "explanation": "Use two 5-cent coins and one 1-cent coin."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Job Sequencing Problem",
                "difficulty": "Medium",
                "description": "Maximize the total profit by selecting jobs with deadlines and associated profits.",
                "note": "Jobs should be sorted in decreasing order of profit.",
                "problemExplanation": "Schedule jobs such that each job is completed before its deadline to maximize profit.",
                "example_1": {
                    "input": "jobs = [(1, 20), (2, 15), (3, 10), (2, 25), (1, 30)]",
                    "output": "60",
                    "explanation": "Select jobs with highest profit within deadlines."
                },
                "example_2": {
                    "input": "jobs = [(1, 5), (2, 10), (3, 15), (2, 20)]",
                    "output": "35",
                    "explanation": "Schedule jobs to get the highest cumulative profit."
                },
                "complexity": {
                    "timeComplexity": "O(n log n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Huffman Coding",
                "difficulty": "Hard",
                "description": "Generate Huffman codes for characters based on their frequencies to minimize the total encoding cost.",
                "note": "Use a priority queue to build the Huffman tree.",
                "problemExplanation": "Create an optimal binary tree for encoding, where the most frequent characters have the shortest codes.",
                "example_1": {
                    "input": "characters = ['a', 'b', 'c', 'd'], frequencies = [5, 9, 12, 13]",
                    "output": "{'a': '110', 'b': '10', 'c': '0', 'd': '111'}",
                    "explanation": "Codes are assigned based on character frequencies."
                },
                "example_2": {
                    "input": "characters = ['x', 'y', 'z'], frequencies = [4, 8, 2]",
                    "output": "{'x': '0', 'y': '11', 'z': '10'}",
                    "explanation": "Huffman tree is constructed to minimize encoding length."
                },
                "complexity": {
                    "timeComplexity": "O(n log n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Dijkstra's Algorithm",
                "difficulty": "Medium",
                "description": "Find the shortest path from a source node to all other nodes in a weighted graph.",
                "note": "Use a priority queue to select the next node with the minimum distance.",
                "problemExplanation": "Calculate the shortest distance from the starting node to every other node in the graph.",
                "example_1": {
                    "input": "graph = {0: [(1, 4), (2, 1)], 1: [(3, 1)], 2: [(1, 2), (3, 5)], 3: []}",
                    "output": "[0, 3, 1, 4]",
                    "explanation": "The shortest path distances from node 0 to each other node."
                },
                "example_2": {
                    "input": "graph = {0: [(1, 1)], 1: [(2, 2)], 2: [(0, 1)]}",
                    "output": "[0, 1, 3]",
                    "explanation": "Shortest distances to nodes 1 and 2 from node 0."
                },
                "complexity": {
                    "timeComplexity": "O(V + E log V)",
                    "spaceComplexity": "O(V)"
                },
                "link": ""
            },
            {
                "title": "Prim's Minimum Spanning Tree Algorithm",
                "difficulty": "Hard",
                "description": "Find the minimum spanning tree of a weighted, connected, undirected graph.",
                "note": "Start from any vertex and grow the tree using the minimum edge weight.",
                "problemExplanation": "Construct a spanning tree that connects all vertices with the minimum total edge weight.",
                "example_1": {
                    "input": "graph = {0: [(1, 2), (3, 6)], 1: [(0, 2), (2, 3)], 2: [(1, 3), (3, 8)], 3: [(0, 6), (2, 8)]}",
                    "output": "Total weight: 11",
                    "explanation": "Edges with minimum weights are selected to connect all vertices."
                },
                "example_2": {
                    "input": "graph = {0: [(1, 4)], 1: [(2, 1)], 2: [(3, 5)], 3: []}",
                    "output": "Total weight: 10",
                    "explanation": "The minimum edges form a spanning tree."
                },
                "complexity": {
                    "timeComplexity": "O(V^2)",
                    "spaceComplexity": "O(V)"
                },
                "link": ""
            },
            {
                "title": "Kruskal's Algorithm for Minimum Spanning Tree",
                "difficulty": "Medium",
                "description": "Find the minimum spanning tree of a weighted, connected graph using Kruskal's algorithm.",
                "note": "Sort all edges by weight and add them to the tree without forming a cycle.",
                "problemExplanation": "Construct a minimum spanning tree by adding edges in ascending order of weights.",
                "example_1": {
                    "input": "graph = [(0, 1, 4), (1, 2, 3), (2, 3, 2), (0, 3, 1)]",
                    "output": "Total weight: 7",
                    "explanation": "Edges (0, 3), (2, 3), and (1, 2) form the minimum spanning tree."
                },
                "example_2": {
                    "input": "graph = [(0, 1, 1), (1, 2, 2), (2, 3, 3), (0, 3, 4)]",
                    "output": "Total weight: 6",
                    "explanation": "Minimum spanning tree is formed with weights 1, 2, and 3."
                },
                "complexity": {
                    "timeComplexity": "O(E log E)",
                    "spaceComplexity": "O(V)"
                },
                "link": ""
            }

        ]
    },
    binaryTrees: {
        totalProblems: 7,
        problems: [
            {
                "title": "Preorder Traversal of a Binary Tree",
                "difficulty": "Easy",
                "description": "Perform a preorder traversal (root, left, right) of a given binary tree.",
                "note": "Visit each node in the specified order during traversal.",
                "problemExplanation": "In preorder traversal, the root node is visited first, followed by the left subtree, and then the right subtree.",
                "example_1": {
                    "input": "arr = [1, 2, 3, 4, 5]",
                    "output": "[1, 2, 4, 5, 3]",
                    "explanation": "The traversal visits 1, then its left child 2, and so on."
                },
                "example_2": {
                    "input": "arr = [10, 5, 20, 3, 7, 15]",
                    "output": "[10, 5, 3, 7, 20, 15]",
                    "explanation": "The root 10 is visited first, followed by the left subtree."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Inorder Traversal of a Binary Tree",
                "difficulty": "Easy",
                "description": "Perform an inorder traversal (left, root, right) of a given binary tree.",
                "note": "Visit each node in the specified order during traversal.",
                "problemExplanation": "In inorder traversal, the left subtree is visited first, followed by the root, and then the right subtree.",
                "example_1": {
                    "input": "arr = [1, 2, 3, 4, 5]",
                    "output": "[4, 2, 5, 1, 3]",
                    "explanation": "The leftmost node is visited first, followed by its parent node."
                },
                "example_2": {
                    "input": "arr = [10, 5, 20, 3, 7, 15]",
                    "output": "[3, 5, 7, 10, 15, 20]",
                    "explanation": "The traversal starts with the leftmost node, 3."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Postorder Traversal of a Binary Tree",
                "difficulty": "Easy",
                "description": "Perform a postorder traversal (left, right, root) of a given binary tree.",
                "note": "Visit each node in the specified order during traversal.",
                "problemExplanation": "In postorder traversal, the left subtree is visited first, then the right subtree, and finally the root.",
                "example_1": {
                    "input": "arr = [1, 2, 3, 4, 5]",
                    "output": "[4, 5, 2, 3, 1]",
                    "explanation": "The traversal visits the left and right children before the root."
                },
                "example_2": {
                    "input": "arr = [10, 5, 20, 3, 7, 15]",
                    "output": "[3, 7, 5, 15, 20, 10]",
                    "explanation": "Both subtrees are visited before the root."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Level Order Traversal of a Binary Tree",
                "difficulty": "Medium",
                "description": "Perform a level order traversal of a binary tree, visiting nodes level by level from left to right.",
                "note": "Use a queue to facilitate the traversal.",
                "problemExplanation": "Traverse each level of the tree, starting from the root, and visit nodes from left to right.",
                "example_1": {
                    "input": "arr = [1, 2, 3, 4, 5]",
                    "output": "[1, 2, 3, 4, 5]",
                    "explanation": "Nodes are visited in the order of their levels."
                },
                "example_2": {
                    "input": "arr = [10, 5, 20, 3, 7, 15]",
                    "output": "[10, 5, 20, 3, 7, 15]",
                    "explanation": "All nodes are visited level by level."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Find the Maximum Depth of a Binary Tree",
                "difficulty": "Medium",
                "description": "Find the maximum depth of a given binary tree.",
                "note": "The depth is the longest path from the root node to a leaf node.",
                "problemExplanation": "Calculate the depth by counting the number of edges on the longest path from the root to a leaf.",
                "example_1": {
                    "input": "arr = [1, 2, 3, 4, 5]",
                    "output": "3",
                    "explanation": "The maximum depth is 3, as the longest path has 3 edges."
                },
                "example_2": {
                    "input": "arr = [10, 5, 20, 3, 7, 15]",
                    "output": "3",
                    "explanation": "The depth is 3 due to the longest path from the root to a leaf."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Check if Two Binary Trees are Identical",
                "difficulty": "Easy",
                "description": "Check if two given binary trees are identical in structure and node values.",
                "note": "The trees are identical if they have the same structure and the same values at each corresponding node.",
                "problemExplanation": "Compare the corresponding nodes of both trees recursively to determine if they are identical.",
                "example_1": {
                    "input": "arr1 = [1, 2, 3], arr2 = [1, 2, 3]",
                    "output": "True",
                    "explanation": "Both trees have the same structure and node values."
                },
                "example_2": {
                    "input": "arr1 = [1, 2], arr2 = [1, 3]",
                    "output": "False",
                    "explanation": "The node values differ at the second node."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Find the Diameter of a Binary Tree",
                "difficulty": "Medium",
                "description": "Find the diameter of a binary tree, defined as the number of nodes on the longest path between two leaf nodes.",
                "note": "The diameter may or may not pass through the root node.",
                "problemExplanation": "Calculate the diameter by considering the maximum depth of the left and right subtrees and their sum.",
                "example_1": {
                    "input": "arr = [1, 2, 3, 4, 5]",
                    "output": "4",
                    "explanation": "The longest path consists of 4 nodes."
                },
                "example_2": {
                    "input": "arr = [10, 5, 20, 3, 7, 15]",
                    "output": "4",
                    "explanation": "The longest path includes 4 nodes."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },


        ]
    },
    binarySearchTrees: {
        totalProblems: 8,
        problems: [
            {
                "title": "Insert a Node in a Binary Search Tree",
                "difficulty": "Easy",
                "description": "Insert a given value into a Binary Search Tree while maintaining its properties.",
                "note": "The tree should still be a valid Binary Search Tree after the insertion.",
                "problemExplanation": "In a BST, for each node, all elements in its left subtree are smaller, and all elements in its right subtree are larger. The task is to find the appropriate position for the new node.",
                "example_1": {
                    "input": "arr = [10, 5, 15], value = 7",
                    "output": "[10, 5, 15, 7]",
                    "explanation": "The value 7 is inserted as a child of 5."
                },
                "example_2": {
                    "input": "arr = [20, 10, 30], value = 25",
                    "output": "[20, 10, 30, 25]",
                    "explanation": "The value 25 is inserted as a child of 30."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Delete a Node from a Binary Search Tree",
                "difficulty": "Medium",
                "description": "Delete a given node from a Binary Search Tree while maintaining its properties.",
                "note": "Handle different cases where the node to be deleted has no child, one child, or two children.",
                "problemExplanation": "If the node has two children, find the inorder successor to replace it. Adjust the BST accordingly.",
                "example_1": {
                    "input": "arr = [10, 5, 15, 3, 7], value = 5",
                    "output": "[10, 7, 15, 3]",
                    "explanation": "The node 5 is replaced by its child node 7."
                },
                "example_2": {
                    "input": "arr = [20, 10, 30, 5], value = 20",
                    "output": "[10, 5, 30]",
                    "explanation": "The root node 20 is deleted and replaced by node 10."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Find the Minimum Element in a Binary Search Tree",
                "difficulty": "Easy",
                "description": "Find the minimum element present in a given Binary Search Tree.",
                "note": "The minimum element is the leftmost node in the BST.",
                "problemExplanation": "Traverse the left subtree until there are no more left children.",
                "example_1": {
                    "input": "arr = [20, 10, 30, 5]",
                    "output": "5",
                    "explanation": "The leftmost node is 5."
                },
                "example_2": {
                    "input": "arr = [15, 7, 20, 3]",
                    "output": "3",
                    "explanation": "The minimum element is 3."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Find the Maximum Element in a Binary Search Tree",
                "difficulty": "Easy",
                "description": "Find the maximum element present in a given Binary Search Tree.",
                "note": "The maximum element is the rightmost node in the BST.",
                "problemExplanation": "Traverse the right subtree until there are no more right children.",
                "example_1": {
                    "input": "arr = [20, 10, 30, 25]",
                    "output": "30",
                    "explanation": "The rightmost node is 30."
                },
                "example_2": {
                    "input": "arr = [15, 7, 20, 25]",
                    "output": "25",
                    "explanation": "The maximum element is 25."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Check if a Binary Tree is a Binary Search Tree",
                "difficulty": "Medium",
                "description": "Verify if a given Binary Tree satisfies the properties of a Binary Search Tree.",
                "note": "In a valid BST, for each node, its left subtree's values should be smaller, and its right subtree's values should be larger.",
                "problemExplanation": "Use a recursive approach to check if all nodes satisfy the BST properties.",
                "example_1": {
                    "input": "arr = [10, 5, 15, 3, 7]",
                    "output": "True",
                    "explanation": "The given tree satisfies the BST properties."
                },
                "example_2": {
                    "input": "arr = [20, 30, 10]",
                    "output": "False",
                    "explanation": "The tree does not satisfy the BST properties because 10 is on the right of 20."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Find the Inorder Successor in a Binary Search Tree",
                "difficulty": "Medium",
                "description": "Find the inorder successor of a given node in a Binary Search Tree.",
                "note": "The inorder successor is the smallest node that is larger than the given node.",
                "problemExplanation": "If the node has a right child, the successor is the minimum value in the right subtree; otherwise, traverse upwards to find the successor.",
                "example_1": {
                    "input": "arr = [20, 10, 30, 5, 15], value = 10",
                    "output": "15",
                    "explanation": "The inorder successor of 10 is 15."
                },
                "example_2": {
                    "input": "arr = [20, 10, 30, 25], value = 25",
                    "output": "30",
                    "explanation": "The inorder successor of 25 is 30."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Find the Lowest Common Ancestor in a Binary Search Tree",
                "difficulty": "Medium",
                "description": "Find the lowest common ancestor (LCA) of two given nodes in a Binary Search Tree.",
                "note": "The LCA is the lowest node that has both nodes as descendants.",
                "problemExplanation": "Traverse the tree and determine the split point where one node is on the left and the other is on the right.",
                "example_1": {
                    "input": "arr = [20, 10, 30, 5, 15], values = 5 and 15",
                    "output": "10",
                    "explanation": "The LCA of 5 and 15 is 10."
                },
                "example_2": {
                    "input": "arr = [20, 10, 30, 25], values = 10 and 30",
                    "output": "20",
                    "explanation": "The LCA of 10 and 30 is 20."
                },
                "complexity": {
                    "timeComplexity": "O(log n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Convert a Sorted Array to a Balanced Binary Search Tree",
                "difficulty": "Medium",
                "description": "Given a sorted array, convert it into a balanced Binary Search Tree.",
                "note": "The tree should be balanced, with the middle element as the root.",
                "problemExplanation": "Use a divide-and-conquer approach to choose the middle element as the root and recursively build the left and right subtrees.",
                "example_1": {
                    "input": "arr = [1, 2, 3, 4, 5]",
                    "output": "[3, 2, 5, 1, 4]",
                    "explanation": "The middle element 3 becomes the root, with 2 and 5 as children."
                },
                "example_2": {
                    "input": "arr = [10, 20, 30, 40, 50]",
                    "output": "[30, 20, 40, 10, 50]",
                    "explanation": "The middle element 30 becomes the root, with 20 and 40 as children."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            }

        ]
    },
    graphs: {
        totalProblems: 10,
        problems: [
            {
                "title": "Find the Number of Connected Components in an Undirected Graph",
                "difficulty": "Medium",
                "description": "Given an undirected graph, determine the number of connected components in the graph.",
                "note": "The graph is represented as an adjacency list.",
                "problemExplanation": "A connected component is a set of vertices such that there is a path between any pair of vertices in the component.",
                "example_1": {
                    "input": "arr = [[1, 2], [2, 3], [4]]",
                    "output": "2",
                    "explanation": "There are two connected components: {1, 2, 3} and {4}."
                },
                "example_2": {
                    "input": "arr = [[1], [2], [3], [4]]",
                    "output": "4",
                    "explanation": "Each node is its own component."
                },
                "complexity": {
                    "timeComplexity": "O(n + m)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Check if a Directed Graph has a Cycle",
                "difficulty": "Medium",
                "description": "Determine whether a given directed graph contains a cycle.",
                "note": "The graph is represented as an adjacency list.",
                "problemExplanation": "A cycle in a directed graph occurs when there is a path that leads from a vertex back to itself.",
                "example_1": {
                    "input": "arr = [[1], [2], [0]]",
                    "output": "True",
                    "explanation": "There is a cycle: 0 -> 1 -> 2 -> 0."
                },
                "example_2": {
                    "input": "arr = [[1], [2], [3], []]",
                    "output": "False",
                    "explanation": "There is no cycle in the graph."
                },
                "complexity": {
                    "timeComplexity": "O(n + m)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Find the Shortest Path in an Unweighted Graph",
                "difficulty": "Easy",
                "description": "Given an unweighted graph, find the shortest path from a start node to an end node.",
                "note": "The graph is represented as an adjacency list.",
                "problemExplanation": "Use BFS to find the shortest path in an unweighted graph.",
                "example_1": {
                    "input": "arr = [[1, 2], [3], [3], []], start = 0, end = 3",
                    "output": "2",
                    "explanation": "The shortest path is 0 -> 1 -> 3."
                },
                "example_2": {
                    "input": "arr = [[1], [2], [3], []], start = 0, end = 2",
                    "output": "2",
                    "explanation": "The shortest path is 0 -> 1 -> 2."
                },
                "complexity": {
                    "timeComplexity": "O(n + m)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Find the Shortest Path in an Unweighted Graph",
                "difficulty": "Easy",
                "description": "Given an unweighted graph, find the shortest path from a start node to an end node.",
                "note": "The graph is represented as an adjacency list.",
                "problemExplanation": "Use BFS to find the shortest path in an unweighted graph.",
                "example_1": {
                    "input": "arr = [[1, 2], [3], [3], []], start = 0, end = 3",
                    "output": "2",
                    "explanation": "The shortest path is 0 -> 1 -> 3."
                },
                "example_2": {
                    "input": "arr = [[1], [2], [3], []], start = 0, end = 2",
                    "output": "2",
                    "explanation": "The shortest path is 0 -> 1 -> 2."
                },
                "complexity": {
                    "timeComplexity": "O(n + m)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Find All Paths From Source to Target",
                "difficulty": "Medium",
                "description": "Given a directed graph, find all possible paths from the source node to the target node.",
                "note": "The graph is represented as an adjacency list.",
                "problemExplanation": "DFS can be used to find all paths from the source to the target.",
                "example_1": {
                    "input": "arr = [[1, 2], [3], [3], []], source = 0, target = 3",
                    "output": "[[0, 1, 3], [0, 2, 3]]",
                    "explanation": "There are two paths from node 0 to node 3."
                },
                "example_2": {
                    "input": "arr = [[1, 2], [3], [], [2]], source = 0, target = 2",
                    "output": "[[0, 1, 3, 2], [0, 2]]",
                    "explanation": "There are two paths from node 0 to node 2."
                },
                "complexity": {
                    "timeComplexity": "O(2^n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Find the Mother Vertex in a Graph",
                "difficulty": "Medium",
                "description": "Given a directed graph, find a vertex that can reach all other vertices in the graph.",
                "note": "A mother vertex is a vertex from which all other vertices can be reached.",
                "problemExplanation": "If such a vertex exists, it is called the mother vertex.",
                "example_1": {
                    "input": "arr = [[1, 2], [3], [3], []]",
                    "output": "0",
                    "explanation": "Node 0 can reach all other nodes in the graph."
                },
                "example_2": {
                    "input": "arr = [[1], [2], [3], [0]]",
                    "output": "-1",
                    "explanation": "No such vertex exists that can reach all others."
                },
                "complexity": {
                    "timeComplexity": "O(n + m)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Detect a Cycle in an Undirected Graph",
                "difficulty": "Medium",
                "description": "Check if an undirected graph contains a cycle.",
                "note": "The graph is represented as an adjacency list.",
                "problemExplanation": "A cycle in an undirected graph occurs if there is a path from a node back to itself through its neighbors.",
                "example_1": {
                    "input": "arr = [[1], [0, 2], [1, 3], [2]]",
                    "output": "True",
                    "explanation": "There is a cycle: 0 -> 1 -> 2 -> 3 -> 2."
                },
                "example_2": {
                    "input": "arr = [[1], [0, 2], [1, 3], []]",
                    "output": "False",
                    "explanation": "No cycle is present."
                },
                "complexity": {
                    "timeComplexity": "O(n + m)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Clone a Graph",
                "difficulty": "Medium",
                "description": "Given a reference to a node in a connected undirected graph, return a deep copy of the graph.",
                "note": "Each node contains a value and a list of its neighbors.",
                "problemExplanation": "Use DFS or BFS to clone the graph node by node.",
                "example_1": {
                    "input": "arr = [[2, 4], [1, 3], [2, 4], [1, 3]]",
                    "output": "[[2, 4], [1, 3], [2, 4], [1, 3]]",
                    "explanation": "The graph is cloned successfully with all nodes and edges."
                },
                "example_2": {
                    "input": "arr = [[1, 3], [0, 2], [1, 3], [0, 2]]",
                    "output": "[[1, 3], [0, 2], [1, 3], [0, 2]]",
                    "explanation": "The cloned graph is identical to the original."
                },
                "complexity": {
                    "timeComplexity": "O(n + m)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },










        ]
    },
    dynamicProgramming: {
        totalProblems: 30,
        problems: [
            {
                title: "Climbing Stars",
                difficulty: "Easy",
                description: "",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= ",
                    output: "",
                    explanation: ""
                },
                example_2: {
                    input: "arr = ",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/climbing-stairs/"
            },
            {
                title: "Frog Jump with k distances(DP- 4) ",
                difficulty: "Easy",
                description: "",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= ",
                    output: "",
                    explanation: ""
                },
                example_2: {
                    input: "arr = ",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3Xn0Kkw"
            },
            {
                title: "",
                difficulty: "Easy",
                description: "",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= ",
                    output: "",
                    explanation: ""
                },
                example_2: {
                    input: "arr = ",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3GyNRya"
            },
            {
                title: "Grid Unique Paths : DP on Grids (DP8)",
                difficulty: "Medium",
                description: "Given two values M and N, which represent a matrix[M][N]. We need to find the total unique paths from the top-left cell (matrix[0][0]) to the rightmost cell (matrix[M-1][N-1]).",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= ",
                    output: "",
                    explanation: ""
                },
                example_2: {
                    input: "arr = ",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/unique-paths/"
            },
            {
                title: "Grid Unique Paths 2 (DP 9)",
                difficulty: "Medium",
                description: "We are given an “N*M” Maze. The maze contains some obstacles. A cell is ‘blockage’ in the maze if its value is -1. 0 represents non-blockage. There is no path possible through a blocked cell.We need to count the total number of unique paths from the top- left corner of the maze to the bottom - right corner.At every cell, we can move either down or towards the right.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= ",
                    output: "",
                    explanation: ""
                },
                example_2: {
                    input: "arr = ",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://www.codingninjas.com/codestudio/problems/maze-obstacles_977241?source=youtube&campaign=striver_dp_videos"
            },
            {
                title: "Minimum Path Sum In a Grid (DP 10)",
                difficulty: "Medium",
                description: "We are given an “N*M” matrix of integers. We need to find a path from the top-left corner to the bottom-right corner of the matrix, such that there is a minimum cost past that we select.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "arr= ",
                    output: "",
                    explanation: ""
                },
                example_2: {
                    input: "arr = ",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(M*N)",
                    spaceComplexity: "O(N)"
                },
                link: "https://www.codingninjas.com/codestudio/problems/minimum-path-sum_985349"
            },
            {
                "title": "Climbing Stairs",
                "difficulty": "Easy",
                "description": "You are climbing a staircase. It takes n steps to reach the top.",
                "problemExplanation": "Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
                "example_1": {
                    "input": "n = 2",
                    "output": "2",
                    "explanation": "There are two ways to climb to the top: 1 step + 1 step or 2 steps."
                },
                "example_2": {
                    "input": "n = 3",
                    "output": "3",
                    "explanation": "Three ways: 1+1+1, 1+2, 2+1."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "House Robber",
                "difficulty": "Medium",
                "description": "You are a professional robber planning to rob houses along a street.",
                "problemExplanation": "Each house has a certain amount of money, but adjacent houses have security systems that prevent you from robbing them.",
                "example_1": {
                    "input": "nums = [1, 2, 3, 1]",
                    "output": "4",
                    "explanation": "Rob houses 1 and 3 for a maximum of 4."
                },
                "example_2": {
                    "input": "nums = [2, 7, 9, 3, 1]",
                    "output": "12",
                    "explanation": "Rob houses 2, 4, and 5 for a maximum of 12."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Longest Increasing Subsequence",
                "difficulty": "Medium",
                "description": "Given an integer array, return the length of the longest increasing subsequence.",
                "problemExplanation": "You must find a subsequence that is strictly increasing.",
                "example_1": {
                    "input": "nums = [10, 9, 2, 5, 3, 7, 101, 18]",
                    "output": "4",
                    "explanation": "The longest increasing subsequence is [2, 3, 7, 101]."
                },
                "example_2": {
                    "input": "nums = [0, 1, 0, 3, 2, 3]",
                    "output": "4",
                    "explanation": "The longest increasing subsequence is [0, 1, 2, 3]."
                },
                "complexity": {
                    "timeComplexity": "O(n^2)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Minimum Path Sum",
                "difficulty": "Medium",
                "description": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right.",
                "problemExplanation": "The path should minimize the sum of the numbers along the path.",
                "example_1": {
                    "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
                    "output": "7",
                    "explanation": "The path 1→3→1→1→1 minimizes the sum."
                },
                "example_2": {
                    "input": "grid = [[1,2,3],[4,5,6]]",
                    "output": "12",
                    "explanation": "The path 1→2→3→6 minimizes the sum."
                },
                "complexity": {
                    "timeComplexity": "O(m * n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Coin Change",
                "difficulty": "Medium",
                "description": "You are given coins of different denominations and a total amount of money.",
                "problemExplanation": "You want to make up that amount with the minimum number of coins. If that amount cannot be made up, return -1.",
                "example_1": {
                    "input": "coins = [1, 2, 5], amount = 11",
                    "output": "3",
                    "explanation": "11 can be made with 5 + 5 + 1."
                },
                "example_2": {
                    "input": "coins = [2], amount = 3",
                    "output": "-1",
                    "explanation": "3 cannot be formed with coin of denomination 2."
                },
                "complexity": {
                    "timeComplexity": "O(n * amount)",
                    "spaceComplexity": "O(amount)"
                },
                "link": ""
            },
            {
                "title": "Edit Distance",
                "difficulty": "Hard",
                "description": "Given two strings, find the minimum number of operations required to convert one string into the other.",
                "problemExplanation": "Operations include insertion, deletion, or substitution of a character.",
                "example_1": {
                    "input": "word1 = 'horse', word2 = 'ros'",
                    "output": "3",
                    "explanation": "horse → rorse → rose → ros. (3 operations)"
                },
                "example_2": {
                    "input": "word1 = 'intention', word2 = 'execution'",
                    "output": "5",
                    "explanation": "intention → inention → enention → exention → exection → execution."
                },
                "complexity": {
                    "timeComplexity": "O(m * n)",
                    "spaceComplexity": "O(m * n)"
                },
                "link": ""
            },
            {
                "title": "Unique Paths",
                "difficulty": "Medium",
                "description": "A robot is located at the top-left corner of a m x n grid.",
                "problemExplanation": "The robot can only move down or right. How many unique paths are there to the bottom-right corner?",
                "example_1": {
                    "input": "m = 3, n = 7",
                    "output": "28",
                    "explanation": "There are 28 unique paths."
                },
                "example_2": {
                    "input": "m = 3, n = 2",
                    "output": "3",
                    "explanation": "There are 3 unique paths."
                },
                "complexity": {
                    "timeComplexity": "O(m * n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Longest Common Subsequence",
                "difficulty": "Medium",
                "description": "Given two strings, find the length of their longest common subsequence.",
                "problemExplanation": "A subsequence is a sequence that appears in the same relative order but not necessarily contiguous.",
                "example_1": {
                    "input": "text1 = 'abcde', text2 = 'ace'",
                    "output": "3",
                    "explanation": "The longest common subsequence is 'ace'."
                },
                "example_2": {
                    "input": "text1 = 'abc', text2 = 'abc'",
                    "output": "3",
                    "explanation": "The longest common subsequence is 'abc'."
                },
                "complexity": {
                    "timeComplexity": "O(m * n)",
                    "spaceComplexity": "O(m * n)"
                },
                "link": ""
            },
            {
                "title": "Partition Equal Subset Sum",
                "difficulty": "Medium",
                "description": "Given a non-empty array, determine if it can be partitioned into two subsets with equal sum.",
                "problemExplanation": "If the array can be partitioned, return true; otherwise, return false.",
                "example_1": {
                    "input": "nums = [1, 5, 11, 5]",
                    "output": "true",
                    "explanation": "The array can be partitioned into [1, 5, 5] and [11]."
                },
                "example_2": {
                    "input": "nums = [1, 2, 3, 5]",
                    "output": "false",
                    "explanation": "The array cannot be partitioned."
                },
                "complexity": {
                    "timeComplexity": "O(n * sum)",
                    "spaceComplexity": "O(sum)"
                },
                "link": ""
            },
            {
                "title": "Sum of Subarray Minimums",
                "difficulty": "Medium",
                "description": "Given an array of integers, return the sum of the minimums of every subarray.",
                "problemExplanation": "The answer will be taken modulo 10^9 + 7.",
                "example_1": {
                    "input": "arr = [3, 1, 2, 4]",
                    "output": "17",
                    "explanation": "Subarrays: [3], [1], [2], [4], [3, 1], [1, 2], [2, 4], [3, 1, 2], [1, 2, 4], [3, 1, 2, 4]."
                },
                "example_2": {
                    "input": "arr = [11, 81, 94, 43, 3]",
                    "output": "444",
                    "explanation": "Subarrays have minimums summed to 444."
                },
                "complexity": {
                    "timeComplexity": "O(n^2)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Count of Subset Sum",
                "difficulty": "Medium",
                "description": "Given a set of non-negative integers, determine the count of subsets that sum up to a target.",
                "problemExplanation": "You need to count subsets that equal the given target sum.",
                "example_1": {
                    "input": "nums = [1, 2, 3], target = 4",
                    "output": "1",
                    "explanation": "Only subset [1, 3] equals the target."
                },
                "example_2": {
                    "input": "nums = [1, 1, 2, 3], target = 4",
                    "output": "2",
                    "explanation": "Subsets: [1, 1, 2] and [1, 3]."
                },
                "complexity": {
                    "timeComplexity": "O(n * target)",
                    "spaceComplexity": "O(target)"
                },
                "link": ""
            },
            {
                "title": "Binary Tree Maximum Path Sum",
                "difficulty": "Hard",
                "description": "Given a non-empty binary tree, find the maximum path sum.",
                "problemExplanation": "The path must start and end at any node in the tree.",
                "example_1": {
                    "input": "root = [-10, 9, 20, null, null, 15, 7]",
                    "output": "42",
                    "explanation": "The maximum path sum is 15 + 20 + 7."
                },
                "example_2": {
                    "input": "root = [1, 2, 3]",
                    "output": "6",
                    "explanation": "The maximum path sum is 1 + 2 + 3."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(h)"
                },
                "link": ""
            },
            {
                "title": "Longest Palindromic Substring",
                "difficulty": "Medium",
                "description": "Given a string, find the longest palindromic substring.",
                "problemExplanation": "Return the substring that is a palindrome and has the longest length.",
                "example_1": {
                    "input": "s = 'babad'",
                    "output": "'bab' or 'aba'",
                    "explanation": "'bab' and 'aba' are both valid answers."
                },
                "example_2": {
                    "input": "s = 'cbbd'",
                    "output": "'bb'",
                    "explanation": "'bb' is the longest palindromic substring."
                },
                "complexity": {
                    "timeComplexity": "O(n^2)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Decode Ways",
                "difficulty": "Medium",
                "description": "A message containing letters from A-Z can be encoded as numbers using the mapping: A = 1, B = 2, ..., Z = 26.",
                "problemExplanation": "Given a string s consisting of digits, determine the total number of ways to decode it.",
                "example_1": {
                    "input": "s = '12'",
                    "output": "2",
                    "explanation": "'12' can be decoded as 'AB' (1 2) or 'L' (12)."
                },
                "example_2": {
                    "input": "s = '226'",
                    "output": "3",
                    "explanation": "'226' can be decoded as 'BBF' (2 2 6), 'BZ' (2 26), or 'VF' (22 6)."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Fibonacci Number",
                "difficulty": "Easy",
                "description": "The Fibonacci numbers are the numbers in the following integer sequence: 0, 1, 1, 2, 3, 5, 8, 13.",
                "problemExplanation": "Given n, calculate the nth Fibonacci number.",
                "example_1": {
                    "input": "n = 2",
                    "output": "1",
                    "explanation": "The 2nd Fibonacci number is 1."
                },
                "example_2": {
                    "input": "n = 5",
                    "output": "5",
                    "explanation": "The 5th Fibonacci number is 5."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Maximum Product Subarray",
                "difficulty": "Medium",
                "description": "Given an integer array, find the contiguous subarray within an array (containing at least one number) which has the largest product.",
                "problemExplanation": "Return the maximum product of the subarray.",
                "example_1": {
                    "input": "nums = [2, 3, -2, 4]",
                    "output": "6",
                    "explanation": "The subarray [2, 3] has the largest product."
                },
                "example_2": {
                    "input": "nums = [-2, 0, -1]",
                    "output": "0",
                    "explanation": "The subarray [0] has the largest product."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Triangular Numbers",
                "difficulty": "Medium",
                "description": "Given an integer n, find the number of triangular numbers less than or equal to n.",
                "problemExplanation": "Triangular numbers are defined as the sum of the natural numbers up to a certain point.",
                "example_1": {
                    "input": "n = 10",
                    "output": "4",
                    "explanation": "The triangular numbers <= 10 are 1, 3, 6, and 10."
                },
                "example_2": {
                    "input": "n = 20",
                    "output": "6",
                    "explanation": "The triangular numbers <= 20 are 1, 3, 6, 10, 15, and 21."
                },
                "complexity": {
                    "timeComplexity": "O(√n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Maximum Length of Repeated Subarray",
                "difficulty": "Medium",
                "description": "Given two integer arrays, find the length of the longest subarray that appears in both arrays.",
                "problemExplanation": "Return the length of the longest common subarray.",
                "example_1": {
                    "input": "A = [1, 2, 3, 2, 1], B = [3, 2, 1, 4, 7]",
                    "output": "3",
                    "explanation": "The longest common subarray is [3, 2, 1]."
                },
                "example_2": {
                    "input": "A = [0, 1, 1, 1, 1], B = [1, 0, 1, 1, 1]",
                    "output": "1",
                    "explanation": "The longest common subarray is [1]."
                },
                "complexity": {
                    "timeComplexity": "O(n * m)",
                    "spaceComplexity": "O(n * m)"
                },
                "link": ""
            },
            {
                "title": "House Robber II",
                "difficulty": "Medium",
                "description": "Similar to House Robber, but now the houses are arranged in a circle.",
                "problemExplanation": "You cannot rob the first and last house together.",
                "example_1": {
                    "input": "nums = [2, 3, 2]",
                    "output": "3",
                    "explanation": "Rob the second house."
                },
                "example_2": {
                    "input": "nums = [1, 2, 3, 1]",
                    "output": "4",
                    "explanation": "Rob houses 1 and 3."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Maximum Sum of Non-Adjacent Elements",
                "difficulty": "Medium",
                "description": "Given an array of integers, find the maximum sum of non-adjacent elements.",
                "problemExplanation": "Return the maximum sum you can get without choosing adjacent elements.",
                "example_1": {
                    "input": "nums = [2, 4, 6, 2, 5]",
                    "output": "11",
                    "explanation": "Rob houses 2 and 5."
                },
                "example_2": {
                    "input": "nums = [1, 2, 3, 1]",
                    "output": "4",
                    "explanation": "Rob houses 1 and 3."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Longest Common Subsequence",
                "difficulty": "Medium",
                "description": "Given two sequences, find the length of their longest common subsequence.",
                "problemExplanation": "Return the length of the longest subsequence that appears in both sequences.",
                "example_1": {
                    "input": "text1 = 'abcde', text2 = 'ace'",
                    "output": "3",
                    "explanation": "The longest common subsequence is 'ace'."
                },
                "example_2": {
                    "input": "text1 = 'abc', text2 = 'abc'",
                    "output": "3",
                    "explanation": "The entire string is the common subsequence."
                },
                "complexity": {
                    "timeComplexity": "O(n * m)",
                    "spaceComplexity": "O(n * m)"
                },
                "link": ""
            },
            {
                "title": "Minimum Cost Climbing Stairs",
                "difficulty": "Easy",
                "description": "Given an array of cost, you can either start from the first or second step, and you want to reach the top with the minimum cost.",
                "problemExplanation": "Calculate the minimum cost to reach the top of the stairs.",
                "example_1": {
                    "input": "cost = [10, 15, 20]",
                    "output": "15",
                    "explanation": "Start at step 1 with cost 15."
                },
                "example_2": {
                    "input": "cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]",
                    "output": "6",
                    "explanation": "Choose steps with minimum costs."
                },
                "complexity": {
                    "timeComplexity": "O(n)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Unique Paths",
                "difficulty": "Medium",
                "description": "Given a grid of size m x n, find the number of unique paths from the top-left corner to the bottom-right corner.",
                "problemExplanation": "You can only move down or right.",
                "example_1": {
                    "input": "m = 3, n = 7",
                    "output": "28",
                    "explanation": "There are 28 unique paths."
                },
                "example_2": {
                    "input": "m = 3, n = 2",
                    "output": "3",
                    "explanation": "There are 3 unique paths."
                },
                "complexity": {
                    "timeComplexity": "O(m * n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Word Break",
                "difficulty": "Medium",
                "description": "Given a string s and a dictionary of strings wordDict, determine if s can be segmented into a space-separated sequence of dictionary words.",
                "problemExplanation": "Return true if the string can be segmented, otherwise false.",
                "example_1": {
                    "input": "s = 'leetcode', wordDict = ['leet', 'code']",
                    "output": "true",
                    "explanation": "'leetcode' can be segmented as 'leet code'."
                },
                "example_2": {
                    "input": "s = 'applepenapple', wordDict = ['apple', 'pen']",
                    "output": "true",
                    "explanation": "'applepenapple' can be segmented as 'apple pen apple'."
                },
                "complexity": {
                    "timeComplexity": "O(n^2)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Partition Equal Subset Sum",
                "difficulty": "Medium",
                "description": "Given a non-empty array, determine if it can be partitioned into two subsets such that the sum of the elements in both subsets is equal.",
                "problemExplanation": "Return true if the array can be partitioned, otherwise false.",
                "example_1": {
                    "input": "nums = [1, 5, 11, 5]",
                    "output": "true",
                    "explanation": "The array can be partitioned into [1, 5, 5] and [11]."
                },
                "example_2": {
                    "input": "nums = [1, 2, 3, 5]",
                    "output": "false",
                    "explanation": "The array cannot be partitioned."
                },
                "complexity": {
                    "timeComplexity": "O(n * sum)",
                    "spaceComplexity": "O(sum)"
                },
                "link": ""
            },
            {
                "title": "Edit Distance",
                "difficulty": "Hard",
                "description": "Given two strings, find the minimum number of operations required to convert one string into the other.",
                "problemExplanation": "Operations can be insertions, deletions, or substitutions.",
                "example_1": {
                    "input": "word1 = 'horse', word2 = 'ros'",
                    "output": "3",
                    "explanation": "horse -> rorse (substitution), rorse -> rose (deletion), rose -> ros (deletion)."
                },
                "example_2": {
                    "input": "word1 = 'intention', word2 = 'execution'",
                    "output": "5",
                    "explanation": "intention -> inention (deletion), inention -> enention (substitution), enention -> exention (substitution), exention -> exection (substitution), exection -> execution (insertion)."
                },
                "complexity": {
                    "timeComplexity": "O(m * n)",
                    "spaceComplexity": "O(m * n)"
                },
                "link": ""
            },
            {
                "title": "Palindromic Substrings",
                "difficulty": "Medium",
                "description": "Given a string, count the number of palindromic substrings in it.",
                "problemExplanation": "Return the count of all palindromic substrings.",
                "example_1": {
                    "input": "s = 'abc'",
                    "output": "3",
                    "explanation": "Substrings: 'a', 'b', 'c'."
                },
                "example_2": {
                    "input": "s = 'aaa'",
                    "output": "6",
                    "explanation": "Substrings: 'a', 'a', 'a', 'aa', 'aa', 'aaa'."
                },
                "complexity": {
                    "timeComplexity": "O(n^2)",
                    "spaceComplexity": "O(1)"
                },
                "link": ""
            },
            {
                "title": "Longest Increasing Subsequence",
                "difficulty": "Medium",
                "description": "Given an integer array, return the length of the longest strictly increasing subsequence.",
                "problemExplanation": "Return the length of the longest increasing subsequence.",
                "example_1": {
                    "input": "nums = [10, 9, 2, 5, 3, 7, 101, 18]",
                    "output": "4",
                    "explanation": "The longest increasing subsequence is [2, 3, 7, 101]."
                },
                "example_2": {
                    "input": "nums = [0, 1, 0, 3, 2, 3]",
                    "output": "4",
                    "explanation": "The longest increasing subsequence is [0, 1, 2, 3]."
                },
                "complexity": {
                    "timeComplexity": "O(n^2)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "Minimum Path Sum",
                "difficulty": "Medium",
                "description": "Given a m x n grid filled with non-negative numbers, find a path from the top left to the bottom right which minimizes the sum of the numbers along its path.",
                "problemExplanation": "Return the minimum sum of a path from top-left to bottom-right.",
                "example_1": {
                    "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
                    "output": "7",
                    "explanation": "The path 1 → 3 → 1 → 2 → 1 has a minimum sum of 7."
                },
                "example_2": {
                    "input": "grid = [[1,2,3],[4,5,6]]",
                    "output": "12",
                    "explanation": "The path 1 → 2 → 3 → 6 has a minimum sum of 12."
                },
                "complexity": {
                    "timeComplexity": "O(m * n)",
                    "spaceComplexity": "O(n)"
                },
                "link": ""
            },
            {
                "title": "N-Queens",
                "difficulty": "Hard",
                "description": "The N-Queens puzzle is the problem of placing N chess queens on an N×N chessboard so that no two queens threaten each other.",
                "problemExplanation": "Return all distinct solutions to the N-Queens puzzle.",
                "example_1": {
                    "input": "n = 4",
                    "output": "[['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]",
                    "explanation": "There are two distinct solutions to place 4 queens."
                },
                "example_2": {
                    "input": "n = 1",
                    "output": "[['Q']]",
                    "explanation": "Only one queen can be placed."
                },
                "complexity": {
                    "timeComplexity": "O(N!)",
                    "spaceComplexity": "O(N)"
                },
                "link": ""
            },
            {
                "title": "Coin Change",
                "difficulty": "Medium",
                "description": "You are given coins of different denominations and a total amount of money. Write a function to compute the fewest number of coins that you need to make up that amount.",
                "problemExplanation": "Return the fewest number of coins needed to make up that amount.",
                "example_1": {
                    "input": "coins = [1, 2, 5], amount = 11",
                    "output": "3",
                    "explanation": "11 = 5 + 5 + 1."
                },
                "example_2": {
                    "input": "coins = [2], amount = 3",
                    "output": "-1",
                    "explanation": "It's not possible to make up the amount."
                },
                "complexity": {
                    "timeComplexity": "O(n * amount)",
                    "spaceComplexity": "O(amount)"
                },
                "link": ""
            }


        ]
    },
    tries: {
        totalProblems: 4,
        problems: [
            {
                title: "Longest String with All Prefixes",
                difficulty: "Medium",
                description: `Ninja developed a love for arrays and strings so this time his teacher gave him an array of strings, ‘A’ of size ‘N’. Each element of this array is a string. The teacher taught Ninja about prefixes in the past, so he wants to test his knowledge.A string is called a complete string if every prefix of this string is also present in the array ‘A’.Ninja is challenged to find the longest complete string in the array ‘A’.If there are multiple strings with the same length, return the lexicographically smallest one and if no string exists, return "None".`,
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "N = 4",
                    output: "A = [ “ab” , “abc” , “a” , “bp” ] ",
                    explanation: ""
                },
                example_2: {
                    input: "arr = ",
                    output: "",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3n3kedU"
            },
            {
                title: "Count Distinct Substrings",
                difficulty: "Hard",
                description: "Given a string 'S', you are supposed to return the number of distinct substrings(including empty substring) of the given string. You should implement the program using a trie.",
                note: "A string ‘B’ is a substring of a string ‘A’ if ‘B’ that can be obtained by deletion of, several characters(possibly none) from the start of ‘A’ and several characters(possibly none) from the end of ‘A’. ",
                problemExplanation: "",
                example_1: {
                    input: "2,sd,sabc ",
                    output: "6,7",
                    explanation: `In the first test case, the 6 distinct substrings are { ‘s’,’ d’, ”sd”, ”ds”, ”sds”, “” }
                    In the second test case, the 7 distinct substrings are {‘a’, ‘b’, ‘c’, “ab”, “bc”, “abc”, “” }.`
                },
                example_2: {
                    input: "2,aa,abab",
                    output: "3, 8",
                    explanation: `In the first test case, the two distinct substrings are {‘a’, “aa”, “” }.In the second test case, the seven distinct substrings are {‘a’, ‘b’, “ab”, “ba”, “aba”, “bab”, “abab”, “” }`
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://bit.ly/3ocRQW0"
            },
            {
                title: "Maximum XOR of Two Numbers in an Array",
                difficulty: "Easy",
                description: "Given two arrays of non-negative integers. FInd the maximum possible value of A XOR B where A and B are elements from the arr1 and arr2 array respectively and XOR represents the Bitwise XOR operation.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "Arr1: 3 10 5 25 2, Arr2: 8 1 2 12 7 ",
                    output: "Maximum XOR value: 30",
                    explanation: "The maximum XOR value is 30, which occurs when XORing 7 and 25."
                },
                example_2: {
                    input: "Arr1:  9, 8, 7, 5, 4, Arr2: 12, 44, 22, 10",
                    output: " Maximum XOR value: 43",
                    explanation: "The maximum XOR value is 43, which occurs when XORing 44 and 7."
                },
                complexity: {
                    timeComplexity: "O(32*N + 32*M) ",
                    spaceComplexity: "O(32N) "
                },
                link: "https://www.codingninjas.com/codestudio/problems/maximum-xor_3119012"
            },
            {
                title: "Maximum Xor Queries | Trie",
                difficulty: "Hard",
                description: "Given an array of non-negative integers and an array of queries where each query is a pair of two non-negative integers ie. [Xi, Ai]., he answer to the ith query is the maximum bitwise XOR value of the Xi with any integer less than or equal to Ai in the array.Return an array consisting of the results of these queries.Note: If all integers are greater than ‘Ai’ in array/ list ‘ARR’ then the answer to this with the query will be - 1.",
                note: "",
                problemExplanation: "",
                example_1: {
                    input: "Given Array: [3, 10, 5, 25, 2, 8], Queries: [(0, 1), (1, 2), (0, 3), (3, 3)] ",
                    output: "[-1, 3, 3, 1]",
                    explanation: ""
                },
                example_2: {
                    input: "Given Array: [4, 6, 7, 10, 12], Queries: 1 5 2 10 5 3 0 7",
                    output: "[7, 14, -1, 7]",
                    explanation: ""
                },
                complexity: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)"
                },
                link: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"
            },
        ]
    },
}

export {
    dsaData
};

