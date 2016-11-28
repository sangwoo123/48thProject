package com.seoul.his.log.inpt.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.inpt.to.BuyDemdBean;
import com.seoul.his.log.inpt.to.CtrtInfoBean;
import com.seoul.his.log.inpt.to.CtrtInfoDetailBean;
import com.seoul.his.log.inpt.to.GdsInptBean;

public interface InptApplicationService {
    public List<GdsInptBean> findGdsInptList(Map<String,String> queryMap);
    public List<CtrtInfoBean> findCtrtList();
    public List<CtrtInfoDetailBean> findCtrtInfoDetailList(Map<String,String> queryMap);
    public List<BuyDemdBean> findDelivDay(Map<String,String> queryMap);
    public void registerGdsInpt(List<GdsInptBean> gdsInptList,List<CtrtInfoBean> ctrtInfo);
    public void cancelGdsInpt(List<GdsInptBean> gdsInptList,List<CtrtInfoBean> ctrtInfo);
    public GdsInptBean findLastGdsInptNo();
    
}
