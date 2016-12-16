package com.seoul.his.acc.elementary.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.acc.elementary.service.ElementaryServiceFacade;
import com.seoul.his.acc.elementary.to.AccPridBean;
import com.seoul.his.common.util.DataSetBeanMapper;


/**
 * <pre>
 * com.seoul.his.msv.sup.hosptaldiet.controller
 *    |_ CarteController.java
 *
 * </pre>
 * @date : 2016. 12. 11. 오후 2:42:45
 * @version :
 * @author : 응디꿍디
 */
@Controller
public class ElementaryController {
		@Autowired
		DataSetBeanMapper dataSetBeanMapper;
		@Autowired
		ElementaryServiceFacade accServiceFacade;

	@RequestMapping("acc/elementary/findAccPridList.do")
	public void findAccPridList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<AccPridBean> accPriodBean = accServiceFacade.findAccPridList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, accPriodBean, AccPridBean.class);
	}




}




