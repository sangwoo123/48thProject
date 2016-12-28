package com.seoul.his.acc.vat.applicationService;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.acc.vat.dao.TaxInvDAO;
import com.seoul.his.acc.vat.to.DetailTaxInvBean;
import com.seoul.his.acc.vat.to.TaxInvBean;

/**
 * <pre>
 * com.seoul.his.acc.vat.applicationService
 *    |_ TaxInvApplicationServiceImpl.java
 *
 * </pre>
 * @date : 2016. 12. 23. 오후 3:15:51
 * @version :
 * @author : 응디꿍디
 */
@Component
public class TaxInvApplicationServiceImpl implements TaxInvApplicationService{
	@Autowired
	TaxInvDAO taxInvDAO;

	@Override
	public List<DetailTaxInvBean> searchTaxInvoiceList(Map<String, String> argsMap) {
		List<DetailTaxInvBean> detailtaxnvBeanList = taxInvDAO.selectDetailTaxInvList(argsMap);

		return detailtaxnvBeanList;
	}
}





