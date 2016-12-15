package com.seoul.his.hdm.foreign.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.ReceiptInfoBean;

/**
 * 
 * @Package : com.seoul.his.hdm.foreign.dao 
 * @Class : ReceiptInfoDAO.java
 * @Create : 2016. 12. 15. 오후 8:20:18 
 * @Author : 강 현준
 */
public interface ReceiptInfoDAO {

    List<ReceiptInfoBean> selectReceiptList(Map<String, String> argsMap);

    void insertReceipt(ReceiptInfoBean receiptInfoBean);
    
    void updateReceipt(ReceiptInfoBean receiptInfoBean);

    void deleteReceipt(ReceiptInfoBean receiptInfoBean);

}
