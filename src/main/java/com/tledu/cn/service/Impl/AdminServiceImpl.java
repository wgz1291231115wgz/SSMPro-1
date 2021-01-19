package com.tledu.cn.service.Impl;

import com.tledu.cn.dao.AdminDao;
import com.tledu.cn.pojo.AdminPojo;
import com.tledu.cn.service.AdminService;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.UUID;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminDao adminDao;

    //验证登录
    public boolean longin(AdminPojo admin){
        LinkedList<AdminPojo> adminPojos = adminDao.adminList();
        Iterator iterator = adminPojos.iterator();
        while (iterator.hasNext()){
            AdminPojo adminPojo = (AdminPojo) iterator.next();
            if (adminPojo.getAcc().equals(admin.getAcc())&&adminPojo.getPwd().equals(admin.getPwd())){
                return true;
            }
        }
        return false;
    }

    //注册账号
    public int mlogin(AdminPojo admin){
        int i=0;
        LinkedList<AdminPojo> adminPojos = adminDao.adminList();
        Iterator iterator = adminPojos.iterator();
        while (iterator.hasNext()){
            AdminPojo admin2 = (AdminPojo) iterator.next();
            if (admin.getAcc().equals(admin2.getAcc())){
                i = 2;
            }
            else if (admin.getEmail().equals(admin2.getEmail())){
                i = 3;
            }
            else if (admin.getPhone().equals(admin2.getPhone())){
                i = 4;
            }
        }
        if (i==0){
            admin.setId(UUID.randomUUID().toString());
            i = adminDao.saveAdmin(admin);
            return i;
        }else {
            return i;
        }
    }

    //修改头像
    public boolean updataImgs(String id,String imgs){
        AdminPojo admin = new AdminPojo();
        admin.setId(id);
        admin.setImgs("text/imgs/"+imgs);
        int i = adminDao.updataImgs(admin);
        if (i==1){
            return true;
        }
        return false;
    }

    //通过账号获得用户信息
    public AdminPojo getUserByAcc(String acc){
        AdminPojo admin = adminDao.getUserByAcc(acc);
        return admin;
    }

}
