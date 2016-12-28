package com.seoul.his.hrs.guntae.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.guntae.to.HdayBean;
import com.seoul.his.hrs.guntae.to.HolidayBean;
import com.seoul.his.hrs.guntae.to.InoutWorkTimeBean;
import com.seoul.his.hrs.guntae.to.OverTimeWorkBean;
import com.seoul.his.hrs.guntae.to.YeonchaBean;

/**
 * <pre>
 * com.seoul.his.hrs.guntae.service
 *    |_ GuntaeServiceFacade.java
 *
 * </pre>
 * @date : 2016. 12. 22. 오후 7:44:01
 * @version :
 * @author : User
 */

public interface GuntaeServiceFacade {

	//출퇴근시간 조회
    List<InoutWorkTimeBean> findInoutWorkTimeList(Map<String, String> argsMap);

   //출퇴근시간 일괄처리
    void batchInoutWorkTimeProcess(List<InoutWorkTimeBean> list);

   //개인 시간외근무 조회
    List<OverTimeWorkBean> findOverTimeWorkList(Map<String, String> argsMap);

    //관리자 시간외근무 조회
    List<OverTimeWorkBean> findApproverOverTimeWorkList();

    //시간외근무 일괄처리
    void batchOverTimeWorkProcess(List<OverTimeWorkBean> list) ;

	List<HdayBean> findHdayList(Map<String, String> argsMap);

	List<HolidayBean> findHolidayList(Map<String, String> argsMap);

	List<YeonchaBean> findYeonchaList(Map<String, String> argsMap);


	void batchHdayProcess(List<HdayBean> list);

	List<HolidayBean> findAdminHolidayList(Map<String, String> argsMap);

	List<YeonchaBean> callYeoncha(Map<String, String> argsMap);


	void batchHolidayProcess(List<HolidayBean> list);


}





