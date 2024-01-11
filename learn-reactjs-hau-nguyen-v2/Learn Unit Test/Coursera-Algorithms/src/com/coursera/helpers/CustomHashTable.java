package com.coursera.helpers;

// Hash Table with "OPEN ADRESSING" approach
// Hashing the data until the bucket of the array will not be empty 
public class CustomHashTable {
	
	private CustomElement[] table;
	private int size;
	private int maxSize;
	private int[] SHIFT_HELPER = {2, 3, 5, 7, 11, 13, 17, 19, 23, 27, 29, 31, 37, 43, 47}; 
	
	public CustomHashTable(int maxSize) {
		this.maxSize = 2*maxSize;
		this.table = new CustomElement[2*maxSize];
		this.size = 0;
	};
	
	public int size() {
		return this.size;
	}
	
	public int maxSize() {
		return this.maxSize/2;
	}
	
	public void put(long element, boolean value) {
		if (this.size < this.maxSize) {
			int hash = this.hashFunction(element);
			if (this.table[hash] == null) {
				this.size++;
				this.table[hash] = new CustomElement(element, value); 
			} else {
				int shift = this.hashShift(element);
				while(this.table[hash] != null && this.table[hash].getKey() != element) {
					if ((hash + shift) % (this.maxSize - 1) < 0) {
		        		hash = -(hash + shift) % (this.maxSize - 1);
		        	} else {
		        		hash = (hash + shift) % (this.maxSize - 1);
		        	}
				}
				if (this.table[hash] == null) {
					this.size++;
					this.table[hash] = new CustomElement(element, value); 
				}
			}
		} else {
			System.out.println("Sorry, but Hash Table is full!");
		}
	}
	
	public void delete(int element) {
		int hash = this.hashFunction(element);
		int shift = this.hashShift(element);
		
        while (this.table[hash] != null && this.table[hash].getKey() != element) {
        	if ((hash + shift) % (this.maxSize - 1) < 0) {
        		hash = -(hash + shift) % (this.maxSize - 1);
        	} else {
        		hash = (hash + shift) % (this.maxSize - 1);
        	}
        }
        
        if (this.table[hash] != null) {
        	this.table[hash] = null;
        }
	}
	
	public boolean containsKey(long element) {
		int hash = this.hashFunction(element);
		int shift = this.hashShift(element);
		
        while (this.table[hash] != null && this.table[hash].getKey() != element) {
        	if ((hash + shift) % (this.maxSize - 1) < 0) {
        		hash = -(hash + shift) % (this.maxSize - 1);
        	} else {
        		hash = (hash + shift) % (this.maxSize - 1);
        	}
        	
        }
        
        if (this.table[hash] == null) {
        	return false;
        } else {
        	return true;
        }
	}
	
	private int hashFunction(long element) {
		int result = (int) (element % (this.maxSize - 1));
		if (result < 0) {
			result *= -1;
		}
		return result;
	}
	
	private int hashShift(long element) {
		int result = (int) (element % (this.SHIFT_HELPER.length));
		if (result < 0) {
			result *= -1;
		}
		return this.SHIFT_HELPER[result];
	}
}
