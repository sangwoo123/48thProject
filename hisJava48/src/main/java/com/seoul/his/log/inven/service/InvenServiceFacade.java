package com.seoul.his.log.inven.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.inven.to.InvenSilsaBean;
import com.seoul.his.log.inven.to.InvenSilsaDtlInfoBean;
import com.seoul.his.log.inven.to.PstInvenBean;


/**
 * @Package  com.seoul.his.log.inven.service
 * @Class    InvenServiceFacade.java
 * @Create   2016. 5. 29.
 * @Author   Chun
 * @Description
 *
 * @LastUpdated
 */

public interface InvenServiceFacade {

	List<InvenSilsaBean> findInvenSilsaList(Map<String, String> argsMap);
	List<PstInvenBean> findPstInvenList(Map<String, String> argsMap);
	void batchInvenSilsaListProcess(List<InvenSilsaBean> invenSilsaList,
			List<InvenSilsaDtlInfoBean> invenSilsaDtlInfoList);
	void batchPstInvenListProcess(List<PstInvenBean> pstInvenList);
    void adjustPstInven(List<InvenSilsaDtlInfoBean> adjustPstInvenList);
}

