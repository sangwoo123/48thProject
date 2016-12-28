package com.seoul.his.hrs.guntae.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.guntae.to.InoutWorkTimeBean;

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
}





