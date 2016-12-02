package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.AdrBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalCodeBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;


public interface PatientServiceApplicationService {
	List<AdrBean> findAdrList(Map<String, String> argsMap);

    void batchAdrProcess(List<AdrBean> adrList);

	List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap);
	List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap);
	List<AttentionalCodeBean> findAttentionalCodeList(Map<String, String> argsMap);
}
