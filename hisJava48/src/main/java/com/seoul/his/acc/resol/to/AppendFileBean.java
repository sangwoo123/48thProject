package com.seoul.his.acc.resol.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Dataset(name = "dsAppendFile")
public class AppendFileBean extends BaseBean{
    String  seq          ,  //����
            fileSaveLoc  ,  //����������ġ
            fileSize     ,  //����ũ��
            fileSaveName ,  //÷�����ϸ�
            resolNo      ,  //���ǹ�ȣ
            slipNo       ;  //��ǥ��ȣ
}
