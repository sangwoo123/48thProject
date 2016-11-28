package com.seoul.his.log.inpt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.log.inpt.dao.InptDAO;
import com.seoul.his.log.inpt.to.BuyDemdBean;
import com.seoul.his.log.inpt.to.CtrtInfoBean;
import com.seoul.his.log.inpt.to.CtrtInfoDetailBean;
import com.seoul.his.log.inpt.to.GdsInptBean;

/**
 * @Package  com.seoul.his.log.inpt.applicationService
 * @Class    InptApplicationServiceImpl.java
 * @Create   2016. 6. 28.
 * @Author   Bohyun
 * @Description 계약관리 애플리케이션서비스
 *
 * @LastUpdated 
 */
@Component
public class InptApplicationServiceImpl implements InptApplicationService{

    @Autowired
    InptDAO inptDao;
    
    @Override
    public List<GdsInptBean> findGdsInptList(Map<String,String> queryMap)
    {
        return inptDao.findGdsInptList(queryMap);
    }
    @Override
    public List<CtrtInfoBean> findCtrtList()
    {
        return inptDao.findCtrtList();
    }
    @Override
    public List<CtrtInfoDetailBean> findCtrtInfoDetailList(Map<String,String> queryMap)
    {
        return inptDao.findCtrtInfoDetailList(queryMap);
    }
    @Override
    public List<BuyDemdBean> findDelivDay(Map<String,String> queryMap)
    {
        return inptDao.findDelivDay(queryMap);
    }
    @Override
    public void registerGdsInpt(List<GdsInptBean> gdsInptList,List<CtrtInfoBean> ctrtInfo)
    {
        for(GdsInptBean GdsInptbean:gdsInptList)
        {
            switch(GdsInptbean.getStatus())
            {
            case "inserted":inptDao.insertGdsInpt(GdsInptbean); break;
            }
        }
        
        for(CtrtInfoBean CtrtInfobean:ctrtInfo)
        {
            switch(CtrtInfobean.getStatus())
            {
            case "updated":inptDao.updateCtrtInfo(CtrtInfobean); break;
            }
        }
    }
    @Override
    public void cancelGdsInpt(List<GdsInptBean> gdsInptList,List<CtrtInfoBean> ctrtInfo)
    {

        for(GdsInptBean GdsInptbean:gdsInptList)
        {
            switch(GdsInptbean.getStatus())
            {
            case "deleted":inptDao.deleteGdsInpt(GdsInptbean); break;
            }
        }
        for(CtrtInfoBean CtrtInfobean :ctrtInfo)
        {
            switch(CtrtInfobean.getStatus())
            {
            case "updated":inptDao.updateCtrtInfo(CtrtInfobean); break;
            }
        }
    }
    @Override
    public GdsInptBean findLastGdsInptNo()
    {
        return inptDao.selectLastGdsInptNum();
    }
}
