package com.seoul.his.com.system.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.system.to.CodeBean;
import com.seoul.his.com.system.to.CodeNmBean;
import com.seoul.his.com.system.to.OutCodeBean;



/**
 * 
 * @Package : com.seoul.his.com.system.dao 
 * @Class : CodeDAO.java
 * @Create : 2016. 12. 15. 오후 8:23:06 
 * @Author : 강 현준
 */
public interface CodeDAO {
    public List<CodeBean> selectCodeList(Map<String, String> argsMap);

    public void insertCode(CodeBean codeBean);

    public void updateCode(CodeBean codeBean);

    public void deleteCode(CodeBean codeBean);

    public List<CodeNmBean> selectCodePopupList(Map<String, String> argsMap);

    public List<CodeNmBean> selectCode(Map<String, String> argsMap);
    
    public List<OutCodeBean> selectCodeBindList(String code);

}
