package com.seoul.his.hrs.salMng.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.salMng.to.PayRollBean;

public interface PayRollApplicationService {    
    
    List<PayRollBean> findPayrollList(Map<String, String> argsMap);
    
}
