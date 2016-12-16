package com.seoul.his.acc.resol.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.acc.resol.applicationService.ResolApplicationService;
import com.seoul.his.acc.resol.to.AccountBean;
import com.seoul.his.acc.resol.to.ResolLetBean;

/**
 * <pre>
 * com.seoul.his.acc.resol.service
 *    |_ ResolServiceFacadeImpl.java
 *
 * </pre>
 *
 * @date : 2016. 12. 14. 오후 4:35:06
 * @version :
 * @author : 응디꿍디
 */
@Service
public class ResolServiceFacadeImpl implements ResolServiceFacade {
	@Autowired
	ResolApplicationService resolApplicationService;

	@Override
	public List<ResolLetBean> findResolLetList(Map<String, String> argsMap) {
		List<ResolLetBean> resolLetBean = resolApplicationService.findResolLetList(argsMap);
		return resolLetBean;
	}

	@Override
	public List<AccountBean> findAccount(Map<String, String> argsMap) {
		List<AccountBean> findAccountList = resolApplicationService.findAccount(argsMap);
		return findAccountList;
	}
}
