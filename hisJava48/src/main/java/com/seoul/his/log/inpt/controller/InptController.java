package com.seoul.his.log.inpt.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.log.inpt.service.InptServiceFacade;
import com.seoul.his.log.inpt.to.BuyDemdBean;
import com.seoul.his.log.inpt.to.CtrtInfoBean;
import com.seoul.his.log.inpt.to.CtrtInfoDetailBean;
import com.seoul.his.log.inpt.to.GdsInptBean;
import com.seoul.his.log.inpt.to.SkillExmntHistBean;

/**
 * @Package  com.seoul.his.log.inpt.controller
 * @Class    InptController.java
 * @Create   2016. 5. 26.
 * @Author   Bohyun
 * @Description 기술검사내역, 검사대상물품, 계약관리 컨트롤러
 *
 * @LastUpdated 
 */

@Controller
public class InptController {
    
    @Autowired
    private InptServiceFacade inptServiceFacade;
    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;
    
    //물룸검수 조회
    @RequestMapping("log/inpt/findCtrtList.do")
    public void findCtrtList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        List<CtrtInfoBean> list = inptServiceFacade.findCtrtList();
        dataSetBeanMapper.beansToDataset(outData, list, CtrtInfoBean.class);
        
    }
    
    //물품조회.
    @RequestMapping("log/inpt/findCtrtHistList.do")
    public void findCtrtHistList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> queryMap = (Map<String, String>) request.getAttribute("queryMap");
        List<CtrtInfoDetailBean> list = inptServiceFacade.findCtrtInfoDetailList(queryMap);
        dataSetBeanMapper.beansToDataset(outData, list, CtrtInfoDetailBean.class);
    }
    
    //물품검수조회
    @RequestMapping("log/inpt/findGdsInptList.do")
    public void findGdsInptList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> queryMap = (Map<String, String>) request.getAttribute("queryMap");
        List<GdsInptBean> list = inptServiceFacade.findGdsInptList(queryMap);
        dataSetBeanMapper.beansToDataset(outData, list, GdsInptBean.class);
    }
    
    
    @RequestMapping("log/inpt/findDelivDay.do")
    public void findDelivDay(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> queryMap = (Map<String, String>) request.getAttribute("queryMap");
        List<BuyDemdBean> list = inptServiceFacade.findDelivDay(queryMap);
        dataSetBeanMapper.beansToDataset(outData, list, BuyDemdBean.class);
    }
    
    //기술검수 승인처리
    @RequestMapping("log/inpt/registerGdsInpt.do")
    public void registerGdsInpt(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");

        List<GdsInptBean> gdsInptList = dataSetBeanMapper.datasetToBeans(inData, GdsInptBean.class);
        List<CtrtInfoBean> ctrtInfo = dataSetBeanMapper.datasetToBeans(inData, CtrtInfoBean.class);
        inptServiceFacade.registerGdsInpt(gdsInptList, ctrtInfo);
    }

    //물품검수 검수여부 반려 처리.
    @RequestMapping("log/inpt/cancelGdsInpt.do")
    public void cancelGdsInpt(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");

        List<GdsInptBean> gdsInptList = dataSetBeanMapper.datasetToBeans(inData, GdsInptBean.class);
        List<CtrtInfoBean> ctrtInfo = dataSetBeanMapper.datasetToBeans(inData, CtrtInfoBean.class);
        inptServiceFacade.cancelGdsInpt(gdsInptList, ctrtInfo);
    }
    
    @RequestMapping("log/inpt/findSkillExmntHistList.do")
    @SuppressWarnings("unchecked")
    public void findSkillExmntHistList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> queryMap = (Map<String, String>) request.getAttribute("queryMap");
        List<SkillExmntHistBean> SkillExmntHistlist = inptServiceFacade.findSkillExmntHistList(queryMap);

        dataSetBeanMapper.beansToDataset(outData, SkillExmntHistlist, SkillExmntHistBean.class);
    }
    
    @RequestMapping("log/inpt/batchProcessSkillExmntHist.do")
    public void batchProcessSkillExmntHist(HttpServletRequest request, HttpServletResponse response) throws Exception 
    {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        
        @SuppressWarnings("unchecked")
        Map<String, String> queryMap = (Map<String, String>) request.getAttribute("queryMap");
        List<SkillExmntHistBean> skillExmntHisList = dataSetBeanMapper.datasetToBeans(inData, SkillExmntHistBean.class);

        String ctrtNo = skillExmntHisList.get(0).getCtrtNo();

        CtrtInfoBean ctrtInfoBean = new CtrtInfoBean();
        ctrtInfoBean.setCtrtNo(ctrtNo);

        inptServiceFacade.batchProcessSkillExmntHist(skillExmntHisList,ctrtInfoBean);
    }
    //시퀀스로 마지막 번호검색.
    @RequestMapping("log/inpt/findLastGdsInptNo.do")
    public void findLastGdsInptNo(HttpServletRequest request,HttpServletResponse response) throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        GdsInptBean gdsInptBean=inptServiceFacade.findLastGdsInptNo();
        dataSetBeanMapper.addVariable(outData, "gdsInptNo", gdsInptBean.getGdsInptNo());
    }
    
    
}
