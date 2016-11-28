package com.seoul.his.acc.vat.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.vat.to.TaxInvBean;
import com.seoul.his.acc.vat.to.VATDeclBean;

public interface VATServiceFacade {

    List<TaxInvBean> findTaxInvList(Map<String, String> argsMap);

    void batchTaxInvProcess(List<TaxInvBean> tempTaxInvList);

    List<VATDeclBean> findVATDeclList(Map<String, String> argsMap);

}
