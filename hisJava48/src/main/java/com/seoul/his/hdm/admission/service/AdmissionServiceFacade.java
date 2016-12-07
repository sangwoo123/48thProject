package com.seoul.his.hdm.admission.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.admission.to.*;
import com.seoul.his.hdm.foreign.to.ReceiptInfoBean;



public interface AdmissionServiceFacade {

	List<InpatientBean> findInpatientList(Map<String, String> argsMap);
	String callhosptlzRsvtSeq();
	void registerHospitalizationSchedule(List<HospitalizationScheduleBean> hospitalizationScheduleList);
	List<HospitalizationInfoBean> findHospitalizationInfo(Map<String, String> argsMap);
	List<ReceiptInfoBean> findOutpaReceipt(Map<String, String> argsMap);
	List<HospitalRoomBean> findHospitalRoomList(Map<String, String> argsMap);
}
