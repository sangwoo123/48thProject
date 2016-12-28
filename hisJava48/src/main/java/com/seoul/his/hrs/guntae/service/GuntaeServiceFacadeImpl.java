package com.seoul.his.hrs.guntae.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hrs.guntae.applicationService.GuntaeApplicationService;
import com.seoul.his.hrs.guntae.to.HdayBean;
import com.seoul.his.hrs.guntae.to.HolidayBean;
import com.seoul.his.hrs.guntae.to.InoutWorkTimeBean;
import com.seoul.his.hrs.guntae.to.OverTimeWorkBean;
import com.seoul.his.hrs.guntae.to.YeonchaBean;

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

    //개인 시간외근무 조회
    @Override
    public List<OverTimeWorkBean> findOverTimeWorkList(Map<String, String> argsMap) {
        return guntaeApplicationService.findOverTimeWorkList(argsMap);
    }

    //관리자 시간외근무 조회
    @Override
    public List<OverTimeWorkBean> findApproverOverTimeWorkList() {
        return guntaeApplicationService.findApproverOverTimeWorkList();
    }

    //시간외근무 일괄처리
    @Override
    public void batchOverTimeWorkProcess(List<OverTimeWorkBean> list) {
    	guntaeApplicationService.batchOverTimeWorkProcess(list);
    }

	@Override
	public List<HdayBean> findHdayList(Map<String, String> argsMap) {
		return null;
	}

	@Override
	public List<HolidayBean> findHolidayList(Map<String, String> argsMap) {
		return null;
	}

	@Override
	public List<YeonchaBean> findYeonchaList(Map<String, String> argsMap) {
		return null;
	}

	@Override
	public void batchHdayProcess(List<HdayBean> list) {
	}

	@Override
	public List<HolidayBean> findAdminHolidayList(Map<String, String> argsMap) {
		return null;
	}

	@Override
	public List<YeonchaBean> callYeoncha(Map<String, String> argsMap) {
		return null;
	}

	@Override
	public void batchHolidayProcess(List<HolidayBean> list) {
	}
}





