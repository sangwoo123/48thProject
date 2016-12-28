package com.seoul.his.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.budget.exception.BimokCopyException;
import com.seoul.his.acc.budget.to.BudgBimokBean;
import com.seoul.his.acc.budget.to.BudgUseDeptBean;
import com.seoul.his.acc.budget.to.JobLimitBean;
import com.seoul.his.acc.budget.to.RunBudgBean;

public interface AccBudgetApplicationService {

	List<BudgBimokBean> findBimokList(Map<String, String> argsMap);

	List<BudgUseDeptBean> findBudgUseDept(Map<String, String> argsMap);
	
	void batchBimokProcess(List<BudgBimokBean> bimokList);

	List<BudgBimokBean> copyBimok(String year) throws BimokCopyException;

	void batchBudgUseDeptProcess(List<BudgUseDeptBean> useDeptBeanList);

	List<RunBudgBean> findRunBudg(Map<String, String> argsMap);

	List<JobLimitBean> findJobLimit(Map<String, String> argsMap);

	void modifyJobLimit(List<JobLimitBean> jobLimitList);

}
