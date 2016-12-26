package com.seoul.his.bst.HospitalStaffPersonnelStatus.controller;


import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.bst.HospitalStaffPersonnelStatus.service.HospitalStaffPersonnelStatusServiceFacade;
import com.seoul.his.bst.HospitalStaffPersonnelStatus.to.HospitalStaffPersonnelStatusBean;

import com.seoul.his.common.util.DataSetBeanMapper;


/**
 * @Package  com.seoul.his.acc.budget.controller
 * @Class    BudgBimokController.java
 * @Create   2016. 12. 24.
 * @Author   박상우
 * @Description
 *
 * @LastUpdated
 */

@Controller
public class HospitalStaffPersonnelStatusController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	HospitalStaffPersonnelStatusServiceFacade hospitalStaffPersonnelStatusServiceFacade;

	@RequestMapping("bst/hospitalStaffPersonnelStatus/findPersonnelStatusList.do")
	public void findPersonnelStatusList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");

		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<HospitalStaffPersonnelStatusBean> empList = hospitalStaffPersonnelStatusServiceFacade.findPersonnelStatusList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, empList, HospitalStaffPersonnelStatusBean.class);
	}

}
