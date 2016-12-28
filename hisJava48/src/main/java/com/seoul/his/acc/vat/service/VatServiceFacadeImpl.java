package com.seoul.his.acc.vat.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.acc.vat.applicationService.VatApplicationService;
import com.seoul.his.acc.vat.to.TaxInvBean;
import com.seoul.his.acc.vat.to.VATDeclBean;

/**
 * <pre>
 * com.seoul.his.acc.vat.service
 *    |_ VatServiceFacadeImpl.java
 *
 * </pre>
 * @date : 2016. 12. 16. 오후 12:20:33
 * @version :
 * @author : 응디꿍디
 */
@Service
public class VatServiceFacadeImpl implements VatServiceFacade{
	@Autowired
	VatApplicationService vatApplicationService;

	@Override
	public List<TaxInvBean> searchTaxInvList(Map<String, String> argsMap) {
		List<TaxInvBean> taxInvList = vatApplicationService.searchTaxInvoiceList(argsMap);
		return taxInvList;
	}

	@Override
	public List<TaxInvBean> findTaxInvList(Map<String, String> argsMap) {
		return null;
	}

	@Override
	public void batchTaxInvProcess(List<TaxInvBean> tempTaxInvList) {
	}

	@Override
	public List<VATDeclBean> findVATDeclList(Map<String, String> argsMap) {
		return null;
	}


}





