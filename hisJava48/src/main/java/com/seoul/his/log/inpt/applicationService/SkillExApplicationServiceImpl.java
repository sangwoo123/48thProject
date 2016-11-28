package com.seoul.his.log.inpt.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.log.inpt.dao.InptDAO;
import com.seoul.his.log.inpt.dao.SkillExmntDAO;
import com.seoul.his.log.inpt.to.CtrtInfoBean;
import com.seoul.his.log.inpt.to.SkillExmntHistBean;


/**
 * @Package  com.seoul.his.log.inpt.applicationService
 * @Class    SkillExApplicationServiceImpl.java
 * @Create   2016. 6. 28.
 * @Author   Bohyun
 * @Description 기술검사내역관리 애플리케이션서비스
 *
 * @LastUpdated 
 */
@Component
public class SkillExApplicationServiceImpl implements SkillExApplicationService {
    
    
    @Autowired
    private SkillExmntDAO skillExmntDao;
    @Autowired
    private InptDAO inptDao;
    
    @Override
    public List<SkillExmntHistBean> findSkillExmntHistList(Map<String, String> queryMap)
    {
        return skillExmntDao.findSkillExmntHistList(queryMap);
    }
    @Override
    public void batchProcessSkillExmntHist(List<SkillExmntHistBean> skillExmntHisList,CtrtInfoBean ctrtInfoBean)
    {
        for(SkillExmntHistBean SkillExmntHistbean:skillExmntHisList)
        {
            switch(SkillExmntHistbean.getStatus())
            {
            case "inserted":
                skillExmntDao.insertSkillExmnt(SkillExmntHistbean);
                inptDao.updateCtrtInfoY(ctrtInfoBean);
                break;
            case "deleted":
                skillExmntDao.deleteSkillExmnt(SkillExmntHistbean);
                inptDao.updateCtrtInfoN(ctrtInfoBean);
                break;
            }
        }
    }
}
