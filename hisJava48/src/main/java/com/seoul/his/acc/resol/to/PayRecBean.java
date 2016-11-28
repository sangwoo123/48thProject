package com.seoul.his.acc.resol.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Dataset(name = "dsPayRec")
public class PayRecBean extends BaseBean {
    private String  seq, 			// ����
                    cardNo, 		// ī���ȣ
                    payDiv, 		// ���ұ���
                    stdTask, 		// ����������ȣ
                    stdBimok, 		// �������
                    cardUseDate,	// ī������
                    aprvNo, 		// ���ι�ȣ
                    custCd, 		// �ŷ�ó�ڵ�
                    operNo, 		// ����ڹ�ȣ
                    addr, 			// �ּ�
                    depoOwner, 		// ������
                    transDate, 		// ��ü��
                    transBank, 		// ��ü����
                    accountNo, 		// ���¹�ȣ
                    price, 			// �ݾ�
                    att, 			// ������
                    cttInwon, 		// �����ο�
                    users, 			// �����
                    foodCostYb, 	// �ĺ񿩺�
                    taxinvYb, 		// ���ݰ�꼭 ����
                    note, 			// ���
                    accPrid, 		// ȸ����
                    resolNo, 		// ���ǹ�ȣ
                    slipNo,			// ��ǥ��ȣ
                    exePurp;		// �������
}
