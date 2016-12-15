package com.seoul.his.hdm.foreign.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.PatInfoBean;

/**
 * 
 * @Package : com.seoul.his.hdm.foreign.dao 
 * @Class : ForeignDAO.java
 * @Create : 2016. 12. 15. 오후 8:20:14 
 * @Author : 강 현준
 */
public interface ForeignDAO {

	public List<PatInfoBean> selectPatList(Map<String, String> argsMap);
	public PatInfoBean selectPat(Map<String, String> argsMap);

}
