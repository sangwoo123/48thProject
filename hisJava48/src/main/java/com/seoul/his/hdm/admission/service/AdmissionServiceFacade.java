package com.seoul.his.hdm.admission.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.admission.to.*;



public interface AdmissionServiceFacade {

	List<InpatientBean> findInpatientList(Map<String, String> argsMap);
	String callhosptlzRsvtSeq();
	void registerHospitalizationSchedule(List<HospitalizationScheduleBean> hospitalizationScheduleList);
	List<HospitalizationInfoBean> findHospitalizationInfo(Map<String, String> argsMap);

}
