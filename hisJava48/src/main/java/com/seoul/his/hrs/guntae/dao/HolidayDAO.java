package com.seoul.his.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.guntae.to.HolidayBean;

/**
 * @Package  com.seoul.his.hrs.guntae.dao
 * @Class    HolidayDAO.java
 * @Create   2016. 5. 27.
 * @Author   yi
 * @Description
 *
 * @LastUpdated
 *       2016.05.27
 */
public interface HolidayDAO {

	List<HolidayBean> selectHolidayList(Map<String, String> argsMap);

	List<HolidayBean> selectAdminHolidayList(Map<String, String> argsMap);

	void callHoliday(HolidayBean holidayBean);

	void updateHoliday(HolidayBean holidayBean);

}
