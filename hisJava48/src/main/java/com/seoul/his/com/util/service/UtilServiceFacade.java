package com.seoul.his.com.util.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.util.to.OutCodeBean;
import com.seoul.his.common.util.BindCodeBean;


public interface UtilServiceFacade {

    public Map<String, List<OutCodeBean>> bindCode(List<BindCodeBean> bindCodeList);

}
