package com.seoul.his.log.inpt.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.inpt.to.SkillExmntHistBean;

public interface SkillExmntDAO {
    
    public List<SkillExmntHistBean> findSkillExmntHistList(Map<String, String> queryMap);
    public void insertSkillExmnt(SkillExmntHistBean SkillExmntHistbean);
    public void deleteSkillExmnt(SkillExmntHistBean SkillExmntHistbean);

}
