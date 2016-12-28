package com.seoul.his.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.budget.to.RunBudgBean;

/**
 * <pre>
 * com.seoul.his.acc.budget.applicationService
 *    |_ AccBudgetApplicationService.java
 *
 * </pre>
 * @date : 2016. 12. 26. 오후 3:29:15
 * @version :
 * @author : 응디꿍디
 */

public interface AccBudgetApplicationService {
	public List<RunBudgBean> findRunBudg(Map<String, String> argsMap);
}





