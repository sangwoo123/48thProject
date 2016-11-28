package com.seoul.his.log.ctrt.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seoul.his.log.ctrt.service.CtrtServiceFacade;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.seoul.his.log.ctrt.to.CtrtBean;
import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;

/**
 * @Package com.seoul.his.log.ctrt.controller
 * @Class LC_CtrtController.java
 * @Create 2016. 5. 25.
 * @Author kooko
 * @Description 계약관리 컨트롤러
 *
 * @LastUpdated
 */

@Controller
public class CtrtController {

    @Autowired
    DataSetBeanMapper dataSetBeanMapper;
    @Autowired
    CtrtServiceFacade ctrtServiceFacade;

    @RequestMapping("log/ctrt/findCtrtList.do")
    public void findCtrtList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        System.out.println(argsMap.get("buyReceiptNo"));
        System.out.println(argsMap.get("ctrtStartCal"));
        System.out.println(argsMap.get("ctrtEndCal")); 
        List<CtrtBean> ctrtBeanList = ctrtServiceFacade.findCtrtList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, ctrtBeanList, CtrtBean.class);
    }

    @RequestMapping("log/ctrt/batchCtrtProcess.do")
    public void batchCtrtProcess(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        List<CtrtBean> ctrtBeanList = dataSetBeanMapper.datasetToBeans(inData, CtrtBean.class);
        ctrtServiceFacade.batchCtrtProcess(ctrtBeanList);
    }
}
