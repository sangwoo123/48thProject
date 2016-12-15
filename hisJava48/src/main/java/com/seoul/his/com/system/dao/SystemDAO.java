package com.seoul.his.com.system.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.system.to.SystemBean;

/**
 * 
 * @Package : com.seoul.his.com.system.dao 
 * @Class : SystemDAO.java
 * @Create : 2016. 12. 15. 오후 8:23:13 
 * @Author : 강 현준
 */
public interface SystemDAO {

	List<SystemBean> selectSystemList(Map<String, String> argsMap);

	public String selectDate(Map<String, String> argsMap);
}
