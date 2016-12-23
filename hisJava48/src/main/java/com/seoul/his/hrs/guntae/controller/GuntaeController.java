package com.seoul.his.hrs.guntae.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.hrs.guntae.service.GuntaeServiceFacade;

/**
 * <pre>
 * com.seoul.his.hrs.guntae.controller
 *    |_ GuntaeController.java
 *
 * </pre>
 * @date : 2016. 12. 22. 오후 7:47:07
 * @version :
 * @author : User
 */
@RequestMapping("hrs/guntae")
@Controller
public class GuntaeController {

	 @Autowired
	    GuntaeServiceFacade guntaeServiceFacade;
	    @Autowired
	    DataSetBeanMapper dataSetBeanMapper;
}





