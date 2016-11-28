package com.seoul.his.log.ctrt.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.ctrt.to.CtrtBean;

public interface CtrtServiceFacade {
    List<CtrtBean> findCtrtList(Map<String, String> argsMap);

    void batchCtrtProcess(List<CtrtBean> ctrtList);
}
