package com.seoul.his.bst.HospitalStaffPersonnelStatus.dao;



import java.util.List;

import com.seoul.his.hrs.emp.to.PerconaldateBean;



/**
 *
 * @Package  com.seoul.his.bst.HospitalStaffPersonnelStatus.dao
 * @Class    PerconaldateDAO.java
 * @Create   2016. 12. 24.
 * @Author   박상우
 * @Description
 *
 * @LastUpdated
 */

public interface PerconaldateDAO1 {
	List<PerconaldateBean> findPerconaldateList(String empNo);


}
