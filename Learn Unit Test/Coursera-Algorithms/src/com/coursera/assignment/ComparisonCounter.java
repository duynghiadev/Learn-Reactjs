package com.coursera.assignment;

import java.util.Arrays;
import java.util.Random;

public class ComparisonCounter {
	
	private Random myRandom = new Random();
	
	public long numberComparisonFirst(int[] data) {
		int[] temp = Arrays.copyOf(data, data.length);
		long result = this.sortFirst(temp, 0, temp.length);
		return result;
	}
		
	public long numberComparisonLast(int[] data) {
		int[] temp = Arrays.copyOf(data, data.length);
		long result = this.sortLast(temp, 0, temp.length);
		return result;		
	}
	
	public long numberComparisonMiddle(int[] data) {
		int[] temp = Arrays.copyOf(data, data.length);
		long result = this.sortMiddle(temp, 0, temp.length);
		return result;		
	}
	
	public long numberComparisonRandom(int[] data) {
		int[] temp = Arrays.copyOf(data, data.length);
		long result = this.sortRandom(temp, 0, temp.length);
		return result;		
	}
	
	private long sortFirst(int[] data, int begin, int end){
		if (end - begin < 2){
			return 0;
		} else {
			int i = begin+1;
			
			for (int j = begin+1; j < end; j++){
				if (data[begin] > data[j]){
					// swap of values
					this.swap(data, i, j);	
					i++;
				}
			}
			// final swap of the pivot element
			this.swap(data, begin, i-1);
						
			long left = this.sortFirst(data, begin, i-1);
			long right = this.sortFirst(data, i, end);
			return left + right + end - begin - 1; 
		}
	}

	private long sortLast(int[] data, int begin, int end){
		if (end - begin < 2){
			return 0;
		} else {
			
			// swap of values
			this.swap(data, begin, end-1);
			
			int i = begin+1;
						
			for (int j = begin+1; j < end; j++){
				if (data[begin] > data[j]){
					// swap of values
					this.swap(data, i, j);	
					i++;
				}
			}
			// final swap of the pivot element
			this.swap(data, begin, i-1);
						
			long left = this.sortLast(data, begin, i-1);
			long right = this.sortLast(data, i, end);
			return left + right + end - begin - 1; 
		}
	}
	
	private long sortMiddle(int[] data, int begin, int end){
		if (end - begin < 2){
			return 0;
		} else {
			
			int middleIndex = (begin + end - 1)/2;
			int medianIndex = this.medianIndex(data[begin], data[middleIndex], data[end-1], 
												begin, middleIndex, end-1);
			// swap of values
			this.swap(data, begin, medianIndex);
						
			int i = begin+1;
			
			for (int j = begin+1; j < end; j++){
				if (data[begin] > data[j]){
					// swap of values
					this.swap(data, i, j);					
					i++;
				}
			}
			// final swap of the pivot element
			this.swap(data, begin, i-1);	
				
			long left = this.sortMiddle(data, begin, i-1);
			long right = this.sortMiddle(data, i, end);
			return left + right + end - begin - 1; 
		}
	}
	
	private long sortRandom(int[] data, int begin, int end){
		if (end - begin < 2){
			return 0;
		} else {
			
			int randomIndex = begin + this.myRandom.nextInt(end - begin);
			// swap of values
			this.swap(data, begin, randomIndex);
						
			int i = begin+1;
			
			for (int j = begin+1; j < end; j++){
				if (data[begin] > data[j]){
					// swap of values
					this.swap(data, i, j);					
					i++;
				}
			}
			// final swap of the pivot element
			this.swap(data, begin, i-1);	
				
			long left = this.sortMiddle(data, begin, i-1);
			long right = this.sortMiddle(data, i, end);
			return left + right + end - begin - 1; 
		}
	}
	
	private void swap(int[] data, int index1, int index2) {
		if(index1 != index2) {
			// swap of values
			data[index1] = data[index1] + data[index2];
			data[index2] = data[index1] - data[index2];
			data[index1] = data[index1] - data[index2];					
		}
	}
	
	private int medianIndex(int a, int b, int c, int ia, int ib, int ic) {
		if ((a < b && b < c) || (c < b && b < a)) {
			return ib;
		} else if ((a < c && c < b) || (b < c && c < a)) {
			return ic;
		} else if ((c < a && a < b) || (b < a && a < c)){
			return ia;
		} else if (a==b || a==c) {
			return ia;
		} else {
			return ib;
		}		
	}
}
