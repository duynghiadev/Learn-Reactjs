package com.coursera.assignment;
import java.util.Hashtable;

import java.util.Arrays;

import com.coursera.helpers.CustomHashTable;
import com.coursera.helpers.CustomListHashTable;

public class SumCounter {
	
	public int numberSums(long[] data, int[] interval) {
		
		// Build-in hashtable of java.util
		// Hashtable hashtable = new Hashtable(2*data.length);
		 
		// My custom hash table with "OPEN ADRESSING" approach 
		// CustomHashTable hashtable = new CustomHashTable(data.length);
		
		// My custom hash table with "SEPARATE CHAINING" approach 
		CustomListHashTable hashtable = new CustomListHashTable(data.length);
		
		// logs to see the performance of the HT and the process of solving the problem
		// System.out.println("Elements in the input array: " + data.length);
		for (int i = 0; i < data.length; i++) {
			hashtable.put(data[i], true);
		}
		System.out.println("Size of the hash-table: " + hashtable.size());
		
		int result = 0;
		
		for(int t = interval[0]; t <= interval[1]; t++) {
			if (t%100 == 0) {
				System.out.println("Checking for " + t);
			}
			boolean discovered = false;
			for(int j = 0; j < data.length && !discovered; j++) {
				if (hashtable.containsKey(t - data[j]) && (t != 2*data[j])) {
					//System.out.println(data[j] + "+ ? = " + t);
					result++;
					discovered = true;
				}
			}
		}
		
		return result;
	}

}
