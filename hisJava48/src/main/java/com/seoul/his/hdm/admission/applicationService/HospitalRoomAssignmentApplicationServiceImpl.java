package com.seoul.his.hdm.admission.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.admission.dao.HospitalRoomAssignmentDAO;
import com.seoul.his.hdm.admission.to.HospitalRoomBean;

/**
 * @Package  com.seoul.his.acc.budget.applicationService
 * @Class    AccBudgetApplicationServiceImpl.java
 * @Create   2016. 6. 27.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated
 */

@Component
public class HospitalRoomAssignmentApplicationServiceImpl implements HospitalRoomAssignmentApplicationService{
	@Autowired
	HospitalRoomAssignmentDAO hospitalRoomAssignmentDAO;

    @Override
    public List<HospitalRoomBean> findHospitalRoomList(Map<String, String> argsMap) {
        return hospitalRoomAssignmentDAO.selectHospitalRoomList(argsMap);
    }

}
