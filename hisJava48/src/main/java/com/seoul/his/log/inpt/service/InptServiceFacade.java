package com.seoul.his.log.inpt.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.inpt.to.BuyDemdBean;
import com.seoul.his.log.inpt.to.CtrtInfoBean;
import com.seoul.his.log.inpt.to.CtrtInfoDetailBean;
import com.seoul.his.log.inpt.to.GdsInptBean;
import com.seoul.his.log.inpt.to.SkillExmntHistBean;

public interface InptServiceFacade {
    public List<GdsInptBean> findGdsInptList(Map<String,String> queryMap);
    public List<CtrtInfoBean> findCtrtList();
    public List<CtrtInfoDetailBean> findCtrtInfoDetailList(Map<String,String> queryMap);
    public List<BuyDemdBean> findDelivDay(Map<String,String> queryMap);
    
    public void registerGdsInpt(List<GdsInptBean> gdsInptList,List<CtrtInfoBean> ctrtInfo);
    public void cancelGdsInpt(List<GdsInptBean> gdsInptList,List<CtrtInfoBean> ctrtInfo);
    public List<SkillExmntHistBean> findSkillExmntHistList(Map<String, String> queryMap);
    public void batchProcessSkillExmntHist(List<SkillExmntHistBean> skillExmntHisList,CtrtInfoBean ctrtInfoBean);
    public GdsInptBean findLastGdsInptNo();
}
