package com.seoul.his.hdm.foreign.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



/**
 * 
 * @Package : com.seoul.his.hdm.foreign.to 
 * @Class : CalendarBean.java
 * @Create : 2016. 12. 15. 오후 8:20:49 
 * @Author : 강 현준
 */
@Getter
@Setter
@ToString
@Dataset(name="dsCalendar")
public class CalendarBean extends BaseBean{
	private String sun   ; //일
	private String mon   ; //월
	private String thu   ; //화
	private String wed   ; //수
	private String thurs ; //목
	private String fri   ; //금
	private String sat   ; //토

}
