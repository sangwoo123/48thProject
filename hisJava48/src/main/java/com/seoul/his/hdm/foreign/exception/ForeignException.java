package com.seoul.his.hdm.foreign.exception;

/**
 * 
 * @Package : com.seoul.his.hdm.foreign.exception 
 * @Class : ForeignException.java
 * @Create : 2016. 12. 15. 오후 8:20:29 
 * @Author : 강 현준
 */
@SuppressWarnings("serial")
public class ForeignException extends Exception{
	public ForeignException(String errorMsg){
		super(errorMsg);
	}
}
