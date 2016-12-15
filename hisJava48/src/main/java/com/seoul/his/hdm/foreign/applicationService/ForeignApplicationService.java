package com.seoul.his.hdm.foreign.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.exception.ForeignException;
import com.seoul.his.hdm.foreign.to.ReceiptInfoBean;
import com.seoul.his.hdm.foreign.to.PatInfoBean;


/**
 * 
 * @Package : com.seoul.his.hdm.foreign.applicationService 
 * @Class : ForeignApplicationService.java
 * @Create : 2016. 12. 15. 오후 8:19:19 
 * @Author : 강 현준
 */
public interface ForeignApplicationService {

	List<ReceiptInfoBean> findDiagnosisReceiptList(Map<String, String> argsMap);
	
	void registerDiagnosisReceipt(ReceiptInfoBean receiptInfoBean);

	void removeDiagnosisReceipt(ReceiptInfoBean receiptInfoBean);
	
	public List<PatInfoBean> findPatList(Map<String, String> argsMap);

	public PatInfoBean findPat(Map<String, String> argsMap);
	
}
