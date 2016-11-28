package com.seoul.his.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.guntae.to.OverTimeWorkBean;

/**
 * @Package  com.seoul.his.hrs.guntae.dao
 * @Class    OverTimeWorkDAO.java
 * @Create   2016. 5. 27.
 * @Author   yi
 * @Description
 *
 * @LastUpdated
 *       2016.05.27
 */
public interface OverTimeWorkDAO {

	List<OverTimeWorkBean> selectOverTimeWorkList(Map<String, String> argsMap);

	List<OverTimeWorkBean> selectApproverOverTimeWorkList();

	void insertOverTimeWork(OverTimeWorkBean overTimeWorkbean);

	void updateOverTimeWork(OverTimeWorkBean overTimeWorkbean);

	void deleteOverTimeWork(OverTimeWorkBean overTimeWorkbean);

	void deleteBeforeOverTimeWork(OverTimeWorkBean overTimeWorkbean);

}
