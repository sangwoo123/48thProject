package com.seoul.his.acc.budget.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.budget.to.RunBudgBean;

/**
 * <pre>
 * com.seoul.his.acc.budget.service
 *    |_ BudgetServiceFacade.java
 *
 * </pre>
 * @date : 2016. 12. 26. 오후 3:23:15
 * @version :
 * @author : 응디꿍디
 */

public interface BudgetServiceFacade {
	public List<RunBudgBean> findRunBudg(Map<String,String>argsMap);

}





