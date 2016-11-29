package com.seoul.his.hdm.foreign.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.ReceiptInfoBean;
import com.seoul.his.hdm.foreign.to.PatInfoBean;


public interface ForeignServiceFacade {

	public List<ReceiptInfoBean> findDiagnosisReceiptList(Map<String, String> argsMap);

	public PatInfoBean findPat(Map<String, String> argsMap);
	
	public List<PatInfoBean> findPatList(Map<String, String> argsMap);

	public void registerDiagnosisReceipt(ReceiptInfoBean receiptInfoBean);

	public void removeDiagnosisReceipt(ReceiptInfoBean receiptInfoBean);

	


	/*CalcuOutpaTrmtCostBean calcuOutpaTrmtCost(Map<String, Object> procedureMap) throws Exception;

	void registerRece(OutpaTrmtCostBean outpaTrmtCost);

	OutpaTrmtCostBean findRece(Map<String, String> argsMap);*/

}
