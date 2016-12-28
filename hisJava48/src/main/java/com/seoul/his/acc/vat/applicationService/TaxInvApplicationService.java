package com.seoul.his.acc.vat.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.vat.to.DetailTaxInvBean;
import com.seoul.his.acc.vat.to.TaxInvBean;

/**
 * <pre>
 * com.seoul.his.acc.vat.applicationService
 *    |_ TaxInvApplicationService.java
 *
 * </pre>
 * @date : 2016. 12. 23. 오후 3:15:31
 * @version :
 * @author : 응디꿍디
 */

public interface TaxInvApplicationService {
	List<DetailTaxInvBean> searchTaxInvoiceList(Map<String, String> argsMap);
}





