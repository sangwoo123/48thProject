package com.seoul.his.hdm.admission.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.hdm.admission.service.AdmissionServiceFacade;
import com.seoul.his.hdm.admission.to.HospitalizationScheduleBean;
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
public class HospitalizationScheduleController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	AdmissionServiceFacade admissionServiceFacade;
	private PlatformData inData;
	private PlatformData outData;

	// 입원예약자 번호 생성
	@RequestMapping("hdm/admission/callhosptlzRsvtSeq.do")
	public void callhosptlzRsvtSeq(HttpServletRequest request, HttpServletResponse response) throws Exception {
		outData = (PlatformData) request.getAttribute("outData");

		String hosptlzRsvtNo = admissionServiceFacade.callhosptlzRsvtSeq();
		dataSetBeanMapper.addVariable(outData, "hosptlzRsvtNo", hosptlzRsvtNo);
	}

	@RequestMapping("hdm/admission/registerHospitalizationSchedule.do")
	public void registerHospitalizationSchedule(HttpServletRequest request, HttpServletResponse response) throws Exception {
		inData = (PlatformData) request.getAttribute("inData");

		List<HospitalizationScheduleBean> hospitalizationScheduleList = dataSetBeanMapper.datasetToBeans(inData, HospitalizationScheduleBean.class);
		admissionServiceFacade.registerHospitalizationSchedule(hospitalizationScheduleList);
		System.out.println("===== 병실 =:  "+hospitalizationScheduleList.get(0).getHopeWard());
	}
}
