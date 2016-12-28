package com.seoul.his.acc.vat.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.vat.to.TaxInvBean;

public interface TaxInvApplicationService {

    List<TaxInvBean> findTaxInvList(Map<String, String> argsMap);

    void batchTaxInvProcess(List<TaxInvBean> taxInvList);
}
