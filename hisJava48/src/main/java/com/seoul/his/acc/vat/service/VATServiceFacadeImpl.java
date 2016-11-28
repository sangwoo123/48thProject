package com.seoul.his.acc.vat.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.acc.vat.applicationService.TaxInvApplicationService;
import com.seoul.his.acc.vat.applicationService.VATDeclApplicationService;
import com.seoul.his.acc.vat.to.TaxInvBean;
import com.seoul.his.acc.vat.to.VATDeclBean;

@Service
public class VATServiceFacadeImpl implements VATServiceFacade{
    @Autowired
    TaxInvApplicationService taxInvApplicationService;
    @Autowired
    VATDeclApplicationService vatApplicationService;

    @Override
    public List<TaxInvBean> findTaxInvList(Map<String, String> argsMap) {
        return taxInvApplicationService.findTaxInvList(argsMap);
    }

    @Override
    public void batchTaxInvProcess(List<TaxInvBean> tempTaxInvList) {
        taxInvApplicationService.batchTaxInvProcess(tempTaxInvList);
    }

    @Override
    public List<VATDeclBean> findVATDeclList(Map<String, String> argsMap) {
        return vatApplicationService.findVATDeclList(argsMap);
    }


}
