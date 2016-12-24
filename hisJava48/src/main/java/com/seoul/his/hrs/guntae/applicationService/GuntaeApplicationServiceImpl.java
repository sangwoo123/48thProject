package com.seoul.his.hrs.guntae.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hrs.guntae.dao.InoutWorkTimeDAO;
import com.seoul.his.hrs.guntae.dao.OverTimeWorkDAO;
import com.seoul.his.hrs.guntae.to.InoutWorkTimeBean;
import com.seoul.his.hrs.guntae.to.OverTimeWorkBean;

/**
 * <pre>
 * com.seoul.his.hrs.guntae.applicationService
 *    |_ GuntaeApplicationServiceImpl.java
 *
 * </pre>
 * @date : 2016. 12. 22. 오후 7:42:24
 * @version :
 * @author : User
 */
@Service
public class GuntaeApplicationServiceImpl implements GuntaeApplicationService{

	@Autowired
    InoutWorkTimeDAO inoutWorkTimeDAO;
	@Autowired
	OverTimeWorkDAO overTimeWorkDAO;

	 //출퇴근시간 조회
    @Override
    public List<InoutWorkTimeBean> findInoutWorkTimeList(Map<String, String> argsMap) {
        return inoutWorkTimeDAO.selectInoutWorkTimeList(argsMap);
    }

    //출퇴근시간 일괄처리
    @Override
    public void batchInoutWorkTimeProcess(List<InoutWorkTimeBean> list) {

        for(InoutWorkTimeBean inoutWorkTimeBean : list){

            switch(inoutWorkTimeBean.getStatus()){

            case "inserted" : inoutWorkTimeDAO.insertInoutWorkTime(inoutWorkTimeBean);break;
            case "updated" : inoutWorkTimeDAO.updateInoutWorkTime(inoutWorkTimeBean);break;

            }

        }
    }

    //개인 시간외근무 조회
    @Override
    public List<OverTimeWorkBean> findOverTimeWorkList(Map<String, String> argsMap) {
        return overTimeWorkDAO.selectOverTimeWorkList(argsMap);
    }

    //관리자 시간외근무 조회
    @Override
    public List<OverTimeWorkBean> findApproverOverTimeWorkList() {
        return overTimeWorkDAO.selectApproverOverTimeWorkList();
    }

    //시간외근무 일괄처리
    @Override
    public void batchOverTimeWorkProcess(List<OverTimeWorkBean> list) {
        System.out.println("시간외근무 일괄처리 AS");
        for(OverTimeWorkBean overTimeWorkbean : list){

            switch(overTimeWorkbean.getStatus()){

            case "inserted" : overTimeWorkDAO.insertOverTimeWork(overTimeWorkbean);break;
            case "updated" : overTimeWorkDAO.updateOverTimeWork(overTimeWorkbean);
                            if(overTimeWorkbean.getBeforeOvertimeNo() != null || overTimeWorkbean.getBeforeOvertimeNo() != ""){
                                overTimeWorkDAO.deleteBeforeOverTimeWork(overTimeWorkbean);
                            }break;
            case "deleted" : overTimeWorkDAO.deleteOverTimeWork(overTimeWorkbean);break;

            }

        }

    }
}





