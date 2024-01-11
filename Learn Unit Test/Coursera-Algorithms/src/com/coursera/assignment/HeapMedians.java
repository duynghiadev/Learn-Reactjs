package com.coursera.assignment;

import com.coursera.helpers.MaxHeap;
import com.coursera.helpers.MinHeap;

public class HeapMedians {
	
	private MaxHeap smallHeap;
	private MinHeap bigHeap;
	
	public HeapMedians(int sizeOfData) {
		this.smallHeap = new MaxHeap((sizeOfData /2) + 2);
		this.bigHeap = new MinHeap((sizeOfData / 2) + 2);
	}
	
	public int sumOfMedians(int[] data) {		
		int result = 0;
		
		// first iteration to fill small heap
		this.smallHeap.insert(data[0]);		
		result += this.smallHeap.getMax();
		result %= 10000;		
		
		// all other iterations one by one
		for (int i = 1; i < data.length; i++) {			
			if (data[i] > this.smallHeap.getMax()) {
				this.bigHeap.insert(data[i]);
			} else {
				this.smallHeap.insert(data[i]);
			}
			
			if (this.bigHeap.size() > this.smallHeap.size()) {
				this.smallHeap.insert(this.bigHeap.remove());
			} else if (this.smallHeap.size() - this.bigHeap.size() > 1) {
				this.bigHeap.insert(this.smallHeap.remove());
			}
			
			result += this.smallHeap.getMax();
			result %= 10000;
		}
		
		return result;
	}	
}
