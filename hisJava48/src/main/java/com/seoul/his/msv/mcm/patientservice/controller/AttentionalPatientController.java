package com.seoul.his.msv.mcm.patientservice.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.msv.mcm.patientservice.service.PatientServiceServiceFacade;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalFieldBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;

/**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.controller
 *    |_ AttentionalPatientController.java
 * </pre>
 *
 * @date : 2016. 12. 6. 오후 2:26:09
 * @version :
 * @author : Minhyeog
 */
@Controller
public class AttentionalPatientController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	PatientServiceServiceFacade patientserviceServiceFacade;

	@RequestMapping("msv/mcm/patientservice/findAttentionalPatientList.do")
	public void findAttentionalPatientList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<AttentionalPatientBean> attentionalPatientList = patientserviceServiceFacade
				.findAttentionalPatientList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, attentionalPatientList, AttentionalPatientBean.class);
	}

	@RequestMapping("msv/mcm/patientservice/findAttentionalFieldList.do")
	public void findAttentionalFieldList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<AttentionalFieldBean> attentionalFieldList = patientserviceServiceFacade.findAttentionalFieldList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, attentionalFieldList, AttentionalFieldBean.class);
	}

	@RequestMapping("msv/mcm/patientservice/batchAttentionalFieldProcess.do")
	public void batchAttentionalFieldProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		List<AttentionalFieldBean> attentionalFieldList = dataSetBeanMapper.datasetToBeans(inData, AttentionalFieldBean.class);
		patientserviceServiceFacade.batchAttentionalFieldProcess(attentionalFieldList);
	}

	@RequestMapping("msv/mcm/patientservice/registerAttentionalPatient.do")
	public void registerAttentionalPatient(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		AttentionalPatientBean attentionalPatient = dataSetBeanMapper.datasetToBean(inData ,AttentionalPatientBean.class);
		patientserviceServiceFacade.registerAttentionalPatient(attentionalPatient);
	}
}