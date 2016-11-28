package com.seoul.his.log.ctrt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.seoul.his.log.ctrt.applicationService.CtrtApplicationService;
import com.seoul.his.log.ctrt.dao.CtrtDAO;
import com.seoul.his.log.ctrt.to.CtrtBean;

@Service
public class CtrtApplicationServiceImpl implements CtrtApplicationService {
    @Autowired
    CtrtDAO ctrtDAO;

    @Override
    public List<CtrtBean> findCtrtList(Map<String, String> argsMap) {
        return ctrtDAO.selectCtrtList(argsMap);
    }

    @Override
    public void batchCtrtProcess(List<CtrtBean> ctrtList) {
        for(CtrtBean ctrtBean : ctrtList){
            switch(ctrtBean.getStatus()){
            case "inserted" :System.out.println("인설트 타는가?"); ctrtDAO.insertCtrt(ctrtBean); break;
            case "updated" :ctrtDAO.updateCtrt(ctrtBean); break;
            case "deleted" :ctrtDAO.deleteCtrt(ctrtBean); break;
            }
        }
    }
}
