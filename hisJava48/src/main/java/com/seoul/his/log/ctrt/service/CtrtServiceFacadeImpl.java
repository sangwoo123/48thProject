package com.seoul.his.log.ctrt.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.log.ctrt.applicationService.CtrtApplicationService;
import com.seoul.his.log.ctrt.to.CtrtBean;

@Service
public class CtrtServiceFacadeImpl implements CtrtServiceFacade {
    @Autowired
    CtrtApplicationService ctrtApplicationService;

    @Override
    public List<CtrtBean> findCtrtList(Map<String, String> argsMap) {
        return ctrtApplicationService.findCtrtList(argsMap);
    }

    @Override
    public void batchCtrtProcess(List<CtrtBean> ctrtList) {
        ctrtApplicationService.batchCtrtProcess(ctrtList);
    }
}
