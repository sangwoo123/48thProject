package com.seoul.his.hrs.guntae.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hrs.guntae.applicationService.GuntaeApplicationService;
import com.seoul.his.hrs.guntae.to.InoutWorkTimeBean;

/**
 * <pre>
 * com.seoul.his.hrs.guntae.service
 *    |_ GuntaeServiceFacadeImpl.java
 *
 * </pre>
 * @date : 2016. 12. 22. 오후 7:45:38
 * @version :
 * @author : User
 */

@Service
public class GuntaeServiceFacadeImpl implements GuntaeServiceFacade{

	@Autowired
    GuntaeApplicationService guntaeApplicationService;

	 //출퇴근시간 조회
    @Override
    public List<InoutWorkTimeBean> findInoutWorkTimeList(Map<String, String> argsMap) {
        return guntaeApplicationService.findInoutWorkTimeList(argsMap);
    }

    //출퇴근시간 일괄처리
    @Override
    public void batchInoutWorkTimeProcess(List<InoutWorkTimeBean> list) {
    	guntaeApplicationService.batchInoutWorkTimeProcess(list);

    }
}





