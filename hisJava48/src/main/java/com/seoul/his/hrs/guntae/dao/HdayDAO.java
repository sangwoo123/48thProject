package com.seoul.his.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.guntae.to.HdayBean;


/**
 * @Package  com.seoul.his.hrs.guntae.dao
 * @Class    HdayDAO.java
 * @Create   2016. 5. 27.
 * @Author   yi
 * @Description
 *
 * @LastUpdated
 *      2016.05.27
 */
public interface HdayDAO {

	List<HdayBean> selectHdayList(Map<String, String> argsMap);

	void callHday(HdayBean hdayBean);

	//void updateHday(HdayBean hdayBean);

	void deleteHday(HdayBean hdayBean);

}
