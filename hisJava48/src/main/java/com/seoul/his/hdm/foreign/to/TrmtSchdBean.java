package com.seoul.his.hdm.foreign.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name="dsTrmtSchd")
public class TrmtSchdBean extends BaseBean{
	private String dayOfWeek ; //요일
	private String empNo     ; //사원번호
	private String trmtTypeNo; //진료타입번호
	private String amHandle  ; //오전시작
	private String fmHandle  ; //오후시작
	private String doctCtRe  ; //의사휴진사유
	private String time      ; //시간
	private String reser     ; //
	private String day;        //일자




}
