package com.seoul.his.hdm.admission.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.admission.to.HospitalRoomBean;

public interface HospitalRoomAssignmentDAO {

	List<HospitalRoomBean> selectHospitalRoomList(Map<String, String> argsMap);

}
