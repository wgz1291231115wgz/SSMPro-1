package com.tledu.cn.service;

import com.tledu.cn.pojo.AdminPojo;
import org.apache.ibatis.session.SqlSession;

public interface AdminService {

    public boolean longin(AdminPojo admin);

    public int mlogin(AdminPojo admin);

    public boolean updataImgs(String id,String imgs);

    public AdminPojo getUserByAcc(String acc);

}
