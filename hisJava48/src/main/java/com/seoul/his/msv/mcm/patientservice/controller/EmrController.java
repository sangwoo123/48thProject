package com.seoul.his.msv.mcm.patientservice.controller;

import java.util.ArrayList;
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
import com.seoul.his.msv.mcm.patientservice.to.EmrCheckupBean;
import com.seoul.his.msv.mcm.patientservice.to.EmrHandleBean;
import com.seoul.his.msv.mcm.patientservice.to.EmrInjectionBean;
import com.seoul.his.msv.mcm.patientservice.to.EmrMaterialBean;
import com.seoul.his.msv.mcm.patientservice.to.EmrPrescBean;
import com.seoul.his.msv.mcm.patientservice.to.EmrRehabilitationBean;
import com.seoul.his.msv.mcm.patientservice.to.EmrTransfusionBean;

/**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.controller
 *    |_ EmrController.java
 * </pre>
 *
 * @date : 2016. 12. 7. 오후 9:15:51
 * @version :
 * @author : Minhyeog
 */

@Controller
public class EmrController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	PatientServiceServiceFacade patientserviceServiceFacade;

	// Emr 조회
	@RequestMapping("msv/mcm/patientservice/findEmrList.do")
	public void findEmrList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<EmrPrescBean> emrList = patientserviceServiceFacade.findEmrPrescList(argsMap);
		List<EmrRehabilitationBean> rehabilitationList = new ArrayList<EmrRehabilitationBean>(); // 재활리스트
		List<EmrMaterialBean> materialList = new ArrayList<EmrMaterialBean>(); // 재료리스트
		List<EmrInjectionBean> injectionList = new ArrayList<EmrInjectionBean>(); // 투약리스트
		List<EmrHandleBean> handleList = new ArrayList<EmrHandleBean>(); // 처치리스트
		List<EmrCheckupBean> checkupList = new ArrayList<EmrCheckupBean>(); // 검사리스트
		List<EmrTransfusionBean> transfusionList = new ArrayList<EmrTransfusionBean>();
		for (EmrPrescBean emrPrescBean : emrList) {
			rehabilitationList.addAll(emrPrescBean.getRehabilitationList());
			materialList.addAll(emrPrescBean.getMaterialList());
			injectionList.addAll(emrPrescBean.getInjectionList());
			handleList.addAll(emrPrescBean.getHandleList());
			checkupList.addAll(emrPrescBean.getCheckupList());
			transfusionList.addAll(emrPrescBean.getTransfusionList());
		}
		// 수혈리스트
		dataSetBeanMapper.beansToDataset(outData, emrList, EmrPrescBean.class);
		dataSetBeanMapper.beansToDataset(outData, rehabilitationList, EmrRehabilitationBean.class);
		dataSetBeanMapper.beansToDataset(outData, materialList, EmrMaterialBean.class);
		dataSetBeanMapper.beansToDataset(outData, injectionList, EmrInjectionBean.class);
		dataSetBeanMapper.beansToDataset(outData, handleList, EmrHandleBean.class);
		dataSetBeanMapper.beansToDataset(outData, checkupList, EmrCheckupBean.class);
		dataSetBeanMapper.beansToDataset(outData, transfusionList, EmrTransfusionBean.class);
	}
}