package com.seoul.his.hdm.foreign.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.foreign.applicationService.ForeignApplicationService;
import com.seoul.his.hdm.foreign.to.PatInfoBean;
import com.seoul.his.hdm.foreign.to.ReceiptInfoBean;

@Service
public class ForeignServiceFacadeImpl implements ForeignServiceFacade {
	@Autowired
	ForeignApplicationService foreignApplicationService;

	@Override
	public List<PatInfoBean> findPatList(Map<String, String> argsMap) {
		return foreignApplicationService.findPatList(argsMap);
	}

	@Override
	public PatInfoBean findPat(Map<String, String> argsMap) {
		return foreignApplicationService.findPat(argsMap);
	}
	
	@Override
    public PatInfoBean findLastPatNo() {
        System.out.println("OutPatMngntServiceFacadeImpl - findLastPatNo");
        return foreignApplicationService.findLastPatNo();
    }

	@Override
	public List<ReceiptInfoBean> findDiagnosisReceiptList(Map<String, String> argsMap) {
		return foreignApplicationService.findDiagnosisReceiptList(argsMap);
	}

	@Override
	public void registerDiagnosisReceipt(ReceiptInfoBean receiptInfoBean) {
		foreignApplicationService.registerDiagnosisReceipt(receiptInfoBean);
	}

	@Override
	public void removeDiagnosisReceipt(ReceiptInfoBean receiptInfoBean) {
		foreignApplicationService.removeDiagnosisReceipt(receiptInfoBean);
	}
	
	

}
