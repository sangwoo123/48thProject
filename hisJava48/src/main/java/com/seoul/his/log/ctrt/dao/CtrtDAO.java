package com.seoul.his.log.ctrt.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.ctrt.to.CtrtBean;

public interface CtrtDAO {
    List<CtrtBean> selectCtrtList(Map<String, String> argsMap);

    void insertCtrt(CtrtBean ctrtBean);

    void updateCtrt(CtrtBean ctrtBean);

    void deleteCtrt(CtrtBean ctrtBean);
}
