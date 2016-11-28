package com.seoul.his.log.inpt.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.log.inpt.applicationService.InptApplicationService;
import com.seoul.his.log.inpt.applicationService.SkillExApplicationService;
import com.seoul.his.log.inpt.to.BuyDemdBean;
import com.seoul.his.log.inpt.to.CtrtInfoBean;
import com.seoul.his.log.inpt.to.CtrtInfoDetailBean;
import com.seoul.his.log.inpt.to.GdsInptBean;
import com.seoul.his.log.inpt.to.SkillExmntHistBean;

/**
 * @Package  com.seoul.his.log.inpt.service
 * @Class    InptServiceFacadeImpl.java
 * @Create   2016. 6. 28.
 * @Author   Bohyun
 * @Description 기술검사내역, 검사대상물품, 계약관리 서비스퍼사드
 *
 * @LastUpdated 
 */
@Service
public class InptServiceFacadeImpl implements InptServiceFacade {

    @Autowired
    private InptApplicationService inptAppleicationservice;
    @Autowired
    SkillExApplicationService skillExApplicationservice;
    
    @Override
    public List<GdsInptBean> findGdsInptList(Map<String,String> queryMap)
    {
        return inptAppleicationservice.findGdsInptList(queryMap);
    }
    @Override
    public List<CtrtInfoBean> findCtrtList()
    {
        return inptAppleicationservice.findCtrtList();
    }
    @Override
    public List<CtrtInfoDetailBean> findCtrtInfoDetailList(Map<String,String> queryMap)
    {
        return inptAppleicationservice.findCtrtInfoDetailList(queryMap);
    }
    @Override
    public List<BuyDemdBean> findDelivDay(Map<String,String> queryMap)
    {
        return inptAppleicationservice.findDelivDay(queryMap);
    }
    
    @Override
    public void registerGdsInpt(List<GdsInptBean> gdsInptList,List<CtrtInfoBean> ctrtInfo)
    {
        inptAppleicationservice.registerGdsInpt(gdsInptList,ctrtInfo);
    }
    @Override
    public void cancelGdsInpt(List<GdsInptBean> gdsInptList,List<CtrtInfoBean> ctrtInfo)
    {
        inptAppleicationservice.cancelGdsInpt(gdsInptList,ctrtInfo);
    }
    @Override
    public List<SkillExmntHistBean> findSkillExmntHistList(Map<String, String> queryMap)
    {
        return skillExApplicationservice.findSkillExmntHistList(queryMap);
    }
    @Override
    public void batchProcessSkillExmntHist(List<SkillExmntHistBean> skillExmntHisList,CtrtInfoBean ctrtInfoBean)
    {
        skillExApplicationservice.batchProcessSkillExmntHist(skillExmntHisList,ctrtInfoBean);
    }
    @Override
    public GdsInptBean findLastGdsInptNo()
    {
        return inptAppleicationservice.findLastGdsInptNo();
    }
}
