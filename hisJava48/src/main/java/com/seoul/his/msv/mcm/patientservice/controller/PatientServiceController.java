package com.seoul.his.msv.mcm.patientservice.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.msv.mcm.patientservice.service.PatientServiceServiceFacade;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;
import com.seoul.his.common.util.DataSetBeanMapper;


/**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.controller
 *    |_ PatientServiceController.java
 * </pre>
 *
 * @date : 2016. 12. 1. 오후 7:47:02
 * @version :
 * @author : Minhyeog
 */

@Controller
public class PatientServiceController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	PatientServiceServiceFacade patientserviceServiceFacade;

	@RequestMapping("msv/mcm/patientservice/findPatientServiceList.do")
	public void findPatientServiceList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<PatientServiceBean> patientserviceList = patientserviceServiceFacade.findPatientServiceList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, patientserviceList, PatientServiceBean.class);
	}
}
