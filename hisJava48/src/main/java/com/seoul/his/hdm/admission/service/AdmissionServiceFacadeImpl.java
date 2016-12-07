package com.seoul.his.hdm.admission.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.admission.applicationService.*;
import com.seoul.his.hdm.admission.to.*;
import com.seoul.his.hdm.foreign.applicationService.ForeignApplicationService;
import com.seoul.his.hdm.foreign.to.ReceiptInfoBean;


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
	@Autowired
	HospitalizationInfoApplicationService hospitalizationInfoApplicationService;
	@Autowired
	ForeignApplicationService foreignApplicationService;
	@Autowired
	HospitalRoomAssignmentApplicationService hospitalRoomAssignmentApplicationService;

	//입원환자 조회
	@Override
		public List<InpatientBean> findInpatientList(Map<String, String> argsMap) {
		List<InpatientBean> inpatientList = inpatientApplicationService.findInpatientList(argsMap);
		return inpatientList;
	}

	//입원예약번호(시퀀스) 얻기
	@Override
	public String callhosptlzRsvtSeq() {
		return hospitalizationScheduleApplicationService.callhosptlzRsvtSeq();
	}

	//입원예약 등록
	@Override
	public void registerHospitalizationSchedule(List<HospitalizationScheduleBean> hospitalizationScheduleList) {
		hospitalizationScheduleApplicationService.registerHospitalizationSchedule(hospitalizationScheduleList);
	}

	//입원정보 조회
	@Override
	public List<HospitalizationInfoBean> findHospitalizationInfo(Map<String, String> argsMap) {
		return hospitalizationInfoApplicationService.findHospitalizationInfo(argsMap);
	}

	//외래정보 조회
	@Override
	public List<ReceiptInfoBean> findOutpaReceipt(Map<String, String> argsMap) {
		return foreignApplicationService.findDiagnosisReceiptList(argsMap);
	}

    //병실 조회
    @Override
    public List<HospitalRoomBean> findHospitalRoomList(Map<String, String> argsMap) {
        return hospitalRoomAssignmentApplicationService.findHospitalRoomList(argsMap);
    }

    //입원정보 일괄처리
	@Override
	public void batchHospitalizationProcess(List<HospitalizationInfoBean> hospitalizationInfoList) {
		hospitalizationInfoApplicationService.batchHospitalizationProcess(hospitalizationInfoList);
	}

	//입원등록번호(시퀀스) 얻기
	@Override
	public String callHospitalizationSeq() {
		return hospitalizationInfoApplicationService.callHospitalizationSeq();
	}

}
