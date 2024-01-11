package com.coursera.assignment;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class MinCutCounter {
	
	private Random myRandom = new Random();
	
	public int minCut(List<int[]> data) {
		int minCut = this.minCutIteration(data);
		int tempCut = minCut;
		for (int i = 0; i < 500; i++) {
			tempCut = this.minCutIteration(data);
			if (tempCut < minCut) {
				minCut = tempCut;
			}
		}
		return minCut;
	}
	
	private int minCutIteration(List<int[]> data) {
		if (data.size() == 2) {
			return data.get(0).length-1;
		} else {
			return minCutIteration(randomContraction(data));
		}
	}
	
	private List<int[]> randomContraction(List<int[]> data){
		
		int randRow = myRandom.nextInt(data.size());
		int randIndex = myRandom.nextInt(data.get(randRow).length);
		int baseElement = data.get(randRow)[0];
		int randElement = data.get(randRow)[randIndex];
		
		List<int[]> result = new ArrayList<int[]>();
		
		for (int i = 0; i < data.size(); i++) {
			if (data.get(i)[0] == randElement) {
				List<Integer> tempList = new ArrayList<Integer>();
				tempList.add(new Integer(randElement));
				for (int j = 1; j < data.get(i).length; j++) {
					if (data.get(i)[j] != randElement && data.get(i)[j] != baseElement) {
						tempList.add(new Integer(data.get(i)[j]));
					}
				}
				for (int j = 1; j < data.get(randRow).length; j++) {
					if (data.get(randRow)[j] != randElement && data.get(randRow)[j] != baseElement) {
						tempList.add(new Integer(data.get(randRow)[j]));
					}
				}
				int[] tempArray = new int[tempList.size()];
				for (int j = 0; j < tempArray.length; j++){
					tempArray[j] = tempList.get(j).intValue();
				}
				result.add(tempArray);
			} else if (i != randRow) {
				List<Integer> tempList = new ArrayList<Integer>();
				tempList.add(new Integer(data.get(i)[0]));
				for (int j = 1; j < data.get(i).length; j++) {
					if (data.get(i)[j] == baseElement) {
						tempList.add(new Integer(randElement));
					} else if (data.get(i)[j] != data.get(i)[0]){
						tempList.add(new Integer(data.get(i)[j]));
					}
				}
				int[] tempArray = new int[tempList.size()];
				for (int j = 0; j < tempArray.length; j++){
					tempArray[j] = tempList.get(j).intValue();
				}
				result.add(tempArray);
			}
		}
		
		return result;
	}
}
