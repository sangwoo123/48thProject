package com.seoul.his.hdm.admission.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.admission.applicationService.HospitalizationScheduleApplicationService;
import com.seoul.his.hdm.admission.applicationService.InpatientApplicationService;
import com.seoul.his.hdm.admission.to.HospitalizationScheduleBean;
import com.seoul.his.hdm.admission.to.InpatientBean;


/**
 * @Package  com.seoul.his.acc.budget.service
 * @Class    BudgetServiceFacadeImpl.java
 * @Create   2016. 6. 27.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated
 */

@Service
public class AdmissionServiceFacadeImpl implements AdmissionServiceFacade{
	@Autowired
	InpatientApplicationService inpatientApplicationService;
	@Autowired
	HospitalizationScheduleApplicationService hospitalizationScheduleApplicationService;

	//입원환자 조회
	@Override
		public List<InpatientBean> findInpatientList(Map<String, String> argsMap) {
		List<InpatientBean> inpatientList = inpatientApplicationService.findInpatientList(argsMap);
		return inpatientList;
	}

	//입원예약번호 시퀀스 얻기
	@Override
	public String callhosptlzRsvtSeq() {
		return hospitalizationScheduleApplicationService.callhosptlzRsvtSeq();
	}

	//입원예약 등록
	@Override
	public void registerHospitalizationSchedule(List<HospitalizationScheduleBean> hospitalizationScheduleList) {
		hospitalizationScheduleApplicationService.registerHospitalizationSchedule(hospitalizationScheduleList);
	}

}
