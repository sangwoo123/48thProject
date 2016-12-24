package com.seoul.his.hrs.guntae.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.guntae.to.InoutWorkTimeBean;
import com.seoul.his.hrs.guntae.to.OverTimeWorkBean;

/**
 * <pre>
 * com.seoul.his.hrs.guntae.applicationService
 *    |_ GuntaeApplicationService.java
 *
 * </pre>
 * @date : 2016. 12. 22. 오후 7:41:38
 * @version :
 * @author : User
 */

public interface GuntaeApplicationService {

	//출퇴근시간 조회
    List<InoutWorkTimeBean> findInoutWorkTimeList(Map<String, String> argsMap);

   //출퇴근시간 일괄처리
    void batchInoutWorkTimeProcess(List<InoutWorkTimeBean> list);

    //시간외근무 조회
    List<OverTimeWorkBean> findOverTimeWorkList(Map<String, String> argsMap);

    //관리자 시간외근무 조회
    List<OverTimeWorkBean> findApproverOverTimeWorkList();

    //시간외근무 일괄처리
    void batchOverTimeWorkProcess(List<OverTimeWorkBean> list);
}





