package com.coursera.helpers;

import java.util.ArrayList;
import java.util.List;

public class CustomListElement {
	
	private List<CustomElement> list;
	
	public CustomListElement(long key, boolean value) {
		this.list = new ArrayList<>();
		this.list.add(new CustomElement(key, value));
	}
	
	public  boolean findKey(long key) {
		for (int i = 0; i < this.list.size(); i++) {
			if (this.list.get(i).getKey() == key) {
				return true;
			}
		}
		return false;
	}
	
	public boolean getValue(long key) {
		for (int i = 0; i < this.list.size(); i++) {
			if (this.list.get(i).getKey() == key) {
				return this.list.get(i).getValue();
			}
		}
		return false;
	}
	
	public boolean put(long key, boolean value) {
		boolean keyFound = false;
		for (int i = 0; i < this.list.size() && !keyFound; i++) {
			if (this.list.get(i).getKey() == key) {
				keyFound =  true;
				this.list.remove(i);
			}
		}
		this.list.add(new CustomElement(key, value));
		return !keyFound;
	}
	
	public void delete(long key) {
		boolean keyFound = false;
		for (int i = 0; i < this.list.size() && !keyFound; i++) {
			if (this.list.get(i).getKey() == key) {
				keyFound =  true;
				this.list.remove(i);
			}
		}
	}
	
	public int size() {
		return this.list.size();
	}
}
