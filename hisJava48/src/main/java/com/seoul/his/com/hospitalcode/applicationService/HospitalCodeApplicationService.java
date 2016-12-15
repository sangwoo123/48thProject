package com.seoul.his.com.hospitalcode.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.hospitalcode.exception.HospitalCodeException;
import com.seoul.his.com.hospitalcode.to.HospitalCodeBean;


/**
 * 
 * @Package : com.seoul.his.com.hospitalcode.applicationService 
 * @Class : HospitalCodeApplicationService.java
 * @Create : 2016. 12. 15. 오후 8:21:36 
 * @Author : 강 현준
 */
public interface HospitalCodeApplicationService {

	List<HospitalCodeBean> findHospitalCodeList(Map<String, String> argsMap);


}
