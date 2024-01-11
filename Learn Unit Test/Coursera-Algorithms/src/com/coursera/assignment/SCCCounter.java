package com.coursera.assignment;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SCCCounter {
	
	private List<int[]> graph;
	private int t;
	private int componentSize;
	private int[] components;
	private boolean[] visitedNodes;
	private int[] finishingTimes;
	int numberOfNodes;
	
	public SCCCounter(List<int[]> graph, int numberOfNodes) {
		this.graph = graph;
		this.numberOfNodes = numberOfNodes;
		this.t = 0;
		this.componentSize = 0;	
		this.finishingTimes = new int[numberOfNodes];
		this.components = new int[] {0,0,0,0,0};
		
		this.visitedNodes = new boolean[numberOfNodes];
		Arrays.fill(this.visitedNodes, false);
	}
	
	public int[] fiveLargestSCC() {		
		List<List<Integer>> backwardOrder = this.formatGraph(this.graph, this.numberOfNodes, false);
		List<List<Integer>> directOrder = this.formatGraph(this.graph, this.numberOfNodes, true);
		int[] labels = new int[numberOfNodes];
		this.finishingTimes = new int[numberOfNodes];
		for(int i = 0; i < numberOfNodes; i++) {
			labels[i] = i+1;
		}
		
		DFS_loop(backwardOrder, labels);
		Arrays.fill(this.visitedNodes, false);
		labels = this.finishingTimes.clone();
		this.components = new int[] {0,0,0,0,0};
		
		DFS_loop(directOrder, labels);
		return this.components;
	}
	
	private void DFS_loop(List<List<Integer>> graph, int[] nodes) {
		this.t = 0;
		
		for (int i = nodes.length-1; i >= 0; i--) {
			if (!this.visitedNodes[nodes[i]-1]) {
				DFS(graph, nodes[i]-1);
			}
			//saving component size:
			this.components = this.saveComponentSize(this.components, this.componentSize);
			this.componentSize = 0;
		}
		
	}
	
	private void DFS(List<List<Integer>> graph, int node) {
		this.visitedNodes[node] = true;
		this.componentSize++;
		for (int i=0; i<graph.get(node).size(); i++){
			if(!this.visitedNodes[graph.get(node).get(i)-1]) {
				DFS(graph, graph.get(node).get(i)-1);
			}
		}
		this.finishingTimes[t] = node+1;
		this.t++;	
	}
	
	private int[] saveComponentSize(int[] array, int value) {
		int [] result = {0,0,0,0,0};
		boolean inserted = false;
		for (int i = 0; i < result.length; i++) {
			if (!inserted) {
				if (array[i] > value) {
					result[i] = array[i];
				} else {
					result[i] = value;
					inserted = true;
				}
			} else {
				result[i] = array[i-1];
			}
		}
		return result;
	}
	
	private List<List<Integer>> formatGraph(List<int[]> graph, int numberOfNodes, boolean directOrder) {
		List<List<Integer>> result = new ArrayList<List<Integer>>();
		for (int n = 0; n < numberOfNodes; n++) {
			result.add(new ArrayList<Integer>());
		}
		if (directOrder) {
			for (int i=0; i<graph.size(); i++){
				result.get(graph.get(i)[0]-1).add(new Integer(graph.get(i)[1]));
			}
		} else {
			for (int i=0; i<graph.size(); i++){
				result.get(graph.get(i)[1]-1).add(new Integer(graph.get(i)[0]));
			}
		}
		return result;
	}
	
}
