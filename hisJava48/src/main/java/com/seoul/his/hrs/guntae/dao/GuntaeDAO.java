package com.seoul.his.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.guntae.to.DayGuntaeBean;

/**
 * <pre>
 * com.seoul.his.hrs.guntae.dao
 *    |_ GuntaeDAO.java
 *
 * </pre>
 * @date : 2016. 12. 26. 오후 9:02:43
 * @version :
 * @author : User
 */

public interface GuntaeDAO {
	//일근태생성
	List<DayGuntaeBean> callDayGuntae(Map<String, String> argsMap);

	//일근태조회
	List<DayGuntaeBean> selectDayGuntaeList(Map<String, String> argsMap);
}





