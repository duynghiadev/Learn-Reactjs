package com.coursera.assignment;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DijkstraShortPath {
	
	private List<List<int[]>> graph;
	private int numberOfNodes;
	private int[] shortestDistances;
	boolean[] visitedNodes;
	
	public DijkstraShortPath(List<List<int[]>> graph, int numberOfNodes) {
		this.graph = graph;
		this.numberOfNodes = numberOfNodes;
		this.shortestDistances = new int[numberOfNodes];
		this.visitedNodes = new boolean[numberOfNodes];
		Arrays.fill(this.shortestDistances, 1000000);
		Arrays.fill(this.visitedNodes, false);
	}
	
	public int[] dijkstraShortestPath(int sourceNode) {
		int[] result = new int[10];
		this.graph = this.convertToGoodForm(graph);
		List<Integer> processedNodes = new ArrayList<Integer>();
		processedNodes.add(new Integer(sourceNode));
		this.shortestDistances[sourceNode - 1] = 0;
		int currentTale = sourceNode;
		this.visitedNodes[currentTale - 1] = true;
		
		while (processedNodes.size() < this.numberOfNodes) {
			int minDistance = 1000000;
			int minNode = -1;
			for (int i = 0; i < processedNodes.size(); i++) {
				currentTale = processedNodes.get(i);
				for (int j = 0; j < this.graph.get(currentTale - 1).size(); j++) {
					int[] currentHead = this.graph.get(currentTale - 1).get(j);
					if (!this.visitedNodes[currentHead[0] - 1]) {
						if (this.shortestDistances[currentTale - 1] + currentHead[1] < minDistance) {
							minDistance = this.shortestDistances[currentTale - 1] + currentHead[1];
							minNode = currentHead[0];
						}
					}
				}			
			}
			if (minNode > -1) {
				processedNodes.add(new Integer(minNode));
				this.visitedNodes[minNode - 1] = true;
				this.shortestDistances[minNode - 1] = minDistance;
			}
		}
		
		// fill the answer with the needed nodes
		result[0] = this.shortestDistances[6];
		result[1] = this.shortestDistances[36];
		result[2] = this.shortestDistances[58];
		result[3] = this.shortestDistances[81];
		result[4] = this.shortestDistances[98];
		result[5] = this.shortestDistances[114];
		result[6] = this.shortestDistances[132];
		result[7] = this.shortestDistances[164];
		result[8] = this.shortestDistances[187];
		result[9] = this.shortestDistances[196];
		
		return result;
	}
	
	
	
	// prepares graph so it will be easier to use it
	private List<List<int[]>> convertToGoodForm(List<List<int[]>> graph) {
		List<List<int[]>> result = new ArrayList<>();
		for (int i = 0; i < this.numberOfNodes; i++) {
			result.add(new ArrayList<int[]>());
		}
		
		for (int i = 0; i < graph.size(); i++) {
			for (int j = 1; j < graph.get(i).size(); j++) {
				result.get(graph.get(i).get(0)[0]-1).add(graph.get(i).get(j));
			}
		}
				
		return result;
	}
	
}
