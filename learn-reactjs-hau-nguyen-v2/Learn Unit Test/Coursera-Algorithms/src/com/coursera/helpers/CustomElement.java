package com.coursera.helpers;

public class CustomElement {

	private long key;
	private boolean value;
	
	public CustomElement(long key, boolean value) {
		this.key = key;
		this.value = value;
	}
	
	public long getKey() {
		return this.key;
	}
	
	public boolean getValue() {
		return this.value;
	}
}
