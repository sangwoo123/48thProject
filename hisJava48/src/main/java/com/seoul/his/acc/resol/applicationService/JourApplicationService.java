package com.seoul.his.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.resol.to.JourBean;

public interface JourApplicationService {

    void registJour(List<JourBean> jourBeanList);

    void batchResolLetProcess(List<JourBean> jourBeanList);

    List<JourBean> findJourRecDetail(Map<String, String> argsMap);

}
