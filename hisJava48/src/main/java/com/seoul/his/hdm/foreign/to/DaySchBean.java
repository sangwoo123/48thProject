package com.seoul.his.hdm.foreign.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package : com.seoul.his.hdm.foreign.to 
 * @Class : DaySchBean.java
 * @Create : 2016. 12. 15. 오후 8:20:52 
 * @Author : 강 현준
 */
@Getter
@Setter
@ToString

@Dataset(name = "dsDaySchedule")
public class DaySchBean extends BaseBean{
   private   String medDate,amRsvCnt,amTotCnt,pmRsvCnt,pmTotCnt;

}