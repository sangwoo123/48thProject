package com.seoul.his.com.system.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.com.system.service.SystemServiceFacade;
import com.seoul.his.common.util.DataSetBeanMapper;

/**
 * 
 * @Package : com.seoul.his.com.system.controller 
 * @Class : DateUtilController.java
 * @Create : 2016. 12. 15. 오후 8:22:24 
 * @Author : 강 현준
 */
@Controller
public class DateUtilController {

    @Autowired
    private SystemServiceFacade systemServiceFacade;
    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("com/findDate.do")
    public void findDate(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        String sdate = systemServiceFacade.findDate(argsMap);
        dataSetBeanMapper.addVariable(outData, "serverDate", sdate);
    }
}
