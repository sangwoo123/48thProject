package com.seoul.his.hdm.foreign.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.ApplyHistoryBean;
import com.seoul.his.hdm.foreign.to.CalendarBean;
import com.seoul.his.hdm.foreign.to.DaySchBean;
import com.seoul.his.hdm.foreign.to.TrmtSchdBean;

/**
 * 
 * @Package : com.seoul.his.hdm.foreign.dao 
 * @Class : DoctorDiagnosisDAO.java
 * @Create : 2016. 12. 15. 오후 8:20:08 
 * @Author : 강 현준
 */
public interface DoctorDiagnosisDAO {

	List<CalendarBean> selectCalendarList(String yearMonth);

	List<TrmtSchdBean> selectTrmtSchdList(Map<String, String> queryMap);

	List<ApplyHistoryBean> selectApplyHistoryList(String empNo);
	
	List<DaySchBean> selectDayScheduleList(String empNo);

}
