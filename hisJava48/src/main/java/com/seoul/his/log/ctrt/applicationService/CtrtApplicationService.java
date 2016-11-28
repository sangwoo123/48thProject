package com.seoul.his.log.ctrt.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.ctrt.to.CtrtBean;

public interface CtrtApplicationService {
    List<CtrtBean> findCtrtList(Map<String, String> argsMap);

    void batchCtrtProcess(List<CtrtBean> ctrtList);
}
