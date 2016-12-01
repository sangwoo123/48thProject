package com.seoul.his.hdm.admission.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.admission.to.InpatientBean;


public interface AdmissionApplicationService {
	List<InpatientBean> findInpatientList(Map<String, String> argsMap);


}
