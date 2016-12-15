package com.seoul.his.hdm.foreign.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.foreign.dao.ForeignDAO;
import com.seoul.his.hdm.foreign.dao.ReceiptInfoDAO;
import com.seoul.his.hdm.foreign.exception.ForeignException;
import com.seoul.his.hdm.foreign.to.ReceiptInfoBean;
import com.seoul.his.hdm.foreign.to.PatInfoBean;


/**
 * 
 * @Package : com.seoul.his.hdm.foreign.applicationService 
 * @Class : ForeignApplicationServiceImpl.java
 * @Create : 2016. 12. 15. 오후 8:19:24 
 * @Author : 강 현준
 */
@Component
public class ForeignApplicationServiceImpl implements ForeignApplicationService {	
	
	@Autowired
	ForeignDAO foreignDAO;
	@Autowired
	ReceiptInfoDAO receiptInfoDAO;

	@Override
	public List<ReceiptInfoBean> findDiagnosisReceiptList(Map<String, String> argsMap) {
		return receiptInfoDAO.selectReceiptList(argsMap);
	}

	@Override
	public void registerDiagnosisReceipt(ReceiptInfoBean receiptInfoBean) {
		receiptInfoDAO.insertReceipt(receiptInfoBean);

	}

	@Override
	public void removeDiagnosisReceipt(ReceiptInfoBean receiptInfoBean) {
		receiptInfoDAO.deleteReceipt(receiptInfoBean);
	}

	@Override
	public List<PatInfoBean> findPatList(Map<String, String> argsMap) {
		return foreignDAO.selectPatList(argsMap);
	}

	@Override
	public PatInfoBean findPat(Map<String, String> argsMap) {
		return foreignDAO.selectPat(argsMap);
	}
	
}
