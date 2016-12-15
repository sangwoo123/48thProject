package com.seoul.his.com.system.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.system.to.SystemBean;


/**
 * 
 * @Package : com.seoul.his.com.system.service 
 * @Class : SystemServiceFacade.java
 * @Create : 2016. 12. 15. 오후 8:23:39 
 * @Author : 강 현준
 */
public interface SystemServiceFacade {

	List<SystemBean> findSystemList(Map<String, String> argsMap);

	public String findDate(Map<String, String> argsMap);
}
