package com.seoul.his.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.guntae.to.DayGuntaeBean;
import com.seoul.his.hrs.guntae.to.MonGuntaeBean;
import com.seoul.his.hrs.guntae.to.MonGuntaeCloseBean;

/**
 * @Package  com.seoul.his.hrs.guntae.dao
 * @Class    GuntaeDAO.java
 * @Create   2016. 5. 27.
 * @Author   yi
 * @Description
 *
 * @LastUpdated
 *       2016.05.27
 */
public interface GuntaeDAO {

	List<DayGuntaeBean> callDayGuntae(Map<String, String> argsMap);

	List<DayGuntaeBean> selectDayGuntaeList(Map<String, String> argsMap);

	List<MonGuntaeBean> selectMonGuntaeList(Map<String, String> argsMap);

	List<MonGuntaeBean> callMonGuntae(Map<String, String> argsMap);

	List<MonGuntaeBean> callCloseMonGuntae(Map<String, String> argsMap);

	List<MonGuntaeCloseBean> selectMonGuntaeCloseList(Map<String, String> argsMap);

}
