package com.seoul.his.log.ctrt.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.log.ctrt.to.CtrtBean;

public interface CtrtApplicationService {

	// 계약물품조회
	public List<CtrtBean> findCtrtList(Map<String, String> argsMap);

	// 계약물품 일괄처리
	public void batchCtrtProcess(List<CtrtBean> ctrtBeanList);
}
