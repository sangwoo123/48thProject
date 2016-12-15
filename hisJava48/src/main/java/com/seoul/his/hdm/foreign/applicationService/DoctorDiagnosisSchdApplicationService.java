package com.seoul.his.hdm.foreign.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.ApplyHistoryBean;
import com.seoul.his.hdm.foreign.to.CalendarBean;
import com.seoul.his.hdm.foreign.to.DaySchBean;
import com.seoul.his.hdm.foreign.to.TrmtSchdBean;

/**
 * 
 * @Package : com.seoul.his.hdm.foreign.applicationService 
 * @Class : DoctorDiagnosisSchdApplicationService.java
 * @Create : 2016. 12. 15. 오후 8:19:09 
 * @Author : 강 현준
 */
public interface DoctorDiagnosisSchdApplicationService {

	List<CalendarBean> findCalendarList(String yearMonth);

	List<TrmtSchdBean> findTrmtSchdList(Map<String, String> queryMap);

	List<ApplyHistoryBean> findApplyHistoryList(String empNo);
	
	List<DaySchBean> findDayScheduleList(String empNo);
}
