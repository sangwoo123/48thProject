package com.seoul.his.hdm.admission.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.admission.applicationService.HospitalizationScheduleApplicationService;
import com.seoul.his.hdm.admission.applicationService.InpatientApplicationService;
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


	@Override
		public List<InpatientBean> findInpatientList(Map<String, String> argsMap) {
		List<InpatientBean> inpatientList = inpatientApplicationService.findInpatientList(argsMap);
		return inpatientList;
	}

	@Override
	public String callhosptlzRsvtSeq() {
		return hospitalizationScheduleApplicationService.callhosptlzRsvtSeq();
	}


}
