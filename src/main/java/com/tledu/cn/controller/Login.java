package com.tledu.cn.controller;

import com.tledu.cn.pojo.AdminPojo;
import com.tledu.cn.service.AdminService;
import com.tledu.cn.service.Impl.AdminServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Login {

    @Autowired
    AdminService adminService;

    @RequestMapping("/Login")
    @ResponseBody
    public boolean longin(@RequestBody AdminPojo admin){
        boolean longin = adminService.longin(admin);
        return longin;
    }

    @RequestMapping("/Mlogin")
    @ResponseBody
    public int mlogin(@RequestBody AdminPojo admin){
        int mlogin = adminService.mlogin(admin);
        return mlogin;
    }

    @RequestMapping("/GetUserByAcc")
    @ResponseBody
    public AdminPojo getUserByAcc(String acc){
        AdminPojo admin = adminService.getUserByAcc(acc);
        return admin;
    }

}
