package com.seoul.his.log.inpt.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.inpt.to.BuyDemdBean;
import com.seoul.his.log.inpt.to.CtrtInfoBean;
import com.seoul.his.log.inpt.to.CtrtInfoDetailBean;
import com.seoul.his.log.inpt.to.GdsInptBean;

public interface InptDAO {
    public List<GdsInptBean> findGdsInptList(Map<String,String> queryMap);
    public List<CtrtInfoBean> findCtrtList();
    public List<CtrtInfoDetailBean> findCtrtInfoDetailList(Map<String,String> queryMap);
    public List<BuyDemdBean> findDelivDay(Map<String,String> queryMap);
    public void insertGdsInpt(GdsInptBean GdsInptbean);
    public void updateCtrtInfo(CtrtInfoBean CtrtInfobean);
    public void deleteGdsInpt(GdsInptBean GdsInptbean);
    
    public void updateCtrtInfoY(CtrtInfoBean ctrtInfoBean);
    public void updateCtrtInfoN(CtrtInfoBean ctrtInfoBean);
    public GdsInptBean selectLastGdsInptNum();
}
