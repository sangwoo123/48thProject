package com.seoul.his.hdm.admission.applicationService;

import java.util.List;

import com.seoul.his.hdm.admission.to.HospitalizationScheduleBean;


public interface HospitalizationScheduleApplicationService {
	String callhosptlzRsvtSeq();
	void registerHospitalizationSchedule(List<HospitalizationScheduleBean> hospitalizationScheduleList);

}
