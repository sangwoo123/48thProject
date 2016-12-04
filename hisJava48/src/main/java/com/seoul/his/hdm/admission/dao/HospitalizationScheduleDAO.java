package com.seoul.his.hdm.admission.dao;

import com.seoul.his.hdm.admission.to.HospitalizationScheduleBean;

public interface HospitalizationScheduleDAO {

	String selectHosptlzRsvtSeq();
	void insertHospitalizationSchedule(HospitalizationScheduleBean hospitalizationScheduleBean);

}
