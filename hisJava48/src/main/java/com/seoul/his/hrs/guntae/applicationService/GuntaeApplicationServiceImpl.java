package com.seoul.his.hrs.guntae.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hrs.guntae.dao.InoutWorkTimeDAO;
import com.seoul.his.hrs.guntae.to.InoutWorkTimeBean;

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
}





