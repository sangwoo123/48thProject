package com.seoul.his.bst.HospitalStaffPersonnelStatus.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.bst.patientStatus.dailyPatient.to.DailyPatientBean;


public interface HospitalStaffPersonnelStatusServiceFacade {

	List<DailyPatientBean> findDailyPatientList(Map<String, String> argsMap);

	void batchDailyPatientProcess(List<DailyPatientBean> dailyPatientBeanList);

}
