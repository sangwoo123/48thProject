package com.seoul.his.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.resol.to.ResolLetBean;

public interface ResolApplicationService {

    List<ResolLetBean> findResolLetList(Map<String, String> argsMap);

    String getResolNo();

    void registResolLet(ResolLetBean resolLetBean);

    void modifyResolLet(ResolLetBean resolLetBean);

}
