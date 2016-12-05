package com.seoul.his.hdm.admission.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.hdm.admission.service.AdmissionServiceFacade;
import com.seoul.his.hdm.admission.to.HospitalizationInfoBean;
import com.seoul.his.hdm.admission.to.InpatientBean;
import com.seoul.his.common.util.DataSetBeanMapper;


/**
 * <pre>
 * com.seoul.his.hdm.admission.controller
 *    |_ InpatientController.java
 * </pre>
 *
 * @date : 2016. 12. 4. 오후 2:44:35
 * @version :
 * @author : kimmu
 */

@Controller
public class InpatientController {

	@Autowired
	private DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	AdmissionServiceFacade admissionServiceFacade;
	private PlatformData inData;
	private PlatformData outData;
	private Map<String, String> argsMap;

	@RequestMapping("hdm/admission/findInpatientList.do")
	public void findInpatientList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    inData = (PlatformData) request.getAttribute("inData");
		outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<InpatientBean> inpatientList = admissionServiceFacade.findInpatientList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, inpatientList, InpatientBean.class);
	}

	//입원등록조회
	@SuppressWarnings("unchecked")
	@RequestMapping("hdm/admission/findHospitalizationInfo.do")
	public void findHospitalizationInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("===========findHospitalizationInfo=======");
		outData = (PlatformData) request.getAttribute("outData");
		inData = (PlatformData) request.getAttribute("inData");
		argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<HospitalizationInfoBean> hosptlzReceipt = admissionServiceFacade.findHospitalizationInfo(argsMap);
		dataSetBeanMapper.beansToDataset(outData, hosptlzReceipt, HospitalizationInfoBean.class);
		System.out.println("======== size ===="+hosptlzReceipt.size());
	}


}
