package com.seoul.his.msv.sup.comprehensiveexam.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.checkup.to.RsltBean;

public interface SynthesisCheckupResultDAO {
    
    /* 종합검진 결과관리 - 결과조회 */
    List<SynthesisCheckupResultBean> selectRsltList(Map<String, String> argsMap);
    
    /* 종합검진 결과관리 - 저장 */
    void updateRslt(SynthesisCheckupResultBean rsltBean);

}
