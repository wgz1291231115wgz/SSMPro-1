package com.tledu.cn.dao;

import com.tledu.cn.pojo.AdminPojo;
import org.apache.ibatis.annotations.Mapper;

import java.util.LinkedList;

@Mapper
public interface AdminDao {

    public LinkedList<AdminPojo> adminList();

    public int saveAdmin(AdminPojo admin);

    public AdminPojo getUserByAcc(String acc);

    public int updataImgs(AdminPojo admin);

}
