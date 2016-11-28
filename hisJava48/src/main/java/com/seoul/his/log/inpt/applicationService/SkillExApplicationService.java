package com.seoul.his.log.inpt.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.inpt.to.CtrtInfoBean;
import com.seoul.his.log.inpt.to.SkillExmntHistBean;

public interface SkillExApplicationService {
    public List<SkillExmntHistBean> findSkillExmntHistList(Map<String, String> queryMap);
    public void batchProcessSkillExmntHist(List<SkillExmntHistBean> skillExmntHisList,CtrtInfoBean ctrtInfoBean);
}
