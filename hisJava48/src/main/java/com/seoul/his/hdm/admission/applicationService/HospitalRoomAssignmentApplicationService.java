package com.seoul.his.hdm.admission.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.admission.to.HospitalRoomBean;

public interface HospitalRoomAssignmentApplicationService {

	List<HospitalRoomBean> findHospitalRoomList(Map<String, String> argsMap);

}
