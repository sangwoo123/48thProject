package com.seoul.his.log.inven.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.inven.to.InvenSilsaBean;
import com.seoul.his.log.inven.to.InvenSilsaDtlInfoBean;



/**
 * @Package  com.seoul.his.log.inven.applicationService
 * @Class    InvenSilsaAS.java
 * @Create   2016. 5. 29.
 * @Author   Chun
 * @Description
 *
 * @LastUpdated
 */
public interface InvenSilsaApplicationService {

	List<InvenSilsaBean> findInvenSilsaList(Map<String, String> argsMap);
	void batchInvenSilsaListProcess(List<InvenSilsaBean> invenSilsaList,
			List<InvenSilsaDtlInfoBean> invenSilsaDetailList);
    void adjustPstInven(List<InvenSilsaDtlInfoBean> gdsAnspHistList);
}

