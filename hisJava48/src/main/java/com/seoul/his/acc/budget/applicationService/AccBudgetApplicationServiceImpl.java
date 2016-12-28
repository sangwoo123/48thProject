package com.seoul.his.acc.budget.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.acc.budget.dao.RunBudgDAO;
import com.seoul.his.acc.budget.to.RunBudgBean;

/**
 * <pre>
 * com.seoul.his.acc.budget.applicationService
 *    |_ AccBudgetApplicationServiceImpl.java
 *
 * </pre>
 * @date : 2016. 12. 26. 오후 3:29:30
 * @version :
 * @author : 응디꿍디
 */

@Component
public class AccBudgetApplicationServiceImpl implements AccBudgetApplicationService{
	  // 예산집행현황 조회
	@Autowired
		RunBudgDAO runBudgDAO;
		@Override
		public List<RunBudgBean> findRunBudg(Map<String, String> argsMap) {
			List<RunBudgBean> runBudgList = runBudgDAO.selectRunBudg(argsMap);
			return runBudgList;
		}
}





