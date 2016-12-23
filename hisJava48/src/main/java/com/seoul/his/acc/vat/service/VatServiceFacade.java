package com.seoul.his.acc.vat.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.vat.to.TaxInvBean;

/**
 * <pre>
 * com.seoul.his.acc.vat.service
 *    |_ VatServiceFacade.java
 *
 * </pre>
 * @date : 2016. 12. 16. 오후 12:20:18
 * @version :
 * @author : 응디꿍디
 */

public interface VatServiceFacade {

	List<TaxInvBean> searchTaxInvList(Map<String, String> argsMap);

}





