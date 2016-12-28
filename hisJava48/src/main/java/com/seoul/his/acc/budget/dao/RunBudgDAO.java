package com.seoul.his.acc.budget.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.acc.budget.to.RunBudgBean;

/**
 * <pre>
 * com.seoul.his.acc.budget.dao
 *    |_ RunBudgDAO.java
 *
 * </pre>
 * @date : 2016. 12. 26. 오후 3:34:10
 * @version :
 * @author : 응디꿍디
 */

public interface RunBudgDAO {
	public List<RunBudgBean> selectRunBudg(Map<String, String> argsMap);

}





