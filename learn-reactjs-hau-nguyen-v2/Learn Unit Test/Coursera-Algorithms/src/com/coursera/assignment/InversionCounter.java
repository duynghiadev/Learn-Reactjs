package com.coursera.assignment;

import java.util.Arrays;

public class InversionCounter {

	// number of inversions = number of pairs of indices (i,j)
	// of array A with i<j and A[i] > A[j]
	public long numberInversions(int[] data) {
		// base of recursion
		if (data.length == 1) {
			return 0;
		} else // division on smaller parts
		{
			int[] left = Arrays.copyOfRange(data, 0, data.length / 2);
			int[] right = Arrays.copyOfRange(data, data.length / 2, data.length);

			long leftInversions = this.numberInversions(left); // recursive call
			long rightInversions = this.numberInversions(right); // recursive call

			Arrays.sort(left);
			Arrays.sort(right);
			long splitInversions = this.mergeCount(left, right);

			return leftInversions + rightInversions + splitInversions;
		}
	}

	// function that calculates split inversions
	private long mergeCount(int[] left, int[] right) {
		int idxLeft = 0;
		int idxRight = 0;
		long result = 0;

		// basic merge subroutine (adapted)
		while (idxLeft < left.length && idxRight < right.length) {
			if (left[idxLeft] <= right[idxRight]) {
				idxLeft++;
			} else {
				idxRight++;
				// if there are smaller elements in the right part
				// so all elements that left on the left part are inversions
				result += left.length - idxLeft;
			}
		}
		return result;
	}
}
