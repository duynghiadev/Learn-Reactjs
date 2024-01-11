package com.coursera.assignment;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

public class MyFileReader {

	private String path;
	private int length;
	private List<Integer> contentNumList;
	private List<BigInteger> contentLongNumList;
	private int[] contentNumArray;
	private long[] contentLongNumArray;
	private List<int[]> contentLineList;
	private List<List<int[]>> contentArrayList;
	
	public static enum DataType {LINE, NUMBER, ARRAY, BIGNUMBER}

	public MyFileReader(String fileName, DataType type) {
		this.path = "./resources/" + fileName;
		if (type == DataType.NUMBER){
			this.contentNumList = this.readNumFile();
			this.contentNumArray = this.convertToNumArray();
		} else if (type == DataType.LINE) {
			this.contentLineList = this.readLineFile();
		} else if (type == DataType.ARRAY){
			this.contentArrayList = this.readArrayListFile();
		} else {
			this.contentLongNumList = this.readBigNumFile();
			this.contentLongNumArray = this.convertToLongNumArray();
		}
	}

	public int getLength() {
		return this.length;
	}

	public int[] getContentNumArray() {
		return this.contentNumArray;
	}
	
	public long[] getContentLongNumArray() {
		return this.contentLongNumArray;
	}

	public List<Integer> getContenNumtList() {
		return this.contentNumList;
	}

	public List<int[]> getContenLineList() {
		return this.contentLineList;
	}
	
	public List<List<int[]>> getContentArrayList() {
		return this.contentArrayList;
	}

	public String getPath() {
		return this.path;
	}

	// reading data (line = one number) from the file
	// list - because I do not know the length of the file
	private List<Integer> readNumFile() {
		List<Integer> result = new ArrayList<Integer>();
		this.length = 0;

		// This will reference one line at a time
		String line = null;

		try {
			// FileReader reads text files in the default encoding.
			FileReader fileReader = new FileReader(this.path);

			// Wrap FileReader in BufferedReader.
			BufferedReader bufferedReader = new BufferedReader(fileReader);

			while ((line = bufferedReader.readLine()) != null) {
				try {
					result.add(new Integer(line));
					this.length++;
				} catch (NumberFormatException e) {
					System.out.println("'" + line + "' - does not have correct format");
					return null;
				}
			}

			// Always close files.
			bufferedReader.close();
		} catch (FileNotFoundException ex) {
			System.out.println("Unable to open file '" + this.path + "'");
		} catch (IOException ex) {
			System.out.println("Error reading file '" + this.path + "'");
		}

		return result;
	}

	
	// reading data (line = one really big number) from the file
	// list - because I do not know the length of the file
	private List<BigInteger> readBigNumFile() {
		List<BigInteger> result = new ArrayList<BigInteger>();
		this.length = 0;

		// This will reference one line at a time
		String line = null;

		try {
			// FileReader reads text files in the default encoding.
			FileReader fileReader = new FileReader(this.path);

			// Wrap FileReader in BufferedReader.
			BufferedReader bufferedReader = new BufferedReader(fileReader);

			while ((line = bufferedReader.readLine()) != null) {
				try {
					result.add(new BigInteger(line));
					this.length++;
				} catch (NumberFormatException e) {
					System.out.println("'" + line + "' - does not have correct format");
					return null;
				}
			}

			// Always close files.
			bufferedReader.close();
		} catch (FileNotFoundException ex) {
			System.out.println("Unable to open file '" + this.path + "'");
		} catch (IOException ex) {
			System.out.println("Error reading file '" + this.path + "'");
		}

		return result;
	}
		
		
	// reading data (line = several numbers) from the file
	// list - because I do not know the length of the file
	private List<int[]> readLineFile() {
		List<int[]> result = new ArrayList<int[]>();
		this.length = 0;

		// This will reference one line at a time
		String line = null;

		try {
			// FileReader reads text files in the default encoding.
			FileReader fileReader = new FileReader(this.path);

			// Wrap FileReader in BufferedReader.
			BufferedReader bufferedReader = new BufferedReader(fileReader);

			while ((line = bufferedReader.readLine()) != null) {
				result.add(this.lineToArray(line));
				this.length++;				
			}

			// Always close files.
			bufferedReader.close();
		} catch (FileNotFoundException ex) {
			System.out.println("Unable to open file '" + this.path + "'");
		} catch (IOException ex) {
			System.out.println("Error reading file '" + this.path + "'");
		}

		return result;
	}
	
	
	// reading data (line = several arrays of dimension 2) from the file
	// list - because I do not know the length of the file
	private List<List<int[]>> readArrayListFile() {
		List<List<int[]>> result = new ArrayList<List<int[]>>();
		this.length = 0;

		// This will reference one line at a time
		String line = null;
		
		try {
			// FileReader reads text files in the default encoding.
			FileReader fileReader = new FileReader(this.path);

			// Wrap FileReader in BufferedReader.
			BufferedReader bufferedReader = new BufferedReader(fileReader);

			while ((line = bufferedReader.readLine()) != null) {
				result.add(this.lineToArrayLine(line));
				this.length++;				
			}

			// Always close files.
			bufferedReader.close();
		} catch (FileNotFoundException ex) {
			System.out.println("Unable to open file '" + this.path + "'");
		} catch (IOException ex) {
			System.out.println("Error reading file '" + this.path + "'");
		}

		return result;
	}
	
	
	// converting to array of numbers 
	// because arrays are more optimized and faster
	private int[] convertToNumArray() {
		List<Integer> list = this.contentNumList;
		int[] array = new int[list.size()];

		for (int i = 0; i < list.size(); i++) {
			array[i] = list.get(i).intValue();
		}
		return array;
	}
	
	private long[] convertToLongNumArray() {
		List<BigInteger> list = this.contentLongNumList;
		long[] array = new long[list.size()];

		for (int i = 0; i < list.size(); i++) {
			array[i] = list.get(i).longValue();
		}
		return array;
	}
		
	private int[] lineToArray(String line){
		line = line + " ";
		int[] result = new int[this.numOfNumbers(line)];
		int currentNumIdx = 0;
		int currentNum = 0;
		
		for (int i = 0; i < line.length()-1; i++){
			if (Character.isDigit(line.charAt(i))){
				int digit = Integer.parseInt(String.valueOf(line.charAt(i)));
				currentNum = currentNum*10 + digit;
				if (Character.isWhitespace(line.charAt(i+1))){
					result[currentNumIdx] = currentNum;
					currentNum = 0;
					currentNumIdx++;
				}						
			}	
		}
		
		return result;
	}
	
	private List<int[]> lineToArrayLine(String line) {
		line = line + " ";
		List<int[]> result = new ArrayList<int[]>();
		int currentNum = 0;
		boolean addedLabelFlag = false;
		int [] tempArray = new int[2];
		
		for (int i = 0; i < line.length()-1; i++){
			if (!addedLabelFlag) {
				if (Character.isDigit(line.charAt(i))){
					int digit = Integer.parseInt(String.valueOf(line.charAt(i)));
					currentNum = currentNum*10 + digit;
					if (Character.isWhitespace(line.charAt(i+1))){
						result.add(new int[]{currentNum});
						currentNum = 0;
						addedLabelFlag = true;
					}
				}						
			} else {
				if (Character.isDigit(line.charAt(i))){
					int digit = Integer.parseInt(String.valueOf(line.charAt(i)));
					currentNum = currentNum*10 + digit;
					if (Character.isWhitespace(line.charAt(i+1))){
						tempArray[1] = currentNum;
						currentNum = 0;
						result.add(tempArray.clone());
					}						
				} else if (!Character.isWhitespace(line.charAt(i))) {
					tempArray[0] = currentNum;
					currentNum = 0;
				}
			}
		}
		return result;
	}
	
	private int numOfNumbers(String line){
		int result = 0;
		
		for (int i = 0; i < line.length()-1; i++){
			if (Character.isDigit(line.charAt(i)) && 
					Character.isWhitespace(line.charAt(i+1))){
				result++;
			}
		}
		if (!Character.isWhitespace(line.charAt(line.length()-1))){
			result++;
		}
		return result;
	}

}
