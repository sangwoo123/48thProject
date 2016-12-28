package com.seoul.his.acc.budget.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.acc.budget.applicationService.AccBudgetApplicationService;
import com.seoul.his.acc.budget.to.RunBudgBean;

/**
 * <pre>
 * com.seoul.his.acc.budget.service
 *    |_ BudgetServiceFacadeImpl.java
 *
 * </pre>
 * @date : 2016. 12. 26. 오후 3:23:37
 * @version :
 * @author : 응디꿍디
 */
@Service
public class BudgetServiceFacadeImpl implements BudgetServiceFacade{
	@Autowired
	AccBudgetApplicationService accBudgetApplicationService;


	// 예산집행현황 조회
	@Override
	public List<RunBudgBean> findRunBudg(Map<String,String>argsMap) {
		List<RunBudgBean> runBudgList = accBudgetApplicationService.findRunBudg(argsMap);
		return runBudgList;
	}
}





