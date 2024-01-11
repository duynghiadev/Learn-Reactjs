package com.coursera.helpers;

import java.util.Arrays;

public class MinHeap
{
    private int[] Heap;
    private int size;
    private int maxsize;
 
    private static final int ROOT = 0;
 
    public MinHeap(int maxsize)
    {
        this.maxsize = maxsize;
        this.size = 0;
        this.Heap = new int[this.maxsize];
        Arrays.fill(this.Heap, Integer.MAX_VALUE);
    }
 
    private int parent(int pos)
    {
        return (pos - 1) / 2;
    }
 
    private int leftChild(int pos)
    {
        return (2 * pos) + 1;
    }
 
    private int rightChild(int pos)
    {
        return (2 * pos) + 2;
    }
 
    private boolean isLeaf(int pos)
    {
    	if (pos >=  (size / 2)  &&  pos <= size)
        { 
            return true;
        }
        return false;
    }
 
    private void swap(int firstPos, int secondPos)
    {
        int temp;
        temp = this.Heap[firstPos];
        this.Heap[firstPos] = this.Heap[secondPos];
        this.Heap[secondPos] = temp;
    }
 
    private void minHeapify(int pos)
    {
        if (!this.isLeaf(pos))
        { 
            if ( this.Heap[pos] > this.Heap[this.leftChild(pos)]  ||  this.Heap[pos] > this.Heap[this.rightChild(pos)])
            {
                if (this.Heap[this.leftChild(pos)] < this.Heap[this.rightChild(pos)])
                {
                    this.swap(pos, this.leftChild(pos));
                    this.minHeapify(this.leftChild(pos));
                } else
                {
                    this.swap(pos, this.rightChild(pos));
                    this.minHeapify(this.rightChild(pos));
                }
            }
        }
    }
 
    public void insert(int element)
    {
    	this.Heap[this.size++] = element;
        int current = this.size-1;
        
        while (this.Heap[current] < this.Heap[this.parent(current)])
        {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }	
    }
 
    public int remove()
    {
    	int popped = this.Heap[ROOT];
        this.Heap[ROOT] = this.Heap[this.size-1];
        this.Heap[this.size--] = Integer.MAX_VALUE;
        this.minHeapify(ROOT);
        return popped;
    }
    
    public int size() {
    	return this.size;
    }
    
    public int getMin() {
    	return this.Heap[ROOT];
    }
    
    public String print() {
    	return Arrays.toString(this.Heap);
    }
}
