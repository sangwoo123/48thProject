package com.seoul.his.com.util.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.com.util.dao.CodeUtilDAO;
import com.seoul.his.com.util.to.OutCodeBean;
import com.seoul.his.common.util.BindCodeBean;

@Service
public class UtilApplicationServiceImpl implements UtilApplicationService {

    @Autowired
    private CodeUtilDAO codeUtilDAO;

    @Override
    public Map<String, List<OutCodeBean>> bindCode(List<BindCodeBean> bindCodeList) {
        Map<String, List<OutCodeBean>> bindCodeMap = new HashMap<String, List<OutCodeBean>>();
        for (BindCodeBean bcbean : bindCodeList) {
            bindCodeMap.put(bcbean.getDsName(), codeUtilDAO.selectCodeList(bcbean.getCode()));
        }
        return bindCodeMap;
    }


}