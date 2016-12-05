package com.seoul.his.hdm.patient.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.hdm.patient.service.PatientServiceFacade;
import com.seoul.his.hdm.patient.to.PatientBean;
import com.seoul.his.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoul.his.acc.budget.controller
 * @Class    BudgBimokController.java
 * @Create   2016. 6. 10.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated
 */

@Controller
public class PatientController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	PatientServiceFacade patientServiceFacade;

	private PlatformData outData;
	private PlatformData inData;
	private Map<String, String> argsMap;

	@RequestMapping("hdm/patient/findPatientList.do")
	public void findPatientList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    inData = (PlatformData) request.getAttribute("inData");
		outData = (PlatformData) request.getAttribute("outData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<PatientBean> patientList = patientServiceFacade.findPatientList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, patientList, PatientBean.class);
	}

	// 환자한명조회
    @RequestMapping("hdm/patient/findPatient.do")
    public void findPat(HttpServletRequest request, HttpServletResponse response) throws Exception {
        outData = (PlatformData) request.getAttribute("outData");
        inData = (PlatformData) request.getAttribute("inData");
        argsMap = dataSetBeanMapper.variablesToMap(inData);
        System.out.println("PatController - 환자한명조회");
        PatientBean patientBean = patientServiceFacade.findPatient(argsMap);
        System.out.println(patientBean);
        dataSetBeanMapper.beanToDataset(outData, patientBean, PatientBean.class);
    }

}
